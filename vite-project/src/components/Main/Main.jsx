import { useState } from "react";
import Card from "../Card/Card";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../Avatar/EditAvatar";
import NewCard from "../NewCard/NewCard";
import RemoveCard from "../RemoveCard/RemoveCard";
import ImagePopup from "../ImagePopup/ImagePopup";
import Popup from "../Popup/Popup";


const initialCards = [
  { name: "Valle de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/hlw/yosemite.jpg", _id: "1" },
  { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/hlw/lake-louise.jpg", _id: "2" }
];

export default function Main() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(config) {
    setPopup(config);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
    handleOpenPopup({
      title: null,
      children: <ImagePopup card={card} />
    });
  }

  function handleDeleteClick() {
    handleOpenPopup({
      title: "¿Estás seguro?",
      children: <RemoveCard />
    });
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container">
          <div 
            className="profile__image-overlay" 
            onClick={() => handleOpenPopup({ title: "Cambiar foto de perfil", children: <EditAvatar /> })}
          />
          <div className="profile__image" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button 
            className="profile__edit-button" 
            type="button" 
            onClick={() => handleOpenPopup({ title: "Editar perfil", children: <EditProfile /> })}
          />
          <p className="profile__description">Explorador</p>
        </div>
        <button 
          className="profile__add-button" 
          type="button" 
          onClick={() => handleOpenPopup({ title: "Nuevo lugar", children: <NewCard /> })}
        />
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {initialCards.map((card) => (
            <Card 
              key={card._id} 
              card={card} 
              onCardClick={handleCardClick}
              onDeleteClick={handleDeleteClick} 
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
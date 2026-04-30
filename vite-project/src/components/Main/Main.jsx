import { useState } from "react";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import NewCard from "./forms/NewCard/NewCard";
import EditProfile from "./forms/EditProfile/EditProfile";
import EditAvatar from "./forms/EditAvatar/EditAvatar";

const initialCards = [
  {
    isLiked: false,
    _id: '1',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
  },
  {
    isLiked: false,
    _id: '2',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
  }
];

export default function Main() {
  const [popup, setPopup] = useState(null);

  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatarPopup = { title: "Cambiar foto de perfil", children: <EditAvatar /> };

  function handleOpenPopup(popupConfig) {
    setPopup(popupConfig);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
    setPopup({
      title: null, // Al ser null, el componente Popup aplicará la clase de imagen
      children: (
        <>
          <img src={card.link} alt={card.name} className="popup__image" />
          <p className="popup__caption">{card.name}</p>
        </>
      )
    });
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container">
          <img 
            src="https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg" 
            alt="Avatar" 
            className="profile__image" 
          />
          <div className="profile__image-overlay" onClick={() => handleOpenPopup(editAvatarPopup)}></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button className="profile__edit-button" type="button" onClick={() => handleOpenPopup(editProfilePopup)}></button>
          <p className="profile__description">Explorador</p>
        </div>
        <button className="profile__add-button" type="button" onClick={() => handleOpenPopup(newCardPopup)}></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {initialCards.map((card) => (
            <Card key={card._id} card={card} onCardClick={handleCardClick} />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
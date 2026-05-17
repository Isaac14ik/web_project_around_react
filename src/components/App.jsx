// src/components/App.jsx
import { useEffect, useState } from 'react';
import Header from './Header/Header';  
import Main from './Main/Main';      
import Footer from './Footer/Footer';  
import Popup from './Popup/Popup';
import EditProfile from './EditProfile/EditProfile';
import EditAvatar from './EditAvatar/EditAvatar';
import NewCard from './NewCard/NewCard';
import ImagePopup from './ImagePopup/ImagePopup';
import RemoveCard from './RemoveCard/RemoveCard';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import '../index.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [popup, setPopup] = useState(null);
  const [cardToRemove, setCardToRemove] = useState(null);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardList()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleOpenPopup = (popupName) => {
    setPopup(popupName);
  };

  const handleClosePopup = () => {
    setPopup(null);
    setSelectedCard(null);
    setCardToRemove(null);
  };

  const handleUpdateUser = (data) => {
    api
      .setUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateAvatar = (data) => {
    api
      .setUserAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  const handleCardLike = (card) => {
    const isLiked = card.isLiked;
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  };

  const handleCardDelete = (card) => {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  const handleAddPlaceSubmit = (data) => {
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleRemoveClick = (card) => {
    setCardToRemove(card);
    setPopup('remove');
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <div className="page__content">
          <Header />
          <Main
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onCardClick={handleCardClick}
            onRemoveClick={handleRemoveClick}
            onOpenPopup={handleOpenPopup}
          />
          <Footer />
        </div>

        {popup === 'edit' && (
          <Popup onClose={handleClosePopup}>
            <EditProfile onClose={handleClosePopup} />
          </Popup>
        )}

        {popup === 'avatar' && (
          <Popup onClose={handleClosePopup}>
            <EditAvatar onClose={handleClosePopup} />
          </Popup>
        )}

        {popup === 'newcard' && (
          <Popup onClose={handleClosePopup}>
            <NewCard onAddPlace={handleAddPlaceSubmit} onClose={handleClosePopup} />
          </Popup>
        )}

        {selectedCard && (
          <ImagePopup card={selectedCard} onClose={handleClosePopup} />
        )}

        {cardToRemove && popup === 'remove' && (
          <Popup onClose={handleClosePopup}>
            <RemoveCard
              card={cardToRemove}
              onConfirmDelete={handleCardDelete}
              onClose={handleClosePopup}
            />
          </Popup>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
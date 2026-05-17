import { useContext } from 'react';
import Card from '../Card/Card';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Main({
  cards,
  onCardLike,
  onCardDelete,
  onCardClick,
  onRemoveClick,
  onOpenPopup,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="profile__avatar"
          />
          <button
            className="profile__avatar-edit"
            onClick={() => onOpenPopup('avatar')}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              onClick={() => onOpenPopup('edit')}
            ></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          onClick={() => onOpenPopup('newcard')}
        ></button>
      </section>

      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            onCardClick={onCardClick}
            onRemoveClick={onRemoveClick}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
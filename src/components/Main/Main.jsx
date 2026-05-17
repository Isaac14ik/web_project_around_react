// src/components/Main/Main.jsx
import { useContext } from 'react';
import Card from '../Card/Card';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Main({ cards, onCardLike, onCardClick, onRemoveClick, onOpenPopup }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container" onClick={() => onOpenPopup('avatar')}>
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="profile__image"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={() => onOpenPopup('edit')}
          />
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={() => onOpenPopup('newcard')}
        />
      </section>

      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardLike={onCardLike}
            onCardClick={onCardClick}
            onRemoveClick={onRemoveClick}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
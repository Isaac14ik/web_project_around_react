import { useState } from 'react';

function NewCard({ onAddPlace, onClose }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({ name, link });
    setName('');
    setLink('');
  };

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <h2 className="popup__title">Nuevo lugar</h2>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_title"
          id="card-title"
          maxLength="30"
          minLength="1"
          name="cardName"
          placeholder="Título"
          required
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="card-title-error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_link"
          id="card-link"
          name="cardLink"
          placeholder="Enlace a la imagen"
          required
          type="url"
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}

export default NewCard;
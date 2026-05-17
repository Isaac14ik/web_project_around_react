import { useRef, useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function EditAvatar({ onClose }) {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateAvatar({ avatar: avatarRef.current.value });
  };

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <h2 className="popup__title">Cambiar foto de perfil</h2>
      <label className="popup__label">
        <input
          ref={avatarRef}
          className="popup__input popup__input_type_avatar"
          id="avatar-url"
          name="avatar"
          placeholder="Enlace a la imagen"
          required
          type="url"
        />
        <span className="popup__error" id="avatar-url-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar;
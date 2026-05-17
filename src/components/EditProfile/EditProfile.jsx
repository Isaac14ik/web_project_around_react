import { useState, useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function EditProfile({ onClose }) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || '');
      setDescription(currentUser.about || '');
    }
  }, [currentUser]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({ name, about: description });
  };

  return (
    
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      
          <input className="popup__input popup__input_type_name" id="profile-name-input" name="name" placeholder="Nombre" type="text" required minlength="2" maxlength="40" />
          <span className="popup__error" id="profile-name-input-error"></span>
          <input className="popup__input popup__input_type_description" id="profile-description-input" name="description" placeholder="Acerca de mí" type="text" required minlength="2" maxlength="200" />
          <span className="popup__error" id="profile-description-input-error"></span>
          <button className="button popup__button" type="submit">Guardar</button>
        
    </form>
    
  );
}

export default EditProfile;
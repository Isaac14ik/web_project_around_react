export default function EditProfile() {
  return (
    <form className="popup__form" name="edit-profile" noValidate>
      <label className="popup__field">
        <input className="popup__input" id="profile-name" name="name" placeholder="Nombre" required minLength="2" maxLength="40" type="text" />
        <span className="popup__error" id="profile-name-error"></span>
      </label>
      <label className="popup__field">
        <input className="popup__input" id="profile-about" name="about" placeholder="Acerca de mí" required minLength="2" maxLength="200" type="text" />
        <span className="popup__error" id="profile-about-error"></span>
      </label>
      <button className="button popup__button" type="submit">Guardar</button>
    </form>
  );
}
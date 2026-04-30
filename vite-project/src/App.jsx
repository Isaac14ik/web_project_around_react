import React from 'react';
// Asegúrate de importar aquí tu CSS si ya lo moviste a la carpeta de src


function App() {
  return (
    <div className="page__content">
      <header className="header page__section">
        <img 
          src="./images/logo.svg" 
          alt="Logotipo Around The U.S." 
          className="logo header__logo" 
        />
      </header>

      <main className="content">
        <section className="profile page__section">
          <div className="profile__image-container">
            <img 
              src="https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg" 
              alt="Avatar" 
              className="profile__image" 
            />
            <div className="profile__image-overlay"></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button 
              className="profile__edit-button" 
              type="button" 
              aria-label="Editar perfil"
            ></button>
            <p className="profile__description">Explorador</p>
          </div>
          <button 
            className="profile__add-button" 
            type="button" 
            aria-label="Agregar tarjeta"
          ></button>
        </section>

        <section className="cards page__section">
          <ul className="cards__list">
            {/* Las tarjetas se renderizarán aquí más adelante */}
          </ul>
        </section>
      </main>

      <footer className="footer page__section">
        <p className="footer__copyright">© 2026 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;
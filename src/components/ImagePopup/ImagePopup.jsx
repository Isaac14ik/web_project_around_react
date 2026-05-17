import Popup from '../Popup/Popup';

function ImagePopup({ card, onClose }) {
  return (
    <div className="popup popup_type_image popup_opened">
      <div className="popup__image-container">
        <button className="popup__close" onClick={onClose}></button>
        <img src={card.link} alt={card.name} className="popup__image" />
        <h2 className="popup__image-title">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
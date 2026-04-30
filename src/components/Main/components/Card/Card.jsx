export default function Card(props) {
  const { name, link, isLiked } = props.card;

  return (
    <li className="card">
      <img 
        className="card__image" 
        src={link} 
        alt={name} 
        onClick={() => props.onCardClick(props.card)}
      />
      <button className="card__delete-button" type="button" aria-label="Delete card" />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button 
          className={`card__like-button ${isLiked ? 'card__like-button_active' : ''}`} 
          type="button" 
          aria-label="Like card" 
        />
      </div>
    </li>
  );
}
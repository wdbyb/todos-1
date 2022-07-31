import React from 'react';

const Card = (props) => {
  const {
    title,
    description,
    id,
    favorite = false,
    onDelete,
    onFavorite,
  } = props;

  return (
    <div className={`card ${favorite ? 'alert-warning' : ''}`}>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
        <button
          className="btn btn-info"
          onClick={() => onFavorite(id, favorite)}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Card;

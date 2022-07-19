import React from 'react';

const Card = (props) => {
  const { title, description, id, onDelete } = props;

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;

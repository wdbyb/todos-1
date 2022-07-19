import React from 'react';

const Card = (props) => {
  const { title, description, id, onDelete } = props;

  return (
    <div>
      <h2>Card</h2>
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Card;

import React, { useState } from 'react';
// a bit later watch react routing
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Card from './Card';

const App = () => {
  const [cards, setCards] = useState([]);

  const handleFormSubmit = (e, data) => {
    e.preventDefault();

    setCards((prevState) => [...prevState, { ...data, id: Date.now() }]);
  };

  const handleCardDelete = (id) => {
    setCards((prevState) => prevState.filter((card) => card.id !== id));
  };

  const handleCardFavorite = (id, isFavorite) => {
    setCards((prevState) =>
      prevState.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            favorite: !card.favorite,
          };
        }

        return card;
      })
    );
  };

  return (
    <div className="container">
      <Form onSubmit={handleFormSubmit} />
      <div>
        <div className="row">
          {cards.map((card, i) => (
            <div className="col-md-4">
              <Card
                onDelete={handleCardDelete}
                onFavorite={handleCardFavorite}
                title={card.title}
                description={card.description}
                favorite={card.favorite}
                id={card.id}
                key={card.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

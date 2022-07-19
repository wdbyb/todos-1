import React, { useState } from 'react';
// a bit later watch react routing
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Card from './Card';

const App = () => {
  const [cards, setCards] = useState([]);

  const handleFormSubmit = (e, data) => {
    e.preventDefault();

    setCards((prevState) => [...prevState, { ...data, id: cards.length + 1 }]);
  };

  const handleCardDelete = (id) => {
    setCards((prevState) => prevState.filter((card) => card.id !== id));
  };

  return (
    <div className="container">
      <Form onSubmit={handleFormSubmit} />
      <div>
        <h1>App</h1>
        <div>
          {cards.map((card, i) => (
            <Card
              onDelete={handleCardDelete}
              title={card.title}
              description={card.description}
              id={card.id}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

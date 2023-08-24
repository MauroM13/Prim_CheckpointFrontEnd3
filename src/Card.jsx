//Este componente deverá receber dados por Props e mostrar as Informações em Tela

import React, { useState } from 'react';

// Componente Card
const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

// Componente CardList
const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

// Componente App
const App = () => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length < 3 || content.length < 6) {
      setError('Por favor, verifique os dados inseridos no formulário');
      return;
    }

    const newCard = { title, content };
    setCards([...cards, newCard]);
    setTitle('');
    setContent('');
    setError('');
  };

  return (
    <div className="app">
      <h1>Card App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título (mín. 3 caracteres)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Conteúdo (mín. 6 caracteres)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      <CardList cards={cards} />
    </div>
  );
};

export default App;


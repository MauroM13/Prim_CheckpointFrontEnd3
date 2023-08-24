
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
// App.js

import React, { useState } from 'react';
import CardList from './src/CardList.js';

import './styles.css'; // Importe seus estilos se necessário

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
        {/* Inputs and button */}
      </form>
      {error && <p className="error">{error}</p>}
      <CardList cards={cards} />
    </div>
  );
};

export default App;

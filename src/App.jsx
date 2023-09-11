import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceNumber, setAdviceNumber] = useState(1);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setAdvice(`"${data.slip.advice}"`); // Colocar el consejo entre comillas
        setAdviceNumber(data.slip.id);
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
      });
  };

  const handleGenerateAdvice = () => {
    fetchAdvice();
  };

  return (
    <div className="App">
      <div className="advice-container">
        <h1 className='h'> ADVICE # {adviceNumber}</h1>
        <p>{advice}</p>
        <button onClick={handleGenerateAdvice}>#</button>
      </div>
    </div>
  );
}

export default App;

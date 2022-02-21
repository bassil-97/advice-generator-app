import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

import Dice from './images/icon-dice.svg';


function App() {

  const [newAdvice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewAdvice = () => {
    setIsLoading(true)
    axios.get('https://api.adviceslip.com/advice')
    .then(res => {
      setAdvice({
        advice: res.data['slip']['advice'],
        id: res.data['slip']['id'],
      });

      setIsLoading(false);
    });
  };

  return (
    <div className="App">
      <div className='advice__container'>
        <div className='advice_body'>
          {newAdvice && <small>advice #{newAdvice.id}</small>}
          {newAdvice && !isLoading && <h4>
          “
            {newAdvice.advice}
          ”
          </h4>}
          {!newAdvice && !isLoading && <h4>click below to get a new advice</h4>}
          {isLoading && <div className="loader"></div>}
        </div>
        <div className='divider'></div>
        <div className='generate_advice_btn' onClick={fetchNewAdvice}>
          <img src={Dice} alt="img-dice" />
        </div>
      </div>
    </div>
  );
}

export default App;

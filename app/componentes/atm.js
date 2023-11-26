"use client";

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withdraw, incrementByAmount } from '../GlobalRedux/slicers/ATMslicer';


const ATMComponent = () => {
    
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleWithdraw = () => {
    dispatch(withdraw());
    setInputValue("");
  };

  const handleIncrementByAmount = () => {
    const parsedValue = parseFloat(inputValue); 
    if (!isNaN(parsedValue)) {
      dispatch(incrementByAmount(parsedValue));
    }
    setInputValue("");
  };

  return (
    <div className='mx-auto text-center'>
      <h1 className='mt-7 mb-4'>Saldo em caixa: {counterValue}€</h1>
      <input className='text-black px-3 py-1' type="number" value={inputValue} onChange={handleInputChange} />
      <div className='mt-3'>
        <button className='px-3 py-1 bg-yellow-600 mx-2' onClick={handleWithdraw}>Levantar saldo</button>
      <button className='px-3 py-1 bg-green-600 mx-2' onClick={handleIncrementByAmount}>Adicionar saldo</button>
      </div>
    </div>
  );
};

export default ATMComponent;

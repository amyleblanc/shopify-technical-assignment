import React from 'react';
import { useHistoryContext } from '../contexts/useHistoryContext';
import Response from './Response';

export default function ResponseList() {
  const { history } = useHistoryContext();

  return (
    <>
      {history.map(element => (
        <Response 
          question={element.question}
          answer={element.answer} 
          key={element.id}
        />
      ))}
    </>
  );
}

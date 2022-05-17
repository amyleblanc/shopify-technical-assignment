import React from 'react';
import { useHistoryContext } from '../contexts/useHistoryContext';
import Response from './Response';

export default function ResponseList() {
  const { history } = useHistoryContext();

  const filterHistory = (array) => {
    const filtered = [];
    for (const obj of array) {
      if (obj.answer !== "") {
        filtered.push(obj);
      }
    }
    return filtered;
  }
  const responses = filterHistory(history);

  return (
    <>
      {responses.map(element => (
        <Response 
          question={element.question}
          answer={element.answer} 
          key={element.id}
        />
      ))}
    </>
  );
}

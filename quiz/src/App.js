import React from 'react';
import { useState, useEffect } from 'react';

const QUIZ_API_BASE_URL = 'http://universities.hipolabs.com/search?country=United+States';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const response = await fetch(QUIZ_API_BASE_URL);
    const jsonData = await response.json();
    setQuestions(jsonData);
  };

  // Check if the questions array has data before accessing the 'country' property
  // const countryName = questions.length > 0 ? questions[0].country : null;

  return (
    <>
      {
        questions.map(({name, domains}, i) => (
          <div key={i} className="card">
          <div className="card-body">
            <h1>{name}</h1>
            {domains.map((domain, j) => <p key={j}>{domain}</p>)}
          </div>
        </div>
      ))
      }

    </>
  );
}


// <h1>{questions.length}</h1>
// {questions.length > 0 ? (
//   <ul>
//     {questions.map((question, index) => (
//       <li key={index}>{question.country}</li>
//       question.domains.map((answer, index) =>(
//         <h2>{question.domains.answer}</h2>
//       ))
//     ))}
//   </ul>
// ) : (
//   <p>Loading...</p>
// )}

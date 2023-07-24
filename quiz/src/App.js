import React from 'react';
import { useState, useEffect } from 'react';

const QUIZ_API_BASE_URL = 'http://universities.hipolabs.com/search?country=United+States';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const response = await fetch(QUIZ_API_BASE_URL);
    const jsonData = await response.json();
    setQuestions(jsonData);
  };
  function handleClick() {
    setPage(page + 1);
  }
  let questionsList = questions[page];

  return (
    <>
      <h1>Hola</h1>
      {questionsList && (
        <div>
          <p>
            <strong>Name:</strong> {questionsList.name}
          </p>
          <p>
            <strong>Domains:</strong> {questionsList.domains.join(', ')}
          </p>
        </div>
      )}
      <button onClick={handleClick}>Next</button>
    </>
  );
}


// return (
//   <>
//     {questions.length > 0 ? (
//       <div>
//         {
//           questions.map(({question, answers}, i) => (
//             <div key={i} className="card">
//             <div className="card-body">
//               <h1>{question}</h1>
//               {answers.map((answer, j) => <h2 key={j}>{answer}</h2>)}

//               <button>Back</button>
//               <button disabled="true">Next</button>
//             </div>
//           </div>
//           ))
//         }

//       </div>
//     ) : (
//       <p>Loading...</p>
//      )}
//   </>
// );

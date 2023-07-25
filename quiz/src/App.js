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

  function answerCheck() {
    if(questionsList.correctAnswer) {
      return ("answer correct");
    }else{
      return ("answer incorrect");
    }
  }
  return (
    <>
    {questionList && (
      <div>
        <h1>{questionList.question}</h1>
        {questionList.answers.map((answer, j) =>
          <h2
            key={j}
            onClick={() => console.log(answerCheck(j))}
            className={answerCheck(j)}
            style={{ pointerEvents: 'none' }} // Disable pointer events
          >
            {answer}
          </h2>
        )};
      </div>
    )}
    <button onClick={handleClickBack}>Back</button>
    <button onClick={handleClickNext}>Next</button>
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


// function answerCheck(selectedAnswerIndex) {
//   const correctAnswerIndex = questions[page].correctAnswer;
//   if (selectedAnswerIndex === correctAnswerIndex) {
//     return "answer correct";
//   } else {
//     return "answer incorrect";
//   }
// }

// <{questionList && (
//   <div>
//     <h1>{questionList.question}</h1>
//     {questionList.answers.map((answer, j) =>
//      <h2
//         key={j}
//         onClick={() => console.log(answerCheck(j))}
//         className={answerCheck(j)}
//         style={{ pointerEvents: 'none' }} // Disable pointer events
//       >
//         {answer}
//       </h2>
//     )};
//   </div>
// )}
// <button onClick={handleClickBack}>Back</button>
// <button onC

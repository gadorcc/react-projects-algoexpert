import React, {useState, useEffect} from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

export default function QuestionList() {
  const [question, setQuestion] = useState([])

  useEffect(() => {
    fetch(QUESTIONS_API_BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestion(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div class="category">
        <h2>CSS -  1 / 5</h2>
        <div class="question">
          <div class="status incorrect"></div>
          <h3>{question[1].name}</h3>
        </div>
        <div class="question">
          <div class="status partially-correct"></div>
          <h3>Navbar</h3>
        </div>
      </div>

    </>
  );
}

import React, { useState, useEffect } from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

export default function QuestionList() {
  const [questions, setQuestions] = useState([])
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    fetch(QUESTIONS_API_BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].id);
        setQuestions(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(SUBMISSIONS_API_BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].id);
        setSubmissions(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div class="category">
        <h2>CSS -  1 / 5</h2>
        {questions.map((question) => (
          <div class="question">
            <div class="status incorrect"></div>
          <h3>{question.name}</h3>
        </div>
      ))}</div>

    </>
  );
}


{/* <div class="category">
        <h2>CSS -  1 / 5</h2>
        {questions.map((question) => (
          <div class="question">
            <div class="status incorrect"></div>
          <h3>{question.name}</h3>
        </div>
      ))}</div> */}

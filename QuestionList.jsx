import React from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

export default function QuestionList() {
  const [data, setData] = useState({})

  useEffect(() => {
    getQuestionsWithFetch();
  }, []);

  const getQuestionsWithFetch = async () => {
    const response = await fetch(QUESTIONS_API_BASE_URL);
    const jsonData = await response.json();
    setData(jsondata)
  };
  return (
    <>
      <div class="category">
        <h2>CSS -  1 / 5</h2>
        <div class="question">
          <div class="status incorrect"></div>
          <h3>{data[1]}</h3>
        </div>
        <div class="question">
          <div class="status partially-correct"></div>
          <h3>Navbar</h3>
        </div>
      </div>

    </>
  );
}

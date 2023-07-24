import React from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

export default function QuestionList() {
  const [questions, submissions] = useQuestionsAndSubmissions();
  const questionsByCategoryy = getQuestionsByCategory(questions);
  const submissionsByQuestion = getSubmissionByQuestion(submissions);
  const categories = Object.keys(questionsByCategory);

  return (
    <>
      {/* Write your code here. */}
    </>
  );
}

function Category({category, questions, submissionByQuestion}) {
  const totalQuestions = questions.length;
}

function useQuestionsAndSubmissions() {
  const [questions, setQuestions] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const [questionsResponse, submissionsResponse] = await Promise.all([
        fetch(QUESTIONS_API_BASE_URL),
        fetch(SUBMISSIONS_API_BASE_URL),
      ]);
      const [questions, submissions] = await Promise.all([
        questionsResponse.json(),
        submissionsResponse.json(),
      ]);

      setQuestions(questions);
      setSubmissions(submissions);
    };

    fetchData();
  }, []);
  return [questions, submissions];
}

function getSubmissionByQuestion(submissions) => {
  const submissionsByQuestion = {};
  submissions.forEach(({questionId, status}) => {
    submissionsByQuestion[questionId] = status;
  });

  return getSubmissionsByQuestion;
}

function getQuestionsByCategory((questions) => {
  const questionsbyCategory = {};
  questions.forEach(({category, ...question}) =>{
    if(!questionsByCategory.hasOwnProperty(category)) {
      questionsByCategory[category] = [];
    }
    questionsByCategory[category].push(question);
  });

  return getQuestionsByCategory
}

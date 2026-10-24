import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const maxQuizLength = location.state.maxQuizLength
  const correctNumberLength = location.state.correctNumberLength
  return (
    <>
      <h1>Quiz Results</h1>
      <p>あなたの正解数は...</p>
      <p>{`全${maxQuizLength}問中、${correctNumberLength}問正解でした！ `}</p>
    </>
  )
}

import Display from '../components/Display/Display'
import quizData from '../data/quiz'

export default function QuizPage() {
  return (
    <>
      <Display>
        {`Q1. ${quizData[0].question}`}
      </Display>
    </>
  )
}

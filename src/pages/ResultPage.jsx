import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../const";
import Result from "../Result/Result";
import Loading from "../components/Display/Loading/Loading";

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();

  const maxQuizLength = location.state?.maxQuizLength ?? 0;
  const correctNumberLength = location.state?.correctNumberLength ?? 0;

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 3000);
  }, []);
  return (
    <>
      <Loading active={active} />
      <h1>Quiz Results</h1>
      <Result
        maxQuizLength={maxQuizLength}
        correctNumberLength={correctNumberLength}
      />
      <br />
      <Link to={ROUTES.QUIZ}>もう一度挑戦する！</Link>
    </>
  );
}

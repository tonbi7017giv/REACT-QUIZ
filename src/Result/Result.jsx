import styles from "./Result.module.css";
import Confetti from "react-confetti";

export default function Result({ maxQuizLength, correctNumberLength }) {
  return (
    <>
      <div className={styles.result}>
        あなたの正解数は...
        <span className={styles.resultHighlight}>
          {`全${maxQuizLength}問中、${correctNumberLength}問 `}
        </span>
        でした！
      </div>
      <Confetti />
    </>
  );
}

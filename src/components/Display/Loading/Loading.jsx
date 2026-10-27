import styles from "./Loading.module.css";

export default function Loading({ active }) {
  return (
    <div className={`${styles.Loading} ${active ? styles.isActive : ""}`}>
      <span>〜結果発表〜</span>
    </div>
  );
}

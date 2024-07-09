import css from "./Feedback.module.css";

export default function Feedback({
  total,
  positiveFeedback,
  listOfValues: { good, neutral, bad },
}) {
  return (
    <ul className={css.feedback_list}>
      <li className={css.feedback_list_item}>
        <span>Good: {good}</span>
      </li>
      <li className={css.feedback_list_item}>
        <span>Neutral: {neutral}</span>
      </li>
      <li className={css.feedback_list_item}>
        <span>Bad: {bad}</span>
      </li>
      <li className={css.feedback_list_item}>
        <span>Total: {total}</span>
      </li>
      <li className={css.feedback_list_item}>
        <span>Positive: {positiveFeedback}%</span>
      </li>
    </ul>
  );
}

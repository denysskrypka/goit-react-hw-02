import css from "./Options.module.css";

export default function Options({ total, onGiveFeedback, onResetTotal }) {
  return (
    <ul className={css.options_list}>
      <li className={css.options_list_item}>
        <button
          className={css.options_list_button}
          onClick={() => onGiveFeedback("good")}
        >
          Good
        </button>
      </li>
      <li className={css.options_list_item}>
        <button
          className={css.options_list_button}
          onClick={() => onGiveFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li className={css.options_list_item}>
        <button
          className={css.options_list_button}
          onClick={() => onGiveFeedback("bad")}
        >
          Bad
        </button>
      </li>
      {total > 0 && (
        <li className={css.options_list_item}>
          <button className={css.options_list_button} onClick={onResetTotal}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}

import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification.jsx";

import css from "./App.module.css";

import { useEffect, useState } from "react";

const getValues = () => {
  const savedValues = localStorage.getItem("feedbacks");
  return savedValues !== null
    ? JSON.parse(savedValues)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [values, setValues] = useState(getValues);
  const onUpdateFeedbacks = (feedbackType) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(values));
  }, [values]);

  const totalFeedbacks = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedbacks) * 100);
  const checkPositiveFeedbacks = !isNaN(positiveFeedback)
    ? positiveFeedback
    : 0;

  const onResetTotal = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.app_container}>
      <Description />
      <Options
        total={totalFeedbacks}
        onGiveFeedback={onUpdateFeedbacks}
        onResetTotal={onResetTotal}
      />
      {totalFeedbacks > 0 ? (
        <Feedback
          total={totalFeedbacks}
          positiveFeedback={checkPositiveFeedbacks}
          listOfValues={values}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

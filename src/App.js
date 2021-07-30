import React, { useState } from "react";
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Notification from "components/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const handleFeedback = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good":
        setGood((options) => options + 1);
        break;
      case "neutral":
        setNeutral((options) => options + 1);
        break;
      case "bad":
        setBad((options) => options + 1);
        break;
      default:
        return;
    }
  };

  // first variant
  // const onLeaveFeedbackGoodBtn = () => {
  //   setGood(prevGood => prevGood + 1);
  // };
  // const onLeaveFeedbackNeutralBtn = () => {
  // 	setNeutral((prevNeutral) => prevNeutral + 1);
  // };
  // const onLeaveFeedbackBadBtn = () => {
  // 	setBad((prevBad) => prevBad + 1);
  // };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  return (
    <>
      <Section title="Your feedback is very important for us!">
        <FeedbackOptions options={options} handleFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {good + neutral + bad !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback exists ^_^" />
        )}
      </Section>
    </>
  );
}

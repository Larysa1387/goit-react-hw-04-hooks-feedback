import React, { Component } from "react";
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Notification from "components/Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1 };
    });
  };
  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Your feedback is very important for us!">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good + neutral + bad !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given ^_^" />
          )}
        </Section>
      </>
    );
  }
}

export default App;

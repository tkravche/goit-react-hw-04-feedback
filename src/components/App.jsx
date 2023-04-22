import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const mapState = {
    good: setGood,
    bad: setBad,
    neutral: setNeutral,
  };

  const onLeaveFeedback = e => {
    const { name } = e.target;
    mapState[name](prevState => prevState + 1);
    // switch (name) {
    //   case 'good':
    //     setGood(prevState => prevState + 1);
    //     break;
    //   case 'bad':
    //     setBad(prevState => prevState + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(prevState => prevState + 1);
    //     break;
    //   default:
    //     break;
    //}
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback()) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
    return 0;
  };

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={Object.keys(mapState)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalFeedback = total(good, neutral, bad);
  const positiveFeedback = positivePercentage(good, neutral, bad);
  return (
    <ul className={styles.statList}>
      <li className={styles.statItem}>Good: {good}</li>
      <li className={styles.statItem}>Neutral: {neutral}</li>
      <li className={styles.statItem}>Bad: {bad}</li>
      <li className={styles.statItem}>Total: {totalFeedback}</li>
      <li className={styles.statItem}>
        Positive feedback: {positiveFeedback}%
      </li>
    </ul>
  );
};

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistics;

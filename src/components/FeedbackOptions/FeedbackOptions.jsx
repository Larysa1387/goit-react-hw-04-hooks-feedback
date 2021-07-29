import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.optionsList}>
      {options.map((option) => {
        return (
          <li key={option} className={styles.optionItem}>
            <button
              type="button"
              className={styles.optionButton}
              onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

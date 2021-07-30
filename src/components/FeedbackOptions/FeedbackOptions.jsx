import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = (
  { options, handleFeedback }) => {
  const optionsArr = Object.keys(options);
  return (
    <ul className={styles.optionsList}>
      {optionsArr.map((option,idx) => {
        return (
          <li key={idx} className={styles.optionItem}>
            <button
              type="button"
              name={option}
              className={styles.optionButton}
              onClick={handleFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
	options: PropTypes.objectOf(PropTypes.number).isRequired,
	handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

import React from 'react';
import propTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            className={s.button}
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;

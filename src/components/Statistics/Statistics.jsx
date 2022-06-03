import propTypes from 'prop-types';

const Statisctic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: Bad {bad}</li>
      <li>Total: {total}</li>
      <li>
        Positive: {Number.isNaN(positivePercentage) ? 0 : positivePercentage}%
      </li>
    </ul>
  );
};

Statisctic.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statisctic;

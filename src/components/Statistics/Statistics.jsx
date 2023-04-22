import { FaRegThumbsUp, FaRegThumbsDown, FaRegMeh } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>
        <FaRegThumbsUp /> Good: {good}
      </p>
      <p>
        {' '}
        <FaRegMeh /> Neutral: {neutral}
      </p>
      <p>
        {' '}
        <FaRegThumbsDown /> Bad: {bad}
      </p>
      <p> Total: {total()}</p>
      <p> Positive feedback: {positivePercentage()}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

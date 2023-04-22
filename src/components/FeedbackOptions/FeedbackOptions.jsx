import PropTypes from 'prop-types';

import {
  FeedbackOptionsList,
  FeedbackOptionsButton,
} from './FeedbackOptions,styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <FeedbackOptionsList>
      {options.map(option => (
        <li key={option}>
          <FeedbackOptionsButton
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option[0].toUpperCase() + option.substring(1)}
          </FeedbackOptionsButton>
        </li>
      ))}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

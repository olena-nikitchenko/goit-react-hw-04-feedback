import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.Resultat__box}>
    <ul className={css.ResultatList}>
      <li className={css.ResultaItem}>Good: {good}</li>
      <li className={css.ResultaItem}>Neutral: {neutral}</li>
      <li className={css.ResultaItem}>Bad: {bad}</li>
      <li className={css.ResultaItem}>Total: {total}</li>
      <li className={css.ResultaItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

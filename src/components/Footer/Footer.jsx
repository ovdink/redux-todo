import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

const FILTER_BTN = [
  {
    text: 'Все',
    id: 'all'
  },
  {
    text: 'Активные',
    id: 'active'
  },
  {
    text: 'Завершенные',
    id: 'completed'
  }
];

const Footer = ({ amount, activeFilter }) => {
  return (
    <div className="footer">
      <span className="footer__amount">{`${amount} задач осталось`}</span>
      <div className="footer__btn-group">
        {FILTER_BTN.map(({ text, id }) => {
          return (
            <button key={id} className="btn-active">
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

Footer.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string
};

Footer.defaultProps = {
  amount: 0,
  activeFilter: 'all'
};

export default Footer;

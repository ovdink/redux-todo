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

const Footer = ({ amount, activeFilter, changeFilter }) => {
  return (
    <div className="footer mt-3">
      <span className="footer__amount">{`${amount} задач осталось`}</span>
      <div className="footer__btn-group mt-1">
        {FILTER_BTN.map(({ text, id }) => {
          return (
            <button
              key={id}
              className={
                id === activeFilter ? 'btn btn-dark mr-2' : 'btn btn-info mr-2'
              }
              onClick={() => {
                changeFilter(id);
              }}
            >
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
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func
};

Footer.defaultProps = {
  amount: 0,
  activeFilter: 'all',
  changeFilter: () => {}
};

export default Footer;

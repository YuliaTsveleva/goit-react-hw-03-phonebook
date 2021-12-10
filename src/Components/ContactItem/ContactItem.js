import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ id, name, number, onClick }) {
  return (
    <li key={id} className={s.Item}>
      <div className={s.Wrapper}>
        <p className={s.Name}>{name}:</p>
        <p className={s.Number}>{number}</p>
      </div>
      <button type="button" onClick={() => onClick()} className={s.Button}>
        Delete
      </button>
    </li>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

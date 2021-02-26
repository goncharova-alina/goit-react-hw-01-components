import React from 'react';
import PropTypes from 'prop-types';
import styles from '../TransactionHistory/TransactionHistory.module.css';

const Transactions = ({ items }) => (
  <>
    {items.map(item => (
      <tr className={styles.tr} key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    ))}
  </>
);

export default Transactions;

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

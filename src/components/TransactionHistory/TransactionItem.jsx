import React from 'react';
import styles from './TransactionItem.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={styles.transactionItem}>
      <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
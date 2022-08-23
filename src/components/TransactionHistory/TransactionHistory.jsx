import PropTypes from 'prop-types';

import style from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={style.type}>{type}</td>
              <td className={style.type}>{amount}</td>
              <td className={style.type}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;

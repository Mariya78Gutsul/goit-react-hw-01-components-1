import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = props => {
  const itemsMarkup = props.items.map(item => (
    <tr className={s.row} key={item.id}>
      <td className={s.cell}>{item.type}</td>
      <td className={s.cell}>{item.amount}</td>
      <td className={s.cell}>{item.currency}</td>
    </tr>
  ));

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.headCell}>Type</th>
          <th className={s.headCell}>Amount</th>
          <th className={s.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>{itemsMarkup}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ).isRequired,
};

export default TransactionHistory;

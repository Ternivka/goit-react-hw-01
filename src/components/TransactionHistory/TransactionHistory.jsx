import TransactionTR from "./TransactionTR";
import styles from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TransactionTR type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

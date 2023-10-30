function TransactionList({ title, transactions }) {
  return (
    <div className={title.toLowerCase()}>
      <h2>{title}</h2>
      <div>
        {transactions.map((transaction) => (
          <div key={transaction?.id}>
            <strong>{transaction?.title}</strong>
            <div>
              <span>{transaction?.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;

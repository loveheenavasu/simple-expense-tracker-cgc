function TransactionForm({ addTransaction }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const finalTransaction = {};
    for (let [key, value] of formData) {
      finalTransaction[key] = value;
    }

    addTransaction(finalTransaction);

    form.reset();
  };

  return (
    <div className="transaction-form-wrapper">
      <form onSubmit={handleSubmit}>
        <select name="type">
          <option value="income" label="Income" />
          <option value="expense" label="Expense" />
        </select>
        <input type="text" name="title" placeholder="Title" />
        <input type="number" name="amount" placeholder="Amount" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;

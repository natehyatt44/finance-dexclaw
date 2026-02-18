import './DataTable.css'

interface Transaction {
  id: string
  date: string
  amount: number
  category: string
  description: string
}

interface DataTableProps {
  transactions: Transaction[]
}

export default function DataTable({ transactions }: DataTableProps) {
  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0)
  const avgAmount = transactions.length > 0 ? totalAmount / transactions.length : 0
  
  // Group by category
  const byCategory = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount
    return acc
  }, {} as Record<string, number>)

  const sortedByAmount = [...transactions].sort((a, b) => b.amount - a.amount)
  const topExpense = sortedByAmount[0]

  return (
    <div className="datatable-container">
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-label">Total Spending</div>
          <div className="summary-value">${totalAmount.toFixed(2)}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Transactions</div>
          <div className="summary-value">{transactions.length}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Average per Transaction</div>
          <div className="summary-value">${avgAmount.toFixed(2)}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Largest Expense</div>
          <div className="summary-value">${topExpense?.amount.toFixed(2)}</div>
        </div>
      </div>

      <div className="category-breakdown">
        <h3>Spending by Category</h3>
        <div className="category-list">
          {Object.entries(byCategory)
            .sort(([, a], [, b]) => b - a)
            .map(([category, amount]) => (
              <div key={category} className="category-item">
                <span className="category-name">{category}</span>
                <span className="category-amount">${amount.toFixed(2)}</span>
                <div className="category-bar">
                  <div 
                    className="category-fill"
                    style={{ width: `${(amount / totalAmount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="transactions-list">
        <h3>Transaction Details</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.description || '—'}</td>
                  <td>{t.category}</td>
                  <td className="amount">${t.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

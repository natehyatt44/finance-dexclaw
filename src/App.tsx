import { useState } from 'react'
import CSVUploader from './components/CSVUploader'
import DataTable from './components/DataTable'
import './App.css'

interface Transaction {
  id: string
  date: string
  amount: number
  category: string
  description: string
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleCSVUpload = (data: Transaction[]) => {
    setTransactions(data)
  }

  const handleAnalyze = async () => {
    setIsLoading(true)
    // TODO: Call agent API to analyze transactions
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>💰 finance-dexclaw</h1>
          <p>AI-powered spending analyzer</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {transactions.length === 0 ? (
            <CSVUploader onUpload={handleCSVUpload} />
          ) : (
            <div className="analysis-view">
              <div className="analysis-header">
                <h2>Spending Analysis</h2>
                <button 
                  className="btn-primary"
                  onClick={handleAnalyze}
                  disabled={isLoading}
                >
                  {isLoading ? 'Analyzing...' : 'Analyze with AI'}
                </button>
              </div>
              <DataTable transactions={transactions} />
              <button 
                className="btn-secondary"
                onClick={() => setTransactions([])}
              >
                Upload New CSV
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App

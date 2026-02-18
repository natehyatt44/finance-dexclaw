import { useRef, useState } from 'react'
import Papa from 'papaparse'
import './CSVUploader.css'

interface Transaction {
  id: string
  date: string
  amount: number
  category: string
  description: string
}

interface CSVUploaderProps {
  onUpload: (data: Transaction[]) => void
}

export default function CSVUploader({ onUpload }: CSVUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setError('')
    setIsLoading(true)

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const data = results.data as Record<string, any>[]
          
          // Validate and transform data
          const transactions: Transaction[] = data
            .filter(row => row.date && (row.amount || row.Amount))
            .map((row, index) => ({
              id: `txn-${index}`,
              date: row.date || row.Date || '',
              amount: parseFloat(row.amount || row.Amount || '0'),
              category: row.category || row.Category || 'Uncategorized',
              description: row.description || row.Description || '',
            }))

          if (transactions.length === 0) {
            setError('No valid transactions found in CSV')
            setIsLoading(false)
            return
          }

          onUpload(transactions)
          setIsLoading(false)
        } catch (err) {
          setError('Error parsing CSV: ' + (err instanceof Error ? err.message : 'Unknown error'))
          setIsLoading(false)
        }
      },
      error: (error) => {
        setError('Error reading file: ' + error.message)
        setIsLoading(false)
      },
    })
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.currentTarget.classList.add('drag-over')
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('drag-over')
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.currentTarget.classList.remove('drag-over')
    
    const file = e.dataTransfer.files?.[0]
    if (file && file.name.endsWith('.csv')) {
      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(file)
        fileInputRef.current.files = dataTransfer.files
        handleFileChange({ target: fileInputRef.current } as any)
      }
    } else {
      setError('Please upload a CSV file')
    }
  }

  return (
    <div className="uploader-container">
      <div 
        className="upload-zone"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="upload-icon">📊</div>
        <h2>Upload Your Spending CSV</h2>
        <p>Drag and drop your CSV file here, or click to select</p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          disabled={isLoading}
          hidden
        />
        <button 
          className="upload-btn"
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Select CSV File'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          ❌ {error}
        </div>
      )}

      <div className="csv-format">
        <h3>Expected CSV Format</h3>
        <p>Your CSV should have columns like:</p>
        <code>date,amount,category,description</code>
        <p className="example">Example: <code>2026-02-18,45.99,Food,Dinner at Restaurant</code></p>
      </div>
    </div>
  )
}

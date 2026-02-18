# finance-dexclaw

CSV spending analyzer with AI agent for outlier detection. 💰

## Features
✅ CSV upload (drag & drop)  
✅ Transaction data visualization  
✅ Spending summary & breakdown  
✅ AI outlier detection (coming soon)  
✅ Dark theme UI  
✅ Mobile responsive  

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` → drag & drop a CSV file to get started.

---

## UI Layout

### 1️⃣ Upload Screen

```
┌─────────────────────────────────────────┐
│   💰 finance-dexclaw                    │
│   AI-powered spending analyzer          │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  📊                                     │
│  Upload Your Spending CSV               │
│  Drag and drop your CSV file here       │
│                                         │
│  [  Select CSV File  ]                  │
│                                         │
│  ✓ Expected Format:                     │
│    date,amount,category,description    │
│    Example: 2026-02-18,45.99,Food,...  │
└─────────────────────────────────────────┘
```

### 2️⃣ Analysis Screen (After Upload)

```
┌──────────────────────────────────────────┐
│   Spending Analysis     [Analyze with AI] │
└──────────────────────────────────────────┘

Summary Cards (4-column grid on desktop, 2x2 on mobile):
┌──────────┬──────────┬──────────┬──────────┐
│ Total    │ Count    │ Average  │ Largest  │
│ Spending │ Txns     │ per Txn  │ Expense  │
│ $1234.56 │ 24       │ $51.44   │ $156.32  │
└──────────┴──────────┴──────────┴──────────┘

Category Breakdown (visual breakdown of spending):
┌────────────┬──────────┬──────────────────┐
│ Food       │ $456.78  │ ████████░░░░░░░░ │
│ Transport  │ $234.56  │ █████░░░░░░░░░░░ │
│ Shopping   │ $345.22  │ ███████░░░░░░░░░ │
│ Other      │ $198.00  │ ████░░░░░░░░░░░░ │
└────────────┴──────────┴──────────────────┘

Transaction Table (sortable, scrollable):
┌──────────┬─────────────────┬──────────┬────────┐
│ Date     │ Description     │ Category │ Amount │
├──────────┼─────────────────┼──────────┼────────┤
│ 2026-02-18│ Coffee          │ Food     │ $5.99  │
│ 2026-02-18│ Gas Station     │ Transport│ $45.00 │
│ 2026-02-18│ Lunch           │ Food     │ $12.50 │
│ 2026-02-17│ Movie Tickets   │ Ent.     │ $28.00 │
└──────────┴─────────────────┴──────────┴────────┘

[Upload New CSV]
```

---

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build**: Vite 5 (lightning fast)
- **CSV Parser**: PapaParse (handles edge cases)
- **Styling**: CSS3 with CSS variables + dark theme
- **API**: OpenClaw agent integration (next sprint)

## CSV Format

Your CSV should have these columns (names are flexible):

```
date,amount,category,description
2026-02-18,45.99,Food,Dinner at Restaurant
2026-02-17,125.00,Transport,Uber home
2026-02-16,32.50,Shopping,Coffee maker
2026-02-16,5.99,Food,Morning coffee
```

Flexible column names: The parser auto-detects `Date`/`date`, `Amount`/`amount`, etc.

---

## File Structure

```
src/
├── main.tsx           # Entry point
├── App.tsx            # Main app component
├── App.css            # App styles
├── index.css          # Global styles
└── components/
    ├── CSVUploader.tsx   # Upload component
    ├── CSVUploader.css   # Upload styles
    ├── DataTable.tsx     # Results component
    └── DataTable.css     # Results styles
```

---

## Next Steps 🚀

- [ ] **Agent Integration**: Hook up OpenClaw for AI-powered analysis
- [ ] **Outlier Detection**: Statistical + behavioral anomaly detection
- [ ] **Charts**: Plotly/Recharts for visual insights
- [ ] **Export**: PDF/CSV export of analysis
- [ ] **Mobile UI**: Optimize touch interactions

---

## Development

Watch files auto-reload:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

---

*Built with dexclaw* 👊  
Real-time commits to GitHub
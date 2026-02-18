# UI Screenshots & Mockups

## Color Scheme
- **Primary**: Dark blue (`#0f172a`)
- **Secondary**: Slate (`#1e293b`)
- **Accent**: Blue (`#3b82f6`)
- **Text**: Light (`#e2e8f0`)
- **Success**: Green (`#10b981`)
- **Danger**: Red (`#ef4444`)

---

## 1. Header

Clean, minimal header with gradient background.

```
╔════════════════════════════════════╗
║ 💰 finance-dexclaw                 ║
║ AI-powered spending analyzer       ║
║                                    ║
║ Background: Blue gradient          ║
║ Padding: 40px                      ║
╚════════════════════════════════════╝
```

---

## 2. CSV Upload Component

Large drag-and-drop zone with visual feedback.

**Normal State:**
```
╔════════════════════════════════════╗
║                                    ║
║           📊                       ║
║                                    ║
║   Upload Your Spending CSV         ║
║   Drag and drop your CSV file      ║
║   here, or click to select         ║
║                                    ║
║   [ Select CSV File ]  (blue btn)  ║
║                                    ║
║   ─────────────────────────────    ║
║   Expected CSV Format:             ║
║                                    ║
║   date,amount,category,desc        ║
║                                    ║
║   Example: 2026-02-18,45.99,...    ║
║                                    ║
╚════════════════════════════════════╝
```

**Drag-Over State:**
```
Border becomes blue with animated glow
Background becomes semi-transparent blue
Scale increases slightly (1.02x)
```

**Interaction:**
- Click button → file picker opens
- Drag .csv file → uploads automatically
- Invalid file → error message appears
- File loading → button shows "Processing..."

---

## 3. Data Summary Cards

4 cards in a responsive grid (4 cols on desktop, 2x2 on tablet, stacked on mobile).

```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ Total       │ Txns        │ Average     │ Largest     │
│ Spending    │ Count       │ per Txn     │ Expense     │
│             │             │             │             │
│ $2,456.78   │ 47          │ $52.27      │ $245.99     │
│             │             │             │             │
│ (blue text) │ (blue text) │ (blue text) │ (blue text) │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**Card Styling:**
- Background: Dark slate
- Border: 1px subtle gray
- Hover: Border turns blue, soft blue glow
- Transition: 0.2s smooth

---

## 4. Category Breakdown

Visual spending breakdown by category with progress bars.

```
┌──────────────────────────────────────┐
│ Spending by Category                 │
├──────────────────────────────────────┤
│                                      │
│ Food                    $678.90      │
│ ████████░░░░░░░░░░░░░░░░░  27.6%   │
│                                      │
│ Transport              $456.32       │
│ █████░░░░░░░░░░░░░░░░░░░  18.6%   │
│                                      │
│ Shopping               $892.45       │
│ ███████████░░░░░░░░░░░░░░  36.3%   │
│                                      │
│ Entertainment          $429.11       │
│ █████░░░░░░░░░░░░░░░░░░░░  17.5%   │
│                                      │
└──────────────────────────────────────┘
```

**Features:**
- Progress bars with gradient (blue to purple)
- Categories sorted by amount (largest first)
- Hover highlights category row
- Responsive: stacks on mobile

---

## 5. Transaction Table

Scrollable table with hover effects.

```
┌────────────┬──────────────────┬────────────┬──────────┐
│ Date       │ Description      │ Category   │ Amount   │
├────────────┼──────────────────┼────────────┼──────────┤
│ 2026-02-18 │ Coffee           │ Food       │ $5.99    │  ← hover: darker bg
│ 2026-02-18 │ Gas Station      │ Transport  │ $45.00   │
│ 2026-02-18 │ Lunch            │ Food       │ $12.50   │
│ 2026-02-17 │ Movie Tickets    │ Ent.       │ $28.00   │
│ 2026-02-17 │ Uber Home        │ Transport  │ $32.15   │
│ 2026-02-16 │ Grocery Store    │ Food       │ $89.32   │
│ 2026-02-16 │ Gas Station      │ Transport  │ $55.00   │
│ 2026-02-16 │ Coffee Maker     │ Shopping   │ $245.99  │  ← large amount
│ 2026-02-15 │ Restaurant       │ Food       │ $67.82   │
└────────────┴──────────────────┴────────────┴──────────┘
```

**Features:**
- Sticky header with separator
- Hover: row background darkens
- Amounts: blue and right-aligned
- Horizontal scroll on mobile
- Sorted by date (newest first)

---

## 6. Action Buttons

Two button states visible after CSV upload.

```
┌─────────────────────────────────────┐
│ Spending Analysis  [Analyze with AI] │ ← Primary button
│                                     │    Blue background
│                                     │    White text
│                                     │    Hover: darker blue
│                                     │    Click: slight lift effect
│
│
│ All the data above...
│
│
│ [   Upload New CSV   ] ← Secondary button
│    Gray background
│    Border style
│    Hover: lighter gray
└─────────────────────────────────────┘
```

---

## Mobile Responsiveness

### Tablet (768px breakpoint)
- Summary cards: 2x2 grid
- Upload zone: 80% width
- Fonts: slightly smaller
- Touch targets: 44px minimum

### Mobile (<768px)
- Summary cards: full width stacked
- Category names: smaller text
- Table: horizontal scroll
- Buttons: full width
- Padding: reduced margins

---

## Dark Theme Features

All UI respects CSS variables:
```css
--bg-primary: #0f172a;      /* Deep blue */
--bg-secondary: #1e293b;    /* Slate */
--bg-tertiary: #334155;     /* Medium slate */
--text-primary: #e2e8f0;    /* Off-white */
--text-secondary: #cbd5e1;  /* Light gray */
--accent: #3b82f6;          /* Blue */
--accent-dark: #1e40af;     /* Dark blue */
--success: #10b981;         /* Green */
--warning: #f59e0b;         /* Amber */
--danger: #ef4444;          /* Red */
```

---

## Animations

**All transitions**: 200ms ease

- **Hover state**: `transform: translateY(-2px)` (lift effect)
- **Focus state**: Blue outline + soft shadow
- **Drag-over**: Scale 1.02 + background glow
- **Loading**: Button text changes with spinner effect

---

## Next: Visual Updates

Coming soon (Stage 3):
- [ ] Chart library integration (Recharts)
- [ ] Outlier highlights (red borders on extreme amounts)
- [ ] Trend indicators (up/down arrows)
- [ ] Animated counter when loading
- [ ] Toast notifications for errors

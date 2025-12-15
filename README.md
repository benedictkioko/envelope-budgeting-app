# Envelope Budgeting App (In-Memory)

A simple envelope budgeting application that helps you manage your income by allocating it into different spending categories (envelopes) and tracking your spending.

## Features

- **Add Income**: Add money to your available income pool
- **View Envelopes**: See all your budget envelopes and their balances
- **Allocate Funds**: Move money from your available income into specific envelopes
- **Track Spending**: Spend money from envelopes and see your remaining balances
- **Real-time Updates**: All changes are reflected immediately in the UI

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

### Adding Income
1. Enter an amount in the "Enter Income" field
2. Click "Add Income"
3. Your available income will be updated

### Allocating to Envelopes
1. Find the envelope you want to allocate to
2. Enter the amount to allocate
3. Click "Allocate"
4. The money will be moved from your available income to the envelope

### Spending from Envelopes
1. Find the envelope you want to spend from
2. Enter the amount to spend
3. Click "Spend"
4. The envelope balance will be reduced

## API Endpoints

### GET /state
Returns the current state of income and envelopes.

**Response:**
```json
{
  "income": 1000,
  "envelopes": [
    {"id": 1, "name": "Groceries", "balance": 200, "spent": 0},
    {"id": 2, "name": "Rent", "balance": 800, "spent": 0},
    {"id": 3, "name": "Entertainment", "balance": 100, "spent": 0}
  ]
}
```

### POST /income
Add income to your available balance.

**Request Body:**
```json
{
  "amount": 1000
}
```

### POST /allocate
Move income into an envelope.

**Request Body:**
```json
{
  "envelopeId": 1,
  "amount": 200
}
```

### POST /spend
Spend money from an envelope.

**Request Body:**
```json
{
  "envelopeId": 1,
  "amount": 50
}
```

## Business Rules

- Total available income cannot go below zero
- Envelope balances cannot go below zero
- All amounts must be positive numbers

## Technical Details

- **Backend**: Express.js
- **Frontend**: Vanilla JavaScript
- **Storage**: In-memory (data is lost on server restart)
- **Port**: 3000

## Default Envelopes

The app comes with three pre-configured envelopes:
- Groceries
- Rent
- Entertainment

## Notes

This is a simple implementation without:
- Authentication
- Data persistence
- Advanced styling
- Unit tests
- Error handling UI

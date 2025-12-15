const express =require('express');

const app = express();

// init
const PORT = 3000;
app.use(express.json()); //to accept json data
app.use(express.static('public')); //to serve static files

let income = 0;

let envelopes = [
    {id: 1, name: 'Groceries', balance: 0, spent: 0},
    {id: 2, name: 'Rent', balance: 0, spent: 0},
    {id: 3, name: 'Entertainment', balance: 0, spent: 0}
];

// routes

app.get('/state', (req, res) => {
    res.json({income, envelopes});
});

app.post('/income', (req, res) => {
    const { amount } = req.body;
    income += amount;
    res.json({income, envelopes});
});

app.post('/allocate', (req, res) => {
    const {envelopeId, amount} = req.body;
    const envelope = envelopes.find(env => env.id === envelopeId);

    if(!envelope || amount < 0){
        return res.status(400).json({error: 'Invalid envelope or amount'});
    }

    if(amount > income){
        return res.status(400).json({error: 'Insufficient income'});
    }

    envelope.balance += amount;
    income -= amount;

    res.json({income, envelopes});
});

app.post('/spend', (req, res) => {
    const {envelopeId, amount} = req.body;
    const envelope = envelopes.find(env => env.id === envelopeId);

    if(!envelope || amount <= 0){
        return res.status(400).json({error: 'Invalid envelope or amount'});
    }

    if(amount > envelope.balance){
        return res.status(400).json({error: 'Insufficient envelope balance'});
    }

    envelope.balance -= amount;
    envelope.spent += amount;

    res.json({income, envelopes});
});


    // start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Sample data
const statsData = {
    users: 1234,
    revenue: 45678,
    orders: 5678,
    growth: 12.5
};

const transactions = [
    {
        id: '#001',
        user: 'John Doe',
        amount: 1234,
        status: 'Completed',
        date: '2024-01-15'
    },
    {
        id: '#002',
        user: 'Jane Smith',
        amount: 567,
        status: 'Pending',
        date: '2024-01-14'
    },
    {
        id: '#003',
        user: 'Bob Johnson',
        amount: 890,
        status: 'Completed',
        date: '2024-01-13'
    },
    {
        id: '#004',
        user: 'Alice Brown',
        amount: 1100,
        status: 'Failed',
        date: '2024-01-12'
    },
    {
        id: '#005',
        user: 'Charlie Wilson',
        amount: 2345,
        status: 'Completed',
        date: '2024-01-11'
    }
];

// API Routes
app.get('/api/stats', (req, res) => {
    res.json(statsData);
});

app.get('/api/transactions', (req, res) => {
    res.json(transactions);
});

app.get('/api/transactions/:id', (req, res) => {
    const transaction = transactions.find(t => t.id === req.params.id);
    if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(transaction);
});

app.post('/api/transactions', (req, res) => {
    const { user, amount, status, date } = req.body;
    const newTransaction = {
        id: `#${String(transactions.length + 1).padStart(3, '0')}`,
        user,
        amount,
        status,
        date: date || new Date().toISOString().split('T')[0]
    };
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
});

app.put('/api/stats', (req, res) => {
    const { users, revenue, orders, growth } = req.body;
    if (users !== undefined) statsData.users = users;
    if (revenue !== undefined) statsData.revenue = revenue;
    if (orders !== undefined) statsData.orders = orders;
    if (growth !== undefined) statsData.growth = growth;
    res.json(statsData);
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Admin Dashboard API available at http://localhost:${PORT}/api`);
});

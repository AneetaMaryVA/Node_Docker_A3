const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api1', (req, res) => {
    res.json({ message: 'API 1 response' });
});

app.get('/api2', (req, res) => {
    res.json({ message: 'API 2 response' });
});

app.get('/api3', (req, res) => {
    res.json({ message: 'API 3 response' });
});

app.get('/api4', (req, res) => {
    res.json({ message: 'API 4 response' });
});

app.get('/api5', (req, res) => {
    res.json({ message: 'API 5 response' });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/app/api/test', (req, res) => {
    res.send("test ok");
});

app.post('/api/transaction', (req, res) => {
    res.json(req.body);
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

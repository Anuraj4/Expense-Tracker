const express = require('express');
const app = express();

app.get('/app/api', (req, res) => {
    res.json({ body: 'test ok' });
});

app.listen(4000);

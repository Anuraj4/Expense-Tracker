const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Importing dotenv for environment variables

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

// Routes
app.get('/app/api/test', (req, res) => {
    res.send("test ok");
});

app.post('/api/transaction', async (req, res) => {
    const { name, description, datetime, price } = req.body;

    try {
        // Logic to save transaction to the database
        // Example:
        // const newTransaction = new Transaction({ name, description, datetime, price });
        // await newTransaction.save();

        console.log("Transaction saved successfully:", { name, description, datetime, price });

        res.status(200).json({ message: 'Transaction saved successfully' });
    } catch (error) {
        console.error("Error saving transaction:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//bZKrOlafwEUYtFGX
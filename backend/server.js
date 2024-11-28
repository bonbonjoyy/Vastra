const express = require('express');
const cors = require('cors');
const router = require('./routes/index.js'); // Mengimpor router dari folder routes
const authMiddleware = require('./middlewares/authMiddleware.js');

require('dotenv').config(); // Untuk mengimpor variabel lingkungan dari .env


const app = express();
const port = 3333;

app.use(cors()); // Menambahkan middleware CORS
app.use(express.json()); // Untuk parsing JSON
app.use(router); // Menggunakan router

app.use('/users', authMiddleware, router);

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

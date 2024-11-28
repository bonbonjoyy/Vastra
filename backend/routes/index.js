const express = require('express');
const authRoutes = require('./auth');  // Mengimpor routes untuk login (auth)
const userRoutes = require('./user');  // Mengimpor routes untuk CRUD user

const router = express.Router();

// Menambahkan route untuk login (auth) dengan prefix '/auth'
router.use('/auth', authRoutes);  // Prefix '/auth' untuk login

// Menambahkan route untuk user dengan prefix '/users'
router.use('/api/users', userRoutes); // Prefix '/users' untuk CRUD user

module.exports = router;

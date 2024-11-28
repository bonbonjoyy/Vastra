const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controller/userController.js');
const authMiddleware = require('../middlewares/authMiddleware');  // Import authMiddleware

const router = express.Router();

// Route untuk mendapatkan semua user (tidak perlu otentikasi, jika dibutuhkan)
router.get('/', getUsers);

// Route untuk mendapatkan user berdasarkan ID (memerlukan otentikasi)
router.get('/:id', authMiddleware, getUserById);  // Menggunakan authMiddleware

// Route untuk membuat user baru (tidak perlu otentikasi)
router.post('/', createUser);

// Route untuk memperbarui user berdasarkan ID (memerlukan otentikasi)
router.patch('/:id', authMiddleware, updateUser);  // Menggunakan authMiddleware

// Route untuk menghapus user berdasarkan ID (memerlukan otentikasi)
router.delete('/:id', authMiddleware, deleteUser);  // Menggunakan authMiddleware

module.exports = router;

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Route untuk login dan mendapatkan token
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validasi kredensial (misalnya dari database)
  const user = { id: 1, username: 'example' };  // Gantilah dengan validasi user yang sesungguhnya dari database

  // Jika validasi berhasil, buat JWT
  const token = jwt.sign(
    { user: { id: user.id, username: user.username } }, // Data yang disimpan di dalam token
    process.env.JWT_SECRET, // Secret key dari .env
    { expiresIn: '12h' } // Token expired dalam 1 jam
  );

  res.json({ token }); // Mengirimkan token sebagai response
});

module.exports = router;

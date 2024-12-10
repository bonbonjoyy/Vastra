// backend/routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const { User, Sequelize } = require("../models");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const googleClient = require("../config/googleAuth");

router.post("/login", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.findOne({
      where: {
        username: username,
        kata_sandi: password,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Username atau Password salah",
      });
    }

    // Update last_login
    await User.update({ last_login: new Date() }, { where: { id: user.id } });

    const isFirstLogin = !user.last_login;

    const token = jwt.sign(
      {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    res.json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        isFirstLogin,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Terjadi kesalahan saat login",
    });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{ email: email }, { username: username }],
      },
    });

    if (userExists) {
      return res.status(400).json({
        message: "Email atau username sudah terdaftar",
      });
    }

    const user = await User.create({
      username,
      email,
      kata_sandi: password,
      role: "user",
      last_login: null,
    });

    const token = jwt.sign(
      {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    res.status(201).json({
      message: "Registrasi berhasil",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      message: "Terjadi kesalahan saat registrasi",
    });
  }
});

// Simplified reset password without email
router.post("/reset-password-direct", async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Email tidak ditemukan" });
    }

    await User.update({ kata_sandi: newPassword }, { where: { id: user.id } });

    res.json({ message: "Password berhasil direset" });
  } catch (error) {
    res.status(500).json({ message: "Gagal mereset password" });
  }
});

router.post("/google-login", async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name, picture } = ticket.getPayload();

    // Cari user berdasarkan email
    let user = await User.findOne({ where: { email } });

    if (!user) {
      // Jika user belum ada, buat user baru
      user = await User.create({
        username: email.split("@")[0], // Gunakan bagian depan email sebagai username
        email,
        nama_lengkap: name,
        profile_image: picture,
        role: "user",
        kata_sandi: Math.random().toString(36).slice(-8), // Generate random password
        is_google_account: true,
      });
    }

    // Update last_login
    await User.update({ last_login: new Date() }, { where: { id: user.id } });

    const jwtToken = jwt.sign(
      {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    res.json({
      message: "Login berhasil",
      token: jwtToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        is_google_account: true,
      },
    });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(500).json({
      message: "Terjadi kesalahan saat login dengan Google",
    });
  }
});
module.exports = router;

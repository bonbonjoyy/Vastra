//C:\Users\Fadhlan\Downloads\Vastra-main\backend\controller\userController.jsconst jwt = require("jsonwebtoken");
const { User } = require("../models"); // Pastikan untuk import User model

const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!response) {
      // Jika data tidak ditemukan, kirimkan pesan error
      return res.status(404).json({ message: "User not found" });
    }

    // Membuat token untuk user yang ditemukan
    const token = jwt.sign(
      { user: { id: response.id, username: response.username } },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Kembalikan response dengan data user dan token
    res.status(200).json({
      token, // Token JWT
      user: {
        id: response.id,
        username: response.username,
      },
    });
  } catch (error) {
    console.log(error.message);
    // Tangani kesalahan lain dan kirimkan status 500 dengan pesan error
    res.status(500).json({ message: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  try {
    // Pastikan field required ada
    if (!req.body.username || !req.body.email || !req.body.kata_sandi) {
      return res.status(400).json({ message: "Data tidak lengkap" });
    }

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      kata_sandi: req.body.kata_sandi,
      role: req.body.role || "user",
      nama_lengkap: req.body.nama_lengkap,
      profile_image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    res.status(201).json({
      message: "User berhasil dibuat",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Gagal membuat user",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };

    if (req.file) {
      updates.profile_image = `/uploads/${req.file.filename}`;
    }

    // Password hanya diupdate jika ada
    if (updates.kata_sandi === "") {
      delete updates.kata_sandi;
    }

    await User.update(updates, {
      where: { id },
    });

    const updatedUser = await User.findByPk(id);
    res.status(200).json({
      message: "User berhasil diupdate",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Gagal update user",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Pastikan untuk import User model

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
      { expiresIn: '1h' }
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
    await User.create(req.body);
    res.status(201).json({ msg: 'User Created' });
  } catch (error) {
    console.log(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'User Updated' });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'User Deleted' });
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

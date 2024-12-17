const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Mengambil token dari header Authorization
  if (!token) {
    return res.status(401).json({ message: "Token tidak ditemukan" });
  }

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Menyimpan data pengguna dalam req.user
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token tidak valid atau telah kedaluwarsa" });
  }
};


module.exports = authMiddleware;

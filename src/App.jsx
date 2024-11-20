import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Harian from "./pages/Harian";
import Formal from "./pages/Formal";
import Khusus from "./pages/Khusus";
import TipsBahan from './pages/Tips Bahan';
import TipsWarna from './pages/Tips Warna';
import TipsAksesoris from './pages/Tips Aksesoris';
import ProdukKaos from "./pages/Produk Kaos";
import ProdukJaket from "./pages/Produk Jaket";
import ProdukAksesoris from "./pages/Produk Aksesoris";
import ProdukDetail from "./pages/Produk Detail";
import DetailBank from './pages/Pembayaran/DetailBank';
import DetailEwallet from './pages/Pembayaran/DetailEwallet';
import CheckoutKeranjang from './pages/CheckoutKeranjang';
// import { motion } from 'framer-motion'; // Uncomment jika menggunakan framer-motion

const App = () => {
  const location = useLocation();

  return (
    // <motion.div
    //   key={location.key} // Key untuk mengubah animasi saat berpindah halaman
    //   initial={{ opacity: 0 }} // Keadaan awal
    //   animate={{ opacity: 1 }} // Keadaan akhir saat animasi
    //   exit={{ opacity: 0 }} // Keadaan saat keluar
    //   transition={{ duration: 0.5 }} // Durasi transisi
    // >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Harian/" element={<Harian />} />
        <Route path="/Formal/" element={<Formal/>} />
        <Route path="/Khusus/" element={<Khusus/>} />
        <Route path="/Tips-Bahan" element={<TipsBahan />} />
        <Route path="/Tips-Warna" element={<TipsWarna />} />
        <Route path="/Tips-Aksesoris" element={<TipsAksesoris />} />
        <Route path="/Produk-Kami/Kaos" element={<ProdukKaos />} />
        <Route path="/Produk-Kami/Jaket" element={<ProdukJaket />} />
        <Route path="/Produk-Kami/Aksesoris" element={<ProdukAksesoris />} />
        <Route path="/Produk-Kami/:category/:id" element={<ProdukDetail />} />
        <Route path="/DetailBank" element={<DetailBank />} />
        <Route path="/DetailEwallet" element={<DetailEwallet />} />
        <Route path="/CheckoutKeranjang" element={<CheckoutKeranjang />} />
      </Routes>
    // </motion.div>
  );
};

export default App;
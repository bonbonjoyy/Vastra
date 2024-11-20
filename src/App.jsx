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
import Denim from "./pages/Harian/Denim"
import Casual from "./pages/Harian/Casual";
import Smartcasual from "./pages/Harian/Smartcasual";
import Tropical from "./pages/Harian/Tropical";
import Flannel from "./pages/Harian/Flannel";
import Sporty from "./pages/Harian/Sporty";
import Polo from "./pages/Harian/Polo";
import Streetwear from "./pages/Harian/Streeatwear";
import Arabicdress from "./pages/Khusus/Arabicdress";
import Vintage from "./pages/Khusus/Vintage";
import Hiker from "./pages/Khusus/Hiker";
import Theroyal from "./pages/Khusus/Theroyal";
import Hiphop from "./pages/Khusus/Hiphop";
import Wintercoat from "./pages/Khusus/Wintercoat";
import Military from "./pages/Khusus/Military";
import Biker from "./pages/Khusus/Biker";
import Fullbodysuit from "./pages/Formal/Fullbodysuit";
import Batik from "./pages/Formal/Batik"
import PreppySweater from "./pages/Formal/PreppySweater";
import PreppyCardigan from "./pages/Formal/PreppyCardigan";
import SmartCasuall from "./pages/Formal/SmartCasuall";
import Casuall from "./pages/Formal/Casuall";
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
      <Route path="/Denim" element={<Denim/>}/>
      <Route path="/Casual" element={<Casual/>}/>
      <Route path="/Smartcasual" element={<Smartcasual/>}/>
      <Route path="/Tropical" element={<Tropical/>}/>
      <Route path="/Flannel" element={<Flannel/>}/>
      <Route path="/Sporty" element={<Sporty/>}/>
      <Route path="/Polo" element={<Polo/>}/>
      <Route path="/Streetwear" element={<Streetwear/>}/>
      <Route path="/Arabicdress" element={<Arabicdress/>}/>
      <Route path="/Vintage" element={<Vintage/>}/>
      <Route path="/Hiker" element={<Hiker/>}/>
      <Route path="/Theroyal" element={<Theroyal/>}/>
      <Route path="/Hiphop" element={<Hiphop/>}/>
      <Route path="/Military" element={<Military/>}/>
      <Route path="/Wintercoat" element={<Wintercoat/>}/>
      <Route path="/Biker" element={<Biker/>}/>
      <Route path="/Fullbodysuit" element={<Fullbodysuit/>}/>
      <Route path="/Batik" element={<Batik/>}/>
      <Route path="/PreppySweater" element={<PreppySweater/>}/>
      <Route path="/PreppyCardigan" element={<PreppyCardigan/>}/>
      <Route path="/SmartCasuall" element={<SmartCasuall/>}/>
      <Route path="/Casuall" element={<Casuall/>}/>
      </Routes>
    // </motion.div>
  );
};

export default App;
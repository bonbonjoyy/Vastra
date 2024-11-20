import { Button, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Import Link dari react-router-dom
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('showNotification') === 'true') {
      const source = params.get('source');
      if (source === 'login') {
        setNotificationMessage('Selamat datang kembali!');
      } else if (source === 'register') {
        setNotificationMessage('Selamat datang di Vastra!');
      }
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false); // Sembunyikan notifikasi setelah 3 detik
      }, 3000);
    }
  }, [location]);

  return (
    <>
      <title>Home Page</title>

      <div className="w-full bg-white-a700">
        {showNotification && (
          <div
            style={{
              backgroundColor: 'black',
              padding: 10,
              textAlign: 'center',
              color: 'white',
              opacity: showNotification ? 1 : 0,
              transform: showNotification ? 'scale(1)' : 'scale(0.9)',
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
            }}
          >
            {notificationMessage}
          </div>
        )}

        <Header />

        <div className="mr-120px ml-[62px] flex items-center justify-between gap-5 md:mx-0 md:flex-row">
          <Img src="asset/image/hero.png" alt="Image" className="w-[40%] h-[640px] object-contain md:w-full mb-[83px]" />

          <div className="sm:gap-[33px] gap-[66px] w-[42%] flex flex-col items-start md:w-full md:px-5 mb-72">
            <Heading
              size="heading"
              as="h1"
              className="sm:text-[38px] md:text-[44px] leading-[55px] text-[48px] font-bold text-blk"
            >
              <>
                SELAMAT DATANG <br />
                DI VASTRA!
              </>
            </Heading>
            <Text as="p" className="flex flex-wrap text-[18px] font-normal leading-7 text-blk pr-[110px]">
            Selamat datang di Vastra! Kami hadir sebagai sumber inspirasi bagi kamu yang ingin tampil elegan 
            dan percaya diri setiap hari. Apakah kamu mencari referensi outfit untuk keseharian, tren fashion terbaru, 
            atau panduan paduan warna yang tepat untuk setiap kesempatan? Di Vastra, kami menawarkan solusi gaya yang 
            lengkap dan penuh keanggunan.
            </Text>
            <Button
              shape="square"
              className="min-w[124px] px-[23px] border-black border-solid border-2"
            >
              <Link
                to="gallery-section"
                smooth={true}
                duration={500}
              >
                Selengkapnya
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex w-full" id="gallery-section">
          {/* Set Gambar Pertama */}
          <div className="flex flex-col w-1/2">
            <div className="relative group">
            <RouterLink to="/Harian" className="block" onClick={scrollToTop}>
              <Img
                src="asset/image/home1.svg"
                alt="Banner Galeri"
                className="h-[400px] w-full object-cover transition duration-300 ease-in-out transform group-hover:brightness-200"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                <Text className="text-white text-2xl font-normal">
                  Galeri
                </Text>
              </div>
              </RouterLink>
            </div>
            <div className="relative group">
            <RouterLink to="" className="block" onClick={scrollToTop}>
              <Img
                src="asset/image/home2.svg"
                alt="Banner Trend"
                className="h-[400px] w-full object-cover transition duration-300 ease-in-out transform group-hover:brightness-200"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                <Text className="text-white text-2xl font-normal">
                  Kreasi
                </Text>
              </div>
              </RouterLink>
            </div>
          </div>

          {/* Set Gambar Kedua */}
          <div className="flex flex-col w-1/2">
            <div className="relative group">
              <RouterLink to="/Tips-Bahan" className="block" onClick={scrollToTop }>
                <Img
                  src="asset/image/home3.svg"
                  alt="Banner Tips"
                  className="h-[400px] w-full object-cover transition duration-300 ease-in-out transform group-hover:brightness-200"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                  <Text className ="text-white text-2xl font-normal">
                    Tips
                  </Text>
                </div>
              </RouterLink>
            </div>
            <div className="relative group">
            <RouterLink to="/Produk-Kami/Kaos" className="block" onClick={scrollToTop}>
              <Img
                src="asset/image/home4.svg"
                alt="Banner Produk Kami"
                className="h-[400px] w-full object-cover transition duration-300 ease-in-out transform group-hover:brightness-200"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                <Text className="text-white text-2xl font-normal">
                  Produk Kami
                </Text>
              </div>
              </RouterLink>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
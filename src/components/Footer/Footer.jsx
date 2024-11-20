import React from 'react';
import { Img, Heading, Text } from './..';
import { Link } from 'react-router-dom';

const Footer = ({ className, ...props }) => {
    // Fungsi untuk menggulir ke atas halaman
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer {...props} className={`${className} flex flex-col bg-black`}>
            <div className="h-[2px] w-full self-stretch" />
            <div className="py-[46px] mt-[-2px] relative flex justify-center self-stretch md:py-5">
                <div className="container-xs mb-1.5 flex justify-between md:px-5 w-full">
                    {/* Tautan Penting (Kiri) */}
                    <div className="w-[30%] flex flex-col items-start sm:w-full pl-[120px]">
                        <ul>
                            <li>
                                <a href="#">
                                    <Text as="p" className="text-[18px] font-bold text-white mt-8">
                                        Tautan Penting
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <Link to="/Harian" className="mt-[30px]" onClick={scrollToTop}>
                                    <Text as="p" className="text-[18px] font-normal text-white">
                                        Galeri
                                    </Text>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Tips-Bahan" className="mt-5" onClick={scrollToTop}>
                                    <Text as="p" className="text-[18px] font-normal text-white">
                                        Tips
                                    </Text>
                                </Link>
                            </li>
                            <li>
                                <a href="Trending" className="mt-5" onClick={scrollToTop}>
                                    <Text as="p" className="text-[18px] font-normal text-white">
                                        Trending
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <Link to="/Produk-Kami/Kaos" className="mt-5" onClick={scrollToTop}>
                                    <Text as="p" className="text-[18px] font-normal text-white">
                                        Produk Kami
                                    </Text>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center justify-center pr-[70px]">
                        <ul>
                            <li>
                                <a href="#">
                                    <Text as="p" className="text-[18px] font-bold text-white whitespace-nowrap">
                                        Temukan Kami di
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <a href="instagram" target="_blank" rel="noreferrer" className="mt-[30px]">
                                    <Text as="p" className="text-[18px] font-normal text-white">
                                        Instagram
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <a href="facebook" target="_blank" rel="noreferrer" className="mt-5">
                                    <Text as="p" className="text-[18px] font-normal text-white">
                                        Facebook
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <a href="pinterest" target="_blank" rel="noreferrer" className="mt-5">
                                    <Text as="p" className="text-[18px] font-normal text-white">
                                        Pinterest
                                    </Text>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Logo (Kanan) */}
                    <div className="flex items-center justify-end w-[30%] sm:w-full pr-[110px]">
                        <img
                            src="/asset/image/logo-footer.svg"
                            alt="Footer Logo"
                            className="w-[294px] h-[152px] object-contain" 
                        />
                    </div>
                </div>
            </div>

            {/* Bagian untuk Copyright */}
            <div className="flex justify-center items-center py-[20px]">
                <Heading
                    as="h6"
                    className="text-[18px] font-bold text-white mt-[38px] mb-[10px]"
                >
                    Copyright © 20242020 All rights reserved
                </Heading>
            </div>
        </footer>
    );
};

export default Footer;
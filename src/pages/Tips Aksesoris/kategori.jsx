import React, { Suspense, useState, useEffect } from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom"; // Impor useNavigate, useLocation, Routes, dan Route
import TabTips from "../../components/Tab Tips"; // Pastikan nama komponen sesuai

const data = [
    { textContent: "Memilih Bahan", path: "/Tips-Bahan" },
    { textContent: "Kombinasi Warna", path: "/Tips-Warna" },
    { textContent: "Penggunaan Aksesoris", path: "/Tips-Aksesoris" },
];

export default function Kategori() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();
    const location = useLocation(); // Menggunakan useLocation untuk memantau URL saat ini

    // Mengupdate selectedIndex berdasarkan rute saat ini
    useEffect(() => {
        const currentPath = location.pathname;
        const index = data.findIndex(item => item.path === currentPath);
        setSelectedIndex(index);
    }, [location]); // Update saat lokasi berubah

    const handleTabClick = (index, path) => {
        setSelectedIndex(index); // Set selectedIndex saat tab diklik
        navigate(path); // Navigasi ke path yang sesuai
    };

    return (
        <div className="flex md:flex-row h-[140px]">
            <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                    <TabTips
                        key={"tips" + index}
                        {...d}
                        className={`cursor-pointer ${selectedIndex === index ? 'bg-black text-white' : 'bg-white text-black'}`}
                        onClick={() => handleTabClick(index, d.path)} // Pass path ke fungsi
                    />
                ))}
            </Suspense>
        </div>
    );
}
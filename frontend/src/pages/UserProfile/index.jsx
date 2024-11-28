import React, { useState } from "react";
import { Button, Img, Text, Heading, Input } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nama_lengkap: "",
        nama_profil: "",
        email: "",
        sandi_saat_ini: "",
        sandi_baru: "",
    });

    const handleAvatarClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openPhotoModal = () => {
        setIsPhotoModalOpen(true);
        };

        const closePhotoModal = () => {
        setIsPhotoModalOpen(false);
        };

    const [errors, setErrors] = useState({});
    const [showValidation, setShowValidation] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (showValidation) {
            validateField(name, value);
        }
    };

    const validateField = (name, value) => {
        let newErrors = { ...errors };

        if (!value.trim()) {
            newErrors[name] = "Bagian ini wajib diisi";
        } else {
            if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
                newErrors[name] = "Format email tidak valid";
            } else if (name === "phone" && !/^[0-9]{10,13}$/.test(value)) {
                newErrors[name] = "Nomor telepon tidak valid (10-13 digit)";
            } else {
                delete newErrors[name];
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateAllFields = () => {
        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] = "Bagian ini wajib diisi";
            } else if (key === "email" && !/\S+@\S+\.\S+/.test(formData[key])) {
                newErrors[key] = "Format email tidak valid";
            } else if (key === "phone" && !/^[0-9]{10,13}$/.test(formData[key])) {
                newErrors[key] = "Nomor telepon tidak valid (10-13 digit)";
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePaymentMethodClick = (e, path) => {
        e.preventDefault();
        setShowValidation(true);

        if (validateAllFields()) {
            navigate(path);
        } else {
            // Scroll to first error
            const firstErrorField = document.querySelector(".border-red-500");
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    };

    return (
        <>
            <div className="flex w-full flex-col bg-white-a700">
                <Header />
                <div className="mt-[24px] mx-0 min-h-[806px] mb-[133px]
                    sm:mt-[24px] sm:mx-0 sm:min-h-[806px] sm:mb-[133px]
                    md:mt-[74px] md:mx-[123px] md:min-h-[806px] md:mb-[133px]
                    lg:mt-[74px] lg:mx-[145px] lg:min-h-[806px] lg:mb-[133px]">
                    <div className="flex gap-[40px] flex-col-reverse sm:flex-col md:flex-col lg:flex-row">
                        {/* Sidebar */}
                        <div className="w-full h-auto border border-solid border-black sm:w-[277px] md:w-[377px] lg:w-[277px] lg:h-[278px]">
                            {/* Item: Beranda */}
                            <div className="p-6 border-b border-black">
                                <Text className="text-lg font-bold">Beranda</Text>
                            </div>
                            {/* Item: Pengaturan Profil */}
                            <div className="p-6 border-b border-black">
                                <Text className="text-lg font-bold">Pengaturan Profil</Text>
                            </div>
                            {/* Item: Kosong */}
                            <div className="p-6 border-b border-black">
                                <Text className="text-lg font-bold"></Text>
                            </div>
                            {/* Item: Keluarkan Akun */}
                            <div className="p-6">
                                <Text className="text-lg font-bold">Keluarkan Akun</Text>
                            </div>
                        </div>

                        {/* Forms */}
                        <div className="flex-1">
                            <form>
                                {/* Foto Profil */}
                                <div className="border border-black p-6">            
                                    {/* Avatar, Nama, dan Tombol Perbarui */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            {/* Foto Profil */}
                                            <div>
                                            {/* Foto Profil */}
                                            <div
                                                className="w-[120px] h-[120px] rounded-full overflow-hidden border border-black cursor-pointer"
                                                onClick={handleAvatarClick}
                                            >
                                                <Img src="/asset/image/userprofil.svg" alt="Foto Profil" className="w-full h-full object-cover" />
                                            </div>

                                            {/* Modal Opsi */}
                                            {isModalOpen && (
                                                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                                                <div className="bg-white p-6 shadow-lg w-80">
                                                    <button
                                                    className="w-full p-2 bg-gray-200 rounded-md mb-2 hover:bg-gray-300"
                                                        onClick={openPhotoModal}
                                                        >
                                                    Lihat Foto
                                                    </button>
                                                    <button
                                                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                                    onClick={() => alert('Ganti Foto Profil')}
                                                    >
                                                    Ganti Foto Profil
                                                    </button>
                                                    <button
                                                    className="w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600 mt-2"
                                                    onClick={closeModal}
                                                    >
                                                    Tutup
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            </div>
                                            
                                            {/* Nama */}
                                            <Text className="text-lg font-medium ml-4">Nama Pengguna</Text>
                                        </div>
                                        
                                        {/* Tombol Perbarui */}
                                        <Button type="submit"
                                                style={{ backgroundColor: 'grey', color: 'white' }}
                                                className="w-12 py-4 mt-2"
                                        >
                                            Perbarui
                                        </Button>
                                    </div>
                                </div>

                                {/* User Information */}
                                <div className="border border-black p-6">
                                    <Heading
                                        as="h1"
                                        className="text-[18px] font-bold text-black mb-4"
                                    >
                                        Edit Informasi anda
                                    </Heading>
                                    
                                    <div className="mb-4">
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full ${errors.email ? "border-red-500" : ""}`}
                                        />
                                        {errors.email && (
                                            <Text className="text-red-500 text-sm mt-1">
                                                {errors.email}
                                            </Text>
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        {/* Other input fields */}
                                        {Object.keys(formData).map((key) => {
                                            if (key === "email") return null;
                                            return (
                                                <div key={key}>
                                                    <Input
                                                        name={key}
                                                        placeholder={key
                                                            .split("_")
                                                            .map(
                                                                (word) =>
                                                                    word.charAt(0).toUpperCase() + word.slice(1)
                                                            )
                                                            .join(" ")}
                                                        value={formData[key]}
                                                        onChange={handleInputChange}
                                                        className={errors[key] ? "border-red-500" : ""}
                                                        type={key === "phone" ? "tel" : "text"}
                                                    />
                                                    {errors[key] && (
                                                        <Text className="text-red-500 text-sm mt-1">
                                                            {errors[key]}
                                                        </Text>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <Button
                                        type="submit"
                                        style={{ backgroundColor: 'grey', color: 'white' }}
                                        className="w-full py-4 mt-8"
                                    >
                                        Simpan Perubahan
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

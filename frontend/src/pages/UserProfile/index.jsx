//frontend/src/pages/UserProfile/index.jsx
import React, { useState, useEffect } from "react";
import { Button, Img, Text, Heading } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

export default function UserProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState("profile");
  const navigate = useNavigate();

  // State untuk data user
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    nama_lengkap: "",
    profile_image: null,
  });

  // State terpisah untuk password
  const [passwordData, setPasswordData] = useState({
    sandi_saat_ini: "",
    sandi_baru: "",
    sandi_konfirmasi: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchUserData();
  }, []);

  // Mengambil data user
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/api/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserData({
        username: response.data.username,
        email: response.data.email,
        nama_lengkap: response.data.nama_lengkap || "",
        profile_image: response.data.profile_image,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle perubahan input data profil
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "sandi_saat_ini" ||
      name === "sandi_baru" ||
      name === "sandi_konfirmasi"
    ) {
      setPasswordData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle perubahan password
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle upload foto
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        // 1MB limit
        alert("Ukuran file maksimal 1MB");
        return;
      }

      const formData = new FormData();
      formData.append("profile_image", file);

      try {
        const token = localStorage.getItem("token");
        await api.patch("/api/users/profile/update", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        await fetchUserData();
        setIsModalOpen(false);
        alert("Foto berhasil diupload");
      } catch (error) {
        alert("Gagal upload foto");
      }
    }
  };

  // Handle submit perubahan profil
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const data = {
        nama_lengkap: userData.nama_lengkap,
        email: userData.email,
        username: userData.username,
      };

      if (passwordData.sandi_baru) {
        if (!passwordData.sandi_saat_ini) {
          alert("Masukkan sandi saat ini");
          return;
        }
        if (passwordData.sandi_baru !== passwordData.sandi_konfirmasi) {
          alert("Sandi baru dan konfirmasi tidak cocok");
          return;
        }
        data.sandi_saat_ini = passwordData.sandi_saat_ini;
        data.kata_sandi = passwordData.sandi_baru;
      }

      const response = await api.patch("/api/users/profile/update", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data) {
        setPasswordData({
          sandi_saat_ini: "",
          sandi_baru: "",
          sandi_konfirmasi: "",
        });
        alert("Profil berhasil diperbarui");
        await fetchUserData();
      }
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Sandi saat ini tidak valid");
      } else {
        alert(error.response?.data?.message || "Gagal memperbarui profil");
      }
    }
  };

  // Handle lihat foto
  const handleViewPhoto = () => {
    setShowPhotoModal(true);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex w-full flex-col bg-white-a700">
        <Header />
        {/* Rest of your JSX remains same but update the form fields */}
        <div className="mt-[24px] mx-4 md:mx-[123px] lg:mx-[145px] mb-[133px]">
          <div className="flex gap-[40px] flex-col-reverse sm:flex-col md:flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="w-full lg:w-[277px] border border-black mb-auto">
              <div
                onClick={() => navigate("/")}
                className={`p-6 border-b border-black cursor-pointer transition-colors ${
                  activeMenu === "beranda"
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Text className="text-lg font-bold">Beranda</Text>
              </div>
              <div
                onClick={() => navigate("/UserProfile")}
                className={`p-6 border-b border-black cursor-pointer transition-colors ${
                  activeMenu === "profile"
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Text className="text-lg font-bold">Pengaturan Profil</Text>
              </div>
              <div
                onClick={() => navigate("/Order")}
                className={`p-6 border-b border-black cursor-pointer transition-colors ${
                  activeMenu === "order"
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Text className="text-lg font-bold">Pesanan Saya</Text>
              </div>
              <div
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                className="p-6 cursor-pointer hover:bg-gray-100"
              >
                <Text className="text-lg font-bold">Keluar</Text>
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1">
              <form onSubmit={handleSubmit}>
                {/* Profile Photo Section */}
                <div className="border border-black p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-[120px] h-[120px] rounded-full overflow-hidden border border-black cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                      >
                        <img
                          src={
                            userData.profile_image instanceof File
                              ? URL.createObjectURL(userData.profile_image)
                              : userData.profile_image
                              ? `https://vastra-backend.vercel.app${userData.profile_image}` // Tambah base URL
                              : "/asset/image/userprofil.svg"
                          }
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Text className="text-lg font-medium">
                        {userData.username}
                      </Text>
                    </div>
                  </div>
                </div>

                {/* User Information */}
                <div className="border border-black p-6 mt-6">
                  <Heading as="h2" className="text-xl font-bold mb-6">
                    Edit Informasi
                  </Heading>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="nama_lengkap"
                        value={userData.nama_lengkap}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-black rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-black rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-black rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Sandi Saat Ini
                      </label>
                      <input
                        type="password"
                        name="sandi_saat_ini"
                        value={passwordData.sandi_saat_ini}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-black rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Sandi Baru
                      </label>
                      <input
                        type="password"
                        name="sandi_baru"
                        value={passwordData.sandi_baru}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-black rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Konfirmasi Sandi Baru
                      </label>
                      <input
                        type="password"
                        name="sandi_konfirmasi"
                        value={passwordData.sandi_konfirmasi}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-black rounded"
                      />
                    </div>

                    <Button
                      type="submit"
                      style={{ backgroundColor: "grey", color: "white" }}
                      className="w-full py-4 mt-8"
                    >
                      Simpan Perubahan
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Photo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <div className="space-y-4">
              <button
                onClick={() => setShowPhotoModal(true)}
                className="w-full p-2 border border-black text-center bg-white text-black hover:bg-black hover:text-white transition-colors"
              >
                Lihat Foto
              </button>
              <label
                htmlFor="photo-upload"
                className="block w-full p-2 border border-black text-center bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                Pilih Foto
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full p-2 border border-black text-center bg-white text-black hover:bg-black hover:text-white transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Photo Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full">
            <div className="p-4">
              <img
                src={
                  userData.profile_image
                    ? `https://vastra-backend.vercel.app${userData.profile_image}` // Tambah base URL
                    : "/asset/image/userprofil.svg"
                }
                alt="Profile"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setShowPhotoModal(false)}
                className="mt-4 w-full bg-gray-500 text-white px-4 py-2 rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import { Button, Img, Text, Heading, Input, useCart } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function Pembayaran() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    nama_lengkap: "",
    alamat: "",
    kota: "",
    kecamatan: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [showValidation, setShowValidation] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

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
        <div className="mt-[74px] mx-[123px] min-h-[806px] mb-[133px]">
          <div className="flex gap-[162px]">
            {/* Left Section - Forms */}
            <div className="flex-1">
              <form>
                {/* Customer Information */}
                <div className="border border-black p-6 mb-6">
                  <Heading
                    as="h1"
                    className="text-[18px] font-bold text-black mb-4"
                  >
                    Informasi Pembeli
                  </Heading>
                  <div className="mb-4">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <Text className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </Text>
                    )}
                  </div>

                  <Heading
                    as="h2"
                    className="text-[18px] font-bold text-black mb-4"
                  >
                    Tujuan Pengiriman
                  </Heading>
                  <div className="space-y-4">
                    {/* ... other input fields similar to email with validation ... */}
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
                </div>

                {/* Payment Methods */}
                <div className="border border-black p-6">
                  <Heading
                    as="h2"
                    className="text-[18px] font-bold text-black mb-4"
                  >
                    Metode Pembayaran
                  </Heading>

                  <div className="space-y-4">
                    <div
                      onClick={(e) =>
                        handlePaymentMethodClick(e, "/detail-ewallet")
                      }
                      className="border border-black p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <Text className="text-[15px] font-medium">
                          E-Wallet
                        </Text>
                        <div className="flex gap-3">
                          <Img
                            src="/asset/image/dana.svg"
                            className="h-[34px]"
                          />
                          <Img
                            src="/asset/image/gopay.svg"
                            className="h-[34px]"
                          />
                          <Img
                            src="/asset/image/spay.svg"
                            className="h-[34px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={(e) =>
                        handlePaymentMethodClick(e, "/detail-bank")
                      }
                      className="border border-black p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <Text className="text-[15px] font-medium">
                          Transfer Bank
                        </Text>
                        <div className="flex gap-4">
                          <Img
                            src="/asset/image/mandiri.svg"
                            className="h-[34px]"
                          />
                          <Img
                            src="/asset/image/bca.svg"
                            className="h-[34px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Section - Cart Summary */}
            <div className="w-[577px]">
              <div className="border border-black">
                <div className="p-6 border-b border-black">
                  <Text className="text-lg font-bold">Keranjang</Text>
                </div>

                {/* Cart Items */}
                <div className="max-h-[600px] overflow-y-auto">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="border-b border-black"
                    >
                      <div className="flex">
                        <div className="w-[127px] h-[127px] border-r border-black">
                          <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full h-full ${
                              item.category === "aksesoris"
                                ? "object-cover object-[50%_100%]"
                                : "object-cover"
                            }`}
                          />
                        </div>
                        <div className="flex-1 px-8 py-2">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-xl font-bold">
                                {item.title}
                              </h3>
                              {item.category !== "aksesoris" && (
                                <p className="text-sm mt-1">
                                  Ukuran: {item.size}
                                </p>
                              )}
                              <p className="text-lg font-bold text-gray-600">
                                Rp {item.price.toLocaleString()}
                              </p>
                              <p className="text-sm mt-1">
                                Jumlah: {item.quantity}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Section */}
                <div className="border-t border-black p-4">
                  <div className="flex justify-between items-center">
                    <Text className="text-lg font-bold">Total</Text>
                    <Text className="text-lg font-bold">
                      Rp {calculateTotal().toLocaleString()}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

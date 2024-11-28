import React, { useState } from "react";
import { Button, Img, Text, Heading, useCart } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PaymentCountdown from "../../components/PaymentCountdown/PaymentCountdown";
import { Link } from "react-router-dom";

const ewalletOptions = [
  {
    id: "dana",
    name: "Dana",
    logo: "/asset/image/dana.svg",
    description:
      "Lakukan Pembayaran menggunakan DANA ke nomor virtual account berikut.",
    phoneNumber: "085712345678",
  },
  {
    id: "gopay",
    name: "GoPay",
    logo: "/asset/image/gopay.svg",
    description:
      "Lakukan Pembayaran menggunakan GoPay ke nomor virtual account berikut.",
    phoneNumber: "085798765432",
  },
  {
    id: "shopeepay",
    name: "ShopeePay",
    logo: "/asset/image/spay.svg",
    description:
      "Lakukan Pembayaran menggunakan ShopeePay ke nomor virtual account berikut.",
    phoneNumber: "085723456789",
  },
];

export default function DetailEwallet() {
  const [selectedEwallet, setSelectedEwallet] = useState(null);
  const [copyMessage, setCopyMessage] = useState("");
  const { cartItems } = useCart();

  const handleEwalletSelect = (ewallet) => {
    setSelectedEwallet(ewallet);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage(`Teks berhasil disalin: ${text}`);
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  return (
    <div className="flex w-full flex-col bg-white-a700">
      <Header className="self-stretch" />

      <div className="mt-[24px] mx-6 min-h-[806px] mb-[133px]
                      mt-[24px] mx-6 min-h-[806px] mb-[133px]
                      sm:mt-[74px] sm:mx-[123px] sm:min-h-[806px] sm:mb-[133px]
                      md:mt-[74px] md:mx-[123px] md:min-h-[806px] md:mb-[133px]
                      lg:mt-[74px] lg:mx-[145px] lg:min-h-[806px] lg:mb-[133px]">

        <div className="flex gap-[100px] flex-col sm:flex-col md:flex-col lg:flex-row">

          {/* Left Section - E-wallet Selection */}
          <div className="flex-1">
            <Heading as="h1" className="text-[36px] font-bold text-black mb-8">
              Pilih E-Wallet
            </Heading>


            <div className="flex flex-col gap-10">
              {ewalletOptions.map((ewallet) => (
                <div
                  key={ewallet.id}
                  onClick={() => handleEwalletSelect(ewallet)}
                  className={`border p-6 px-8 cursor-pointer transition-all ${
                    selectedEwallet?.id === ewallet.id
                      ? "border-black"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <Text className="text-[18px] font-medium">
                      {ewallet.name}
                    </Text>
                    <div className="flex items-center gap-4">
                      <Img
                        src={ewallet.logo}
                        alt={ewallet.name}
                        className="h-[34px]"
                      />
                      {selectedEwallet?.id === ewallet.id && (
                        <div className="text-black">✓</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Payment Details */}
          <div className="w-full sm:w-[277px] md:w-[377px] lg:w-[477px]">
            <div className="border border-black mx-0
                              sm:mx-0
                              md:mr-5
                              lg:mr-5 mt-1">
              <div className="bg-black p-4">
                <Text className="text-[16px] font-bold text-white text-center">
                  Pembayaran Vastra
                </Text>
              </div>

              <div className="p-4">
                <Text className="text-[36px] font-bold text-black">
                  Rp {calculateTotal().toLocaleString()}
                </Text>
              </div>

              <PaymentCountdown />

              <div className="p-4">
                <Text className="text-[22px] font-bold text-black mb-4">
                  {selectedEwallet?.name || "Pilih E-Wallet"}
                </Text>

                {selectedEwallet && (
                  <>
                    <Text className="text-[16px] mb-6">
                      {selectedEwallet.description}
                    </Text>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Text className="text-[16px]">Nomor Tujuan</Text>
                          <Text className="text-[20px]">
                            {selectedEwallet.phoneNumber}
                          </Text>
                        </div>
                        <Text
                          className="text-[16px] cursor-pointer hover:text-gray-600"
                          onClick={() =>
                            handleCopy(selectedEwallet.phoneNumber)
                          }
                        >
                          Salin
                        </Text>
                      </div>
                    </div>

                    {copyMessage && (
                      <Text className="text-green-500 text-sm mt-2">
                        {copyMessage}
                      </Text>
                    )}
                  </>
                )}
              </div>

              <div className="p-4 border-t border-black">
                <Link to="/selesai" className="block w-full">
                  <div className="bg-black p-2">
                    <Text className="text-[16px] font-bold text-white text-center block">
                      Cek Status
                    </Text>
                  </div>
                </Link>

                <Link to="/pembayaran">
                  <div className="mt-4 text-center">
                    <Text className="text-[14px] hover:text-gray-600">
                      Kembali ke halaman pembayaran
                    </Text>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

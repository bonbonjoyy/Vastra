import React, { useState } from "react";
import { Button, Img, Text, Heading, useCart } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PaymentCountdown from "../../components/PaymentCountdown/PaymentCountdown";
import { Link } from "react-router-dom";

const bankOptions = [
  {
    id: "mandiri",
    name: "Bank Mandiri",
    logo: "/asset/image/mandiri.svg",
    description:
      "Lakukan Pembayaran dari rekening bank Mandiri ke nomor virtual account berikut.",
    companyCode: "1234",
    virtualAccount: "56789",
  },
  {
    id: "bca",
    name: "Bank BCA",
    logo: "/asset/image/bca.svg",
    description:
      "Lakukan Pembayaran dari rekening bank BCA ke nomor virtual account berikut.",
    companyCode: "4321",
    virtualAccount: "98765",
  },
];

export default function DetailBank() {
  const [selectedBank, setSelectedBank] = useState(null);
  const [copyMessage, setCopyMessage] = useState("");
  const { cartItems } = useCart();

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
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

      <div className="mt-[74px] mx-[123px] min-h-[806px] mb-[133px]">
        <div className="flex gap-[162px]">
          {/* Left Section - Bank Selection */}
          <div className="flex-1">
            <Heading as="h1" className="text-[36px] font-bold text-black mb-8">
              Pilih Rekening Tujuan
            </Heading>
            <div className="flex flex-col gap-10">
              {bankOptions.map((bank) => (
                <div
                  key={bank.id}
                  onClick={() => handleBankSelect(bank)}
                  className={`border p-6 cursor-pointer transition-all ${
                    selectedBank?.id === bank.id
                      ? "border-black"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <Text className="text-[18px] font-medium">{bank.name}</Text>
                    <div className="flex items-center gap-4">
                      <Img
                        src={bank.logo}
                        alt={bank.name}
                        className="h-[34px]"
                      />
                      {selectedBank?.id === bank.id && (
                        <div className="text-black">✓</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Payment Details */}
          <div className="w-[577px]">
            <div className="border border-black">
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
                  {selectedBank?.name || "Pilih Bank"}
                </Text>

                {selectedBank && (
                  <>
                    <Text className="text-[16px] mb-6">
                      {selectedBank.description}
                    </Text>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Text className="text-[16px]">Kode Perusahaan</Text>
                          <Text className="text-[20px]">
                            {selectedBank.companyCode}
                          </Text>
                        </div>
                        <Text
                          className="text-[16px] cursor-pointer hover:text-gray-600"
                          onClick={() => handleCopy(selectedBank.companyCode)}
                        >
                          Salin
                        </Text>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Text className="text-[16px]">
                            Nomor Virtual Account
                          </Text>
                          <Text className="text-[20px]">
                            {selectedBank.virtualAccount}
                          </Text>
                        </div>
                        <Text
                          className="text-[16px] cursor-pointer hover:text-gray-600"
                          onClick={() =>
                            handleCopy(selectedBank.virtualAccount)
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

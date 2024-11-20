import { Button } from "react-scroll";
import { Heading, Text } from "../../components";
import BankTransfer from "../../components/Bank Transfer"; // Pastikan nama komponen sesuai
import Header from "../../components/Header/Header";
import React, { useState } from "react"; // Import useState
import PaymentCountdown from '../../services/PaymentCountdown'; // Impor komponen countdown
import { Link } from "react-router-dom";

export default function DetailBank() {
    const [selectedBank, setSelectedBank] = useState(null); // State untuk menyimpan bank yang dipilih
    const [copyMessage, setCopyMessage] = useState(""); // State untuk menyimpan pesan salin

    const handleBankSelect = (bank) => {
        setSelectedBank(bank);
    };

    const bankDetails = {
        Mandiri: {
            title: "Bank Mandiri",
            description: "Lakukan Pembayaran dari rekening bank Mandiri ke nomor virtual account berikut.",
            companyCode: "1234",
            virtualAccount: "56789",
        },
        BCA: {
            title: "Bank BCA",
            description: "Lakukan Pembayaran dari rekening bank BCA ke nomor virtual account berikut.",
            companyCode: "4321",
            virtualAccount: "98765",
        },
    };

    const details = bankDetails[selectedBank] || {};

    // Fungsi untuk menyalin teks ke clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyMessage(`Teks berhasil disalin: ${text}`);
            setTimeout(() => {
                setCopyMessage(""); // Hapus pesan setelah beberapa detik
            }, 2000);
        }).catch(err => {
            console.error("Gagal menyalin: ", err);
        });
    };

    return (
        <>
            <title>Checkout</title>

            <div className="flex w-full flex-col items-center gap-[74px] bg-white-a700 md:gap-[55px] sm:gap-[37px]">
                <Header className="self-stretch" />

                <div className="flex w-full justify-between px-32">
                    {/* Div untuk Pilih Rekening Tujuan */}
                    <div className="container-xs mb-1 md:px-5 items-left">
                        <div className="flex flex-col gap-8 sm:gap-4">
                            <Heading size="heading" as="h1" className="text-[36px] font-bold text-black md:text-[32px] sm:text-[28px]">
                                Pilih Rekening Tujuan
                            </Heading>
                            <div className="mr-[500px] flex flex-col gap-[40px] self-stretch md:mr-0"> 
                                <BankTransfer onSelectBank={handleBankSelect} />
                            </div>
                        </div>
                    </div>

                    {/* Div untuk Detail Pembayaran */}
                    <div className="mt-2 mb-8 flex w-[400px] flex-col items-end self-center border border-solid border-black">
                        <div className="flex w-[90%] flex-col items-center bg-white-a700 md:w-full">
                            <div className="flex justify-center self-stretch bg-black p-2 sm:p-2">
                                <Heading as="h2" className="self-end text-[16px] font-bold text-white">
                                    Pembayaran Vastra
                                </Heading>
                            </div>
                        </div>
                        <div className="flex self-stretch px-4 py-3 sm:p-2">
                            <Heading
                                size="heading"
                                as="h3"
                                className="mt-2 mb-2 text-[36px] font-bold text-black md:text-[32px] sm:text-[28px]"
                            >
                                Rp. 250.000
                            </Heading>
                        </div>
                        
                        <PaymentCountdown />

                        <div className="mb-2 mt-2 self-stretch">
                            <div className="flex flex-col gap-4">
                                <div className="flex px-4 py-1 sm:px-2 gap-4">
                                    <Heading
                                        size="headings"
                                        as="h4"
                                        className="text-[22px] font-bold text-black md:text-[20px] sm:text-[18px] mb-2"
                                    >
                                        {details.title || "Pilih Bank"}
                                    </Heading>
                                </div>
                                <div className="flex flex-col gap-4 px-4 sm:px-2">
                                    <div className="flex">
                                        <Text as="p" className="mt-1 mb-5 w-[90%] text-[16px] font-normal leading-5 text-black">
                                            {details.description || "Silakan pilih bank untuk melihat detail pembayaran."}
                                        </Text>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <Text as="p" className="mb-1 w-[38%] text-[16px] font-normal leading-5 text-black">
                                            <span>
                                                <>
                                                Kode Perusahaan
                                                <br />
                                                </>
                                            </span>
                                            <span className="text-[20px]">{details.companyCode || "-"}</span>
                                        </Text>
                                        <Text as="p" className="text-[16px] font-normal text-black-900_a0 cursor-pointer" onClick={() => copyToClipboard(details.companyCode)}>
                                            Salin
                                        </Text>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <Text as="p" className="my-5 w-[41%] text-[16px] font-normal leading-5 text-black">
                                            <>
                                            Nomor virtual account
                                            <br />
                                            </>
                                            <span className="text-[20px]">{details.virtualAccount || "-"}</span>
                                        </Text>
                                        <Text as="p" className="text-[16px] font-normal text-black-900_a0 cursor-pointer" onClick={() => copyToClipboard(details.virtualAccount)}>
                                            Salin
                                        </Text>
                                    </div>
                                    {copyMessage && (
                                        <Text as="p" className="text-green-500 text-sm mt-2">
                                            {copyMessage}
                                        </Text>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-center w-full px-2">
                                <Button
                                    color="black"
                                    size="lg"
                                    shape="square"
                                    className="mt-8 mb-4 px-[130px] bg-black text-white flex items-center justify-center h-[40px]"
                                >
                                    Cek Status
                                </Button>
                            </div>

                            <Link to="/CheckoutKeranjang">
                                <div className="ml-4 mr-4 flex justify-center p-2 md:mx-0">
                                    <Text as="p" className="text-[14px] font-normal text-black">
                                        Keluar dari halaman ini
                                    </Text>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
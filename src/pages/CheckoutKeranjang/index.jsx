import { Button, Img, Text, Heading, Input } from "../../components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from 'react-router-dom';
import React from "react";

export default function CheckoutKeranjang() {
    return (
        <>
        <title>Checkout</title>

        <div className="sm:gap-[66px] md:gap-[99px] gap-[132px] flex w-full flex-col bg-white-a700">
            <div className="sm:gap-[37px] md:gap-[55px] gap-[74px] flex flex-col">
                <Header />
                <div className="container-xs md:px-5 mx-[117px]">
                    <div className="gap-[38px] flex md:flex-row">
                        <div className="w-full">
                            <div className="py-[22px] px-[30px] flex flex-col items-start border border-solid border-black sm:p-5">
                                <Heading as="h1" className="text-[18px] font-bold text-black">
                                    Informasi Pembeli
                                </Heading>
                                <Input
                                shape="square"
                                type="email"
                                name="email"
                                placeholder={`Email`}
                                className="mt-4 self-stretch"
                                />
                                <Heading as="h2" className="text-[18px] mt-[22px] font-bold text-black">
                                    Tujuan Pengiriman
                                </Heading>
                                <div className="mb-1 mt-3.5 flex flex-col gap-5 self-stretch">
                                    <div className="flex sm:flex-col">
                                        <Input
                                        shape="square"
                                        name="nama_lengkap"
                                        placeholder={`Nama Lengkap`}
                                        className="w-full sm:w-full"
                                        />
                                    </div>
                                    <Input
                                    shape="square"
                                    name="alamat"
                                    placeholder={`Alamat`}
                                    />
                                    <Input
                                    shape="square"
                                    name="kota"
                                    placeholder={`Kota`}
                                    />
                                    <Input
                                    shape="square"
                                    name="kecamatan"
                                    placeholder={`Kecamatan`}
                                    />
                                    <Input
                                    shape="square"
                                    type="tel"
                                    name="phone"
                                    placeholder={`No Handphone`}
                                    />
                                </div>
                            </div>

                            {/* E-wallet */}
                            <div className="py-[22px] px-[30px] flex flex-col items-start border border-solid border-black bg-white sm:p-5">
                                <Heading as="h3" className="text-[18px] ml-1 font-bold text-black md:ml-0">
                                    Metode Pembayaran
                                </Heading>
                                <Heading
                                    size="textxs"
                                    as="h4"
                                    className="text-[16px] ml-1 mt-2 font-inter1 font-normal text-black md:ml-0">
                                        Silahkan pilih metode pembayaran
                                </Heading>

                                <Link to="/DetailEwallet" className="w-full">
                                <div className="flex items-center px-[22px] py-6 mt-[22px] mb-3.5 ml-1 gap-5 border border-solid border-black md:ml-0">
                                    <Heading 
                                        size="textxs" 
                                        as="p" 
                                        className="font-Helvetica text-[15px] font-medium text-black flex-grow">
                                        Transfer Ewallet
                                    </Heading>
                                    <div className="flex gap-[8px]">
                                        <Img 
                                            src="asset/image/dana.svg" 
                                            className="h-[34px] w-[18%px] object-contain" 
                                        />
                                        <Img 
                                            src="asset/image/gopay.svg" 
                                            className="h-[34px] w-[18%px] object-contain" 
                                        />
                                        <Img 
                                            src="asset/image/spay.svg" 
                                            className="h-[34px] w-[18%px] object-contain" 
                                        />
                                    </div>
                                    
                                </div>
                                </Link>

                                {/* Bank */}
                                <Link to="/DetailBank" className="w-full">
                                <div className="flex items-center px-[22px] py-6 mt-[22px] mb-3.5 ml-1 gap-5 border border-solid border-black md:ml-0 w-full">
                                    <Heading 
                                        size="textxs" 
                                        as="p" 
                                        className="font-Helvetica text-[15px] font-medium text-black flex-grow">
                                        Transfer Bank
                                    </Heading>
                                    <div className="flex gap-[8px]">
                                        <Img 
                                            src="asset/image/mandiri.svg" 
                                            className="h-[34px] w-[18%px] object-contain" 
                                        />
                                        <Img 
                                            src="asset/image/bca.svg" 
                                            className="h-[34px] w-[18%px] object-contain" 
                                        />
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                        
                        {/* Keranjang */}
                        <div className="w-full">
                            <div className="flex flex-col items-center border border-solid border-black">
                                <Heading as="h5" className="text-[18px] ml-5 mt-5 self-start font-bold text-black">
                                    Keranjang
                                </Heading>
                                <div className="mt-4 flex items-start gap-7 self-stretch border-t border-b border-solid border-black sm:flex-col">
                                    <div className="flex flex-row gap-5">
                                        <div className="w-[22%] self-center border-r border-solid border-black sm:w-full">
                                            <Img
                                                src="asset/image/hoodie.svg"
                                                alt=""
                                                className="h-[126px] w-full object-cover md:h-auto"
                                            />
                                        </div>
                                        <div className="mt-4 flex-1 sm:self-stretch">
                                            <div className="flex items-center justify-center sm:flex-row">
                                                <div className="flex flex-1 flex-col items-start sm:self-stretch">
                                                    <Heading size="headingxs" as="h6" className="text-[20px] mb-2 font-inter1 font-semibold text-black"
                                                    style={{ whiteSpace: 'nowrap' }}>
                                                        Hoodie Putih
                                                    </Heading>
                                                    <div className="flex flex-col items-start self-stretch">
                                                        <Text size="pricing" as="p" className="text-[12px] font-normal text-black mb-2">
                                                            Rp 250.000
                                                        </Text>
                                                        <Text size="pricing" as="p" className="text-[12px] font-normal text-black">
                                                            M
                                                        </Text>
                                                    </div>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 20 20" className="ml-36 mt-6">
                                                    <path fill="currentColor" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07m1.41-1.41A8 8 0 1 0 15.66 4.34A8 8 0 0 0 4.34 15.66m9.9-8.49L11.41 10l2.83 2.83l-1.41 1.41L10 11.41l-2.83 2.83l-1.41-1.41L8.59 10L5.76 7.17l1.41-1.41L10 8.59l2.83-2.83z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Text
                                        size="lg"
                                        className="px-[33px] mt-3.5 p-2 text-center self-stretch border-r-0 border-b-0 border-l-0 border-t border-solid border-black sm:px-5"
                                    >
                                        Total Rp. 250.000
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
        </>
    )
}
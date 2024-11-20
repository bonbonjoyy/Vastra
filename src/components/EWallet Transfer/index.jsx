import { Img, Heading } from "..";
import React from "react";

export default function EWalletTransfer({ onSelectEWallet, ...props }) {
    const handleEWalletSelect = (ewallet) => {
        if (onSelectEWallet) {
            onSelectEWallet(ewallet);
        }
    };

    return (
        <div {...props} className={`${props.className} flex flex-col gap-5`}>
            {/* Border untuk Dana */}
            <div
                className="flex justify-between items-center gap-5 px-[72px] py-6 border-blue_gray-400 border border-solid bg-white-a700 cursor-pointer"
                onClick={() => handleEWalletSelect("Dana")}
            >
                <Heading size="textxs" as="p" className="font-Helvetica text-[16px] font-medium text-black">
                    Dana
                </Heading>
                <Img src="asset/image/dana.svg" alt="Transfer E-Wallet Dana" className="h-[60px] w-[40%] object-contain" />
            </div>

            {/* Border untuk GoPay */}
            <div
                className="flex justify-between items-center gap-5 px-[72px] py-6 border-blue_gray-400 border border-solid bg-white-a700 cursor-pointer"
                onClick={() => handleEWalletSelect("GoPay")}
            >
                <Heading size="textxs" as="p" className="font-Helvetica text-[16px] font-medium text-black">
                    GoPay
                </Heading>
                <Img src="asset/image/gopay.svg" alt="Transfer E-Wallet GoPay" className="h-[60px] w-[40%] object-contain" />
            </div>

            {/* Border untuk ShopeePay */}
            <div
                className="flex justify-between items-center gap-5 px-[72px] py-6 border-blue_gray-400 border border-solid bg-white-a700 cursor-pointer"
                onClick={() => handleEWalletSelect("ShopeePay")}
            >
                <Heading size="textxs" as="p" className="font-Helvetica text-[16px] font-medium text-black">
                    ShopeePay
                </Heading>
                <Img src="asset/image/spay.svg" alt="Transfer E-Wallet ShopeePay" className="h-[60px] w-[40%] object-contain" />
            </div>
        </div>
    );
}
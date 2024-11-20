import { Img, Heading } from "./..";
import React from "react";

export default function BankTransfer({ transferbank = "Transfer Bank", onSelectBank, ...props }) {
    const handleBankSelect = (bank) => {
        if (onSelectBank) {
            onSelectBank(bank);
        }
    };

    return (
        <div {...props} className={`${props.className} flex flex-col gap-5`}>
            {/* Border untuk Mandiri */}
            <div
                className="flex justify-between items-center gap-5 px-[72px] py-6 border-blue_gray-400 border border-solid bg-white-a700 cursor-pointer"
                onClick={() => handleBankSelect("Mandiri")}
            >
                <Heading size="textxs" as="p" className="font-Helvetica text-[16px] font-medium text-black">
                    Bank Mandiri
                </Heading>
                <Img src="asset/image/mandiri.svg" alt="Transfer Bank Mandiri" className="h-[34px] w-[18%] object-contain" />
            </div>

            {/* Border untuk BCA */}
            <div
                className="flex justify-between items-center gap-5 px-[72px] py-6 border-blue_gray-400 border border-solid bg-white-a700 cursor-pointer"
                onClick={() => handleBankSelect("BCA")}
            >
                <Heading size="textxs" as="p" className="font-Helvetica text-[16px] font-medium text-black">
                    Bank BCA
                </Heading>
                <Img src="asset/image/bca.svg" alt="Transfer Bank BCA" className="h-[34px] w-[18%] object-contain" />
            </div>
        </div>
    );
}
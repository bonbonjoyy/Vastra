import { Text, Heading, Img } from "./..";
import React from "react";

export function TipsCard({ 
    materialImage = "",
    materialTitle = "Pahami Jenis Bahan",
    materialDescription = "Pahami karakteristik dan penggunaan tiap bahan pakaian, seperti katun yang lembut dan breathable, linen yang ringan dan cepat kering, serta wol yang hangat dan cocok untuk iklim dingin. Memilih bahan yang tepat akan membuat pakaian lebih nyaman dan sesuai untuk berbagai situasi.",
    ...props
}) {
    return (
        
            <div
                {...props}
                className={`${props.className} flex mx-auto flex-col items-center w-auto gap-[72px] md:gap-[54px] sm:gap-9 border border-black border-solid bg-white-a700`} // Border di dalam kontainer
            >
                <div className="self-stretch w-full">
                    <Img src={materialImage} alt="Image" className="h-[318px] w-full object-cover sm:h-auto" />
                </div>
                <div className="flex flex-col items-start gap-11 self-stretch w-full px-[59px]"> {/* Padding dalam konten */}
                    <Heading size="subhead2" as="h2" className="text-[34px] font-bold text-blk sm:text-[28px]">
                        {materialTitle}
                    </Heading>
                    <Text as="p" className="w-full text-[18px] font-normal leading-5 text-blk sm:w-full sm:text-[15px] mb-[90px]">
                        {materialDescription}
                    </Text>
                </div>
            </div>

    );
}

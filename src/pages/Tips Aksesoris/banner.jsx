import { Heading } from "../../components";
import React from "react";

export default function Banner() {
    return (
        <div className="flex h-[452px] items-center justify-start bg-[url(/asset/image/banner.svg)] bg-cover bg-no-repeat md:h-auto md:py-5">
            <div className="container-xs ml-10 px-14 py-24 md:px-5 md:ml-5 md:py-16">
                <Heading as="h1" className="text-[48px] font-bold FONT text-white md:text-[44px] sm:text-[38px]">
                    TIPS VASTRA
                </Heading>
            </div>
        </div>
    );
}

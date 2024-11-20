import { label } from "framer-motion/client";
import { LabelView, Heading, Img, Text, TipsCard } from "../../components/";
import React, { Suspense } from "react";

const data = [
    {
        materialImage: "asset/image/undertone.svg",
        materialTitle: "Kenali Undertone Kulitmu",
        materialDescription:
        "Undertone adalah warna dasar kulit yang ditentukan oleh gen atau faktor keturunan dan tidak dapat diubah. Ada tiga jenis undertone, yaitu warm undertone, cool undertone, dan neutral undertone. Cara menentukannya adalah perhatikan warna urat nadi di sekitar pergelangan tangan. Jika berwarna hijau berarti masuk kategori warm, biru cool, dan perpaduan hijau dan biru berarti neutral.",
    },
    {
        materialImage: "asset/image/monokromatik.svg",
        materialTitle: "Gunakan Kombinasi Warna Monokromatik",
        materialDescription:
        "Kombinasi warna monokromatik menggunakan satu warna dasar dengan variasi gradasi dan intensitas yang berbeda. Misalnya, menggunakan warna hitam dan abu-abu, atau biru tua, biru muda, dan biru dongker dalam satu outfit. Hal ini dapat memberikan kesan elegan dan harmonis. Kombinasi monokromatik sangat cocok untuk tampilan yang simpel namun tetap stylish.",
    },
    {
        materialImage: "asset/image/analog.svg",
        materialTitle: "Pelajari Kombinasi Warna-Warna Analog",
        materialDescription:
        "Warna analog adalah warna yang bersebelahan di roda warna, seperti biru dan hijau atau oranye dan kuning. Kombinasi ini memberikan kesan harmonis dan natural. Hal ini penting karena dapat menciptakan kesinambungan, harmoni, dan kesan yang menarik secara visual.",
    },
    {
        materialImage: "asset/image/motif.svg",
        materialTitle: "Coba Bereksperimen Dengan Motif",
        materialDescription:
        "Usahakan warna dari motif selaras dengan warna pakaian lainnya untuk kesan lebih harmonis. Paduan motif garis-garis atau kotak-kotak dengan warna solid dapat memberikan tampilan modern, sedangkan motif floral atau batik cocok untuk gaya yang lebih tradisional atau artistik.",
    },
];

export default function Content() {
    const [ChipOptions, setChipOptions] = React.useState(() => [
        { value: '1', label: `Kenali Undertone Kulit` }, // Ubah 1 menjadi '1'
        { value: '2', label: `Kombinasi Monokromatik` }, // Ubah 2 menjadi '2'
        { value: '3', label: `Bereksperimen Dengan Motif` }, // Ubah 3 menjadi '3'
        { value: '4', label: `Pelajari Warna Analog` }, // Ubah 4 menjadi '4'
    ]);
    const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

    return (
        <div className="mt-[93px] flex flex-col items-center px-[129px]">
            <div className="container-xs flex flex-col gap-24 md:gap-[72px] md:px-5 sm:gap-12">
                    <div className="flex items-center justify-between gap-10 border border-solid border-black bg-white-a700 md:flex-row mb-[66px] ">
                        <Img
                            src="asset/image/tipswarna.svg"
                            alt="Bahan Pakaian"
                            className="h-[600px] w-[80%] object-contain" // Sesuaikan ukuran gambar sesuai kebutuhan
                        />
                        <div className="flex flex-col items-start gap-11 md:px-5"> {/* Kontainer teks dan ChipView */}
                            <div className="flex flex-col items-start gap-11"> {/* Elemen teks */}
                                <Heading as="h2" className="text-[44px] font-bold text-blk md:text-[44px] sm:text-[38px]">
                                    Kombinasi Warna
                                </Heading>
                                <Text as="p" className="w-[84%] text-[16px] font-normal leading-7 text-blk md:w-full">
                                    Memilih kombinasi warna pada pakaian pria bukan hanya soal gaya, tetapi juga kesan dan 
                                    kepercayaan diri. Kombinasi warna yang tepat membantu menciptakan tampilan harmonis dan menonjol, 
                                    baik untuk acara santai maupun formal. Warna-warna cerah memberikan kesan kasual, sementara warna 
                                    netral dan monokromatik cocok untuk suasana lebih formal.{" "}
                                </Text>
                            </div>
                            <LabelView
                                options={ChipOptions}
                                values={selectedChipOptions}
                                className="flex flex-wrap gap-x-[34px] gap-y-4"
                            >
                                {(option) => (
                                    <React.Fragment key={option.index}>
                                        <div className="flex h-[32px] w-auto cursor-pointer flex-row items-center justify-center border border-solid border-blk bg-white-a700 px-2.5 text-center text-[14px] text-blk">
                                            <span>{option.label}</span>
                                        </div>
                                    </React.Fragment>
                                )}
                            </LabelView>
                    </div>
                </div>
            </div>
            <div className="mr-5 grid grid-cols-2 justify-center gap-16 md:mr-0 md:grid-cols-2 px-5">
                <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                    <TipsCard {...d} key={"tips" + index} />
                ))}
                </Suspense>
            </div>
        </div>
    )
}
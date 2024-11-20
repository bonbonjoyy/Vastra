import { label } from "framer-motion/client";
import { LabelView, Heading, Img, Text, TipsCard } from "../../components/";
import React, { Suspense } from "react";

const data = [
    {
        materialImage: "asset/image/bahan.svg",
        materialTitle: "Pahami Jenis Bahan",
        materialDescription:
        "Pahami karakteristik dan penggunaan tiap bahan pakaian, seperti katun yang lembut dan breathable, linen yang ringan dan cepat kering, serta wol yang hangat dan cocok untuk iklim dingin. Memilih bahan yang tepat akan membuat pakaian lebih nyaman dan sesuai untuk berbagai situasi.",
    },
    {
        materialImage: "asset/image/cuaca.svg",
        materialTitle: "Perhatikan Cuaca",
        materialDescription:
        "Pilih pakaian yang sesuai dengan kondisi cuaca dan iklim di tempat Kamu. Untuk cuaca panas, pilih pakaian yang ringan dan dapat menyerap keringat. Untuk cuaca dingin, pilih pakaian yang memberikan kehangatan dan melindungi dari angin. Sesuaikan juga dengan perubahan iklim di sepanjang tahun, seperti musim hujan atau kemarau, bahkan pancaroba untuk memberikan kenyamanan maksimal dan Kesehatan tubuhmu.",
    },
    {
        materialImage: "asset/image/kegiatan.svg",
        materialTitle: "Perimbangkan Kegiatan Harian",
        materialDescription:
        "Sesuaikan jenis bahan pakaian dengan aktivitas yang akan dilakukan. Misalnya, bahan yang stretchy, ringan, dan breathable, seperti spandex dan polyester yang lentur dan cepat kering, sangat cocok untuk aktivitas fisik dan olahraga. Dan untuk acara resmi karakteristik bahan berstruktur dan lebih formal.",
    },
    {
        materialImage: "asset/image/kualitas.svg",
        materialTitle: "Cek Kualitas Bahan Yang Akan Dipakai",
        materialDescription:
        "Periksa ketebalan, tekstur, dan ketahanan bahan. Pilih bahan yang nyaman saat disentuh. Sebagai contoh, kain berkualitas baik tidak akan mudah kusut atau robek, dan teksturnya biasanya terasa lembut atau halus dan tidak menyebabkan iritasi, serta tidak menimbulkan bulu jika lama dipakai.",
    },
];

export default function Content() {
    const [ChipOptions, setChipOptions] = React.useState(() => [
        { value: '1', label: `Pahami Jenis Bahan` }, // Ubah 1 menjadi '1'
        { value: '2', label: `Perhatikan Cuaca dan Iklim` }, // Ubah 2 menjadi '2'
        { value: '3', label: `Pertimbangkan Kegiatan Harian` }, // Ubah 3 menjadi '3'
        { value: '4', label: `Cek Kualitas Bahan` }, // Ubah 4 menjadi '4'
    ]);
    const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

    return (
        <div className="mt-[93px] flex flex-col items-center px-[129px]">
            <div className="container-xs flex flex-col gap-24 md:gap-[72px] md:px-5 sm:gap-12">
                    <div className="flex items-center justify-between gap-10 border border-solid border-black bg-white-a700 md:flex-row mb-[66px] ">
                        <Img
                            src="asset/image/tipsbahan.svg"
                            alt="Bahan Pakaian"
                            className="h-[600px] w-[80%] object-contain" // Sesuaikan ukuran gambar sesuai kebutuhan
                        />
                        <div className="flex flex-col items-start gap-11 md:px-5"> {/* Kontainer teks dan ChipView */}
                            <div className="flex flex-col items-start gap-11"> {/* Elemen teks */}
                                <Heading as="h2" className="text-[44px] font-bold text-blk md:text-[44px] sm:text-[38px]">
                                    Tips Memilih Bahan
                                </Heading>
                                <Text as="p" className="w-[84%] text-[16px] font-normal leading-7 text-blk md:w-full">
                                    Memilih bahan pakaian pria bukan hanya soal gaya, tetapi juga kenyamanan dan kesesuaian. Bahan 
                                    menentukan kenyamanan saat dipakai, kemudahan per awatan, dan cocok atau tidaknya untuk berbagai cuaca. 
                                    Kain katun misalnya, adalah pilihan umum karena sifatnya yang adem dan breathable, membuat kamu tetap 
                                    sejuk di cuaca panas dan hangat saat berlapis.{" "}
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
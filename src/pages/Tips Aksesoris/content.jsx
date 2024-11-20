import { label } from "framer-motion/client";
import { LabelView, Heading, Img, Text, TipsCard } from "../../components/";
import React, { Suspense } from "react";

const data = [
    {
        materialImage: "asset/image/jam-tangan.svg",
        materialTitle: "Jam Tangan",
        materialDescription:
        "Penggunaan jam tangan sejatinya bukan hanya sebagai alat untuk untuk penunjuk waktu, namun jam tangan juga merupakan aksesori yang bisa memperkuat penampilan kamu menjadi tampak lebih sempurna. Dan kamu harus memilih model jam tangan yang sesuai dengan ukuran pergelangan tangan kamu, jangan sampai kebesaran atau pun kekecilan.",
    },
    {
        materialImage: "asset/image/ikat-pinggang.svg",
        materialTitle: "Ikat Pinggang",
        materialDescription:
        "Penggunaan ikat pinggang bisa membuat penampilan kamu terlihat lebih rapi, namun pilihlah warna ikat pinggang yang senada dengan warna sepatu yang kamu pakai. Tapi sebaiknya, pilih ikat pinggang yang berwarna netral seperti hitam dan coklat, agar bisa dicocokan dengan baju dan celana warna apapun yang kamu kenakan.",
    },
    {
        materialImage: "asset/image/dompet.svg",
        materialTitle: "Dompet",
        materialDescription:
        "Penggunaan dompet tidak hanya berfungsi sebagai tempat penyimpanan uang dan kartu, tetapi juga sebagai aksesori yang dapat meningkatkan penampilan kamu. Jangan sampai ukuran dompet terlalu besar atau kecil sehingga mengganggu kenyamanan dan penampilan. Ukuran dompet yang pas dengan gaya dapat memberi kesan lebih rapi dan elegan, serta melengkapi outfit kamu dengan sempurna.",
    },
    {
        materialImage: "asset/image/perhiasan.svg",
        materialTitle: "Perhiasan",
        materialDescription:
        "Menggunakan kalung, gelang dan cincin bukan hanya hak perempuan saja, pria pun boleh juga menggunakannya sebagai aksesoris untuk membuat penampilan menjadi lebih maskulin dan macho. Namun, penggunaa kalung, gelang dan cincin ini jangan berlebihan, gunakan sewajarnya saja, pilih juga warna yang netral dengan model yang simple.",
    },
];

export default function Content() {
    const [ChipOptions, setChipOptions] = React.useState(() => [
        { value: '1', label: `Jam Tangan` }, // Ubah 1 menjadi '1'
        { value: '2', label: `Ikat Pinggang` }, // Ubah 2 menjadi '2'
        { value: '3', label: `Dompet` }, // Ubah 3 menjadi '3'
        { value: '4', label: `Perhiasan` }, // Ubah 4 menjadi '4'
    ]);
    const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);


    return (
        <div className="mt-[93px] flex flex-col items-center px-[129px]">
            <div className="container-xs flex flex-col gap-24 md:gap-[72px] md:px-5 sm:gap-12">
                    <div className="flex items-center justify-between gap-10 border border-solid border-black bg-white-a700 md:flex-row mb-[66px] ">
                        <Img
                            src="asset/image/aksesoris.svg"
                            alt="Aksesoris"
                            className="h-[600px] w-[80%] object-contain" // Sesuaikan ukuran gambar sesuai kebutuhan
                        />
                        <div className="flex flex-col items-start gap-11 md:px-5"> {/* Kontainer teks dan ChipView */}
                            <div className="flex flex-col items-start gap-11"> {/* Elemen teks */}
                                <Heading as="h2" className="text-[44px] font-bold text-blk md:text-[44px] sm:text-[38px]">
                                    Tips Penggunaan Aksesoris
                                </Heading>
                                <Text as="p" className="w-[84%] text-[16px] font-normal leading-7 text-blk md:w-full">
                                Penggunaan aksesoris dalam gaya berpenampilan pria bisa bermanfaat untuk mempermanis tampilan agar 
                                menjadi lebih stylish dan semakin keren. Penambahan eksesoris dalam penampilan sebaiknya semua 
                                seimbang, yang terpenting kamu harus merasa nyaman dan lebih percaya diri. Dan berikut beberapa 
                                aksesoris wajib yang harus dimiliki pria agar bisa tampil semakin stylish.{" "}
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
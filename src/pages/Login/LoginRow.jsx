import { Img, Text, Button, Input, Heading } from "../../components";
import React, { useState } from "react";
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useForm } from "react-hook-form"; // Import React Hook Form

export default function RegisterRow() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        console.log('Data yang di-submit:', data);
        navigate('/?source=login'); // Navigasi ke halaman home dengan parameter query source=login
    };

    return (
        <div className="flex justify-center">
            <div className="max-w-[1220px] mx-auto flex w-full items-start justify-center px-2.5 md:flex-col md:px-5">
                <div className="px-[46px] gap-[42px] mt-[82px] w-[42%] flex flex-col items-start md:w-full md:px-5 md:pl-28 mt-[-69px]">
                    <Heading as="h1" className="sm:text-[38px] md:text-[44px] text-[48px] font-bold text-blk mx-28 mb-2">
                        MASUK
                    </Heading>

                    <form onSubmit={handleSubmit(onSubmit)} className="mr-3 flex flex-col items-start gap-3.5 self-stretch md:mr-0">
                        <div className="gap-[18px] flex flex-col self self-stretch w-[396px]">
                            {/* Input Email */}
                            <Input
                                shape="square"
                                type="email"
                                {...register("email", { required: "Email wajib diisi" })} 
                                placeholder="E-mail"
                                className="w-full"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                            {/* Input Username */}
                            <Input
                                shape="square"
                                type="text"
                                {...register("username", { required: "Username wajib diisi" })}
                                placeholder="Username"
                                className="w-full"
                            />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

                            {/* Input Password */}
                            <div className="flex items-center w-full">
                                <Input
                                    shape="square"
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", { required: "Kata Sandi wajib diisi" })}
                                    placeholder="Kata Sandi"
                                    className="w-full"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="mr-[-40px] ml-2"
                                >
                                    {showPassword ? (
                                        <Icon icon="mdi:eye-off" width="24" height="24" />
                                    ) : (
                                        <Icon icon="mdi:eye" width="24" height="24" />
                                    )}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                            {/* Tombol Submit */}
                            <Button
                                type="submit"
                                color="blk"
                                size="md"
                                shape="square"
                                className="px-[34px] text ```javascript
                                text-white w-full mb-1"
                            >
                                Masuk
                            </Button>
                        </div>
                    </form>
                    <Text as="p" className="text-[12px] font-normal text-blk mx-28 flex flex-row">
                        Belum punya akun? <Link to="/register" className="text-blue-500 ml-1">Daftar</Link>
                    </Text>
                    <Text as="p" className="text-[12px] font-normal text-blk">
                        <a href="/lupa-password" className="text-blue-500">Lupa Kata Sandi</a>
                    </Text>
                </div>
                <div className="flex-1 flex items-start justify-end md:w-full md:flex-none md:self-stretch pr-28">
                    <Img
                        src="asset/image/login.svg"
                        alt="Image"
                        className="w-[35.3%] h-auto object-contain mt-[-492px]" />
                </div>
            </div>
        </div>
    );
}
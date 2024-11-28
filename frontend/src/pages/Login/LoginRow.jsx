import { Img, Text, Button, Input, Heading } from "../../components";
import React, { useState } from "react";
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"; // Import React Hook Form

export default function LoginRow() {
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
            <div className="max-w-[1220px] mx-auto flex flex-col md:flex-row w-full items-center md:items-start justify-center px-2.5 md:px-5">
                <div className="flex-1 flex items-center justify-center sm:pr-2 md:pr-4 lg:pr-5 md:justify-end w-full mb-4 md:mb-0 md:order-2">
                    <Img
                        src="asset/image/login.svg"
                        alt="Image"
                        className="w-[180px] mt-4 h-auto object-contain
                                    sm:w-[180px] sm:mt-4 sm:h-auto
                                    md:w-1/2 md:h-auto
                                    lg:w-[71%] lg:mr-8 lg:h-auto lg:mt-0"
                    />
                </div>

                {/* Form */}
                <div 
                    className="flex flex-col items-start gap-6 w-full px-4 
                                sm:items-center sm:mt-4 sm:pl-4 
                                md:w-[50%] md:px-8 md:order-1 
                                lg:mt-[110px] lg:pl-[2px]">

                    <Heading 
                        as="h1" 
                        className="text-[32px] ml-[98px] font-bold text-black 
                                    sm:ml-[22px] 
                                    md:text-[48px] 
                                    lg:ml-[120px]"
                    >
                        MASUK
                    </Heading>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={`flex flex-col items-start gap-4 w-full 
                                    sm:pl-4 
                                    md:w-[396px] md:ml-[120px] 
                                    lg:w-[396px] lg:ml-[120px]`}
                    >
                        {/* INPUT EMAIL */}
                        <Input
                            type="email"
                            {...register("email", { required: "Email wajib diisi" })}
                            placeholder="E-mail"
                            className="w-full"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                        {/* INPUT USERNAME */}
                        <Input
                            type="text"
                            {...register("username", { required: "Username wajib diisi" })}
                            placeholder="Username"
                            className="w-full"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

                        {/* INPUT PASSWORD */}
                        <div className="relative w-full">
                            <Input
                                type={showPassword ? "text" : "password"}
                                {...register("password", { required: "Kata Sandi wajib diisi" })}
                                placeholder="Kata Sandi"
                                className="w-full"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <Icon icon="mdi:eye-off" width="24" height="24" />
                                ) : (
                                    <Icon icon="mdi:eye" width="24" height="24" />
                                )}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                        <Button
                            type="submit"
                            style={{ backgroundColor: 'black', color: 'white' }}
                            className="w-full py-4"
                        >
                            Masuk
                        </Button>
                    </form>
                    <Text as="p" className="text-[12px] ml-[93px] font-normal text-blk mx-4 sm:mx-8 md:mx-16 lg:ml-[188px] flex flex-row">
                        Belum punya akun? 
                        <Link to="/register" className="text-blue-500 ml-1">Daftar</Link>
                    </Text>
                    <Text as="p" className="text-[12px] font-normal text-blk mx-4 sm:mx-8 md:mx-16 lg:mr-[216px] mb-24">
                        <a href="/lupa-password" className="text-blue-500">Lupa Kata Sandi</a> 
                    </Text>
                </div>
            </div>
        </div>
    );
}
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const onSubmit = (data) => {
    console.log("Data yang di-submit:", data);
    if (data.password !== data.confirmPassword) {
      return;
    }
    navigate("/login?source=register");
  };

  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="w-full max-w-[1220px] mx-auto flex flex-col lg:flex-row">
        {/* Form Section */}
        <div
          className="w-full order-2 lg:order-1 lg:w-1/2 flex flex-col items-center 
                              mt-8 lg:mt-[357px] px-4 sm:px-6 lg:px-8"
        >
          <h1 className="font-helvetica text-[32px] lg:text-[48px] font-bold text-black mb-8 lg:mb-14 text-center">
            REGISTRASI
          </h1>

          <div className="w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[396px]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                type="text"
                {...register("nama", { required: "Nama wajib diisi" })}
                placeholder="Nama"
                className="w-full h-9 px-4 font-helvetica text-[14px] text-black/50 border border-black/50"
              />
              {errors.nama && (
                <p className="text-red-500 text-sm">{errors.nama.message}</p>
              )}

              <input
                type="email"
                {...register("email", { required: "Email wajib diisi" })}
                placeholder="E-mail"
                className="w-full h-9 px-4 font-helvetica text-[14px] text-black/50 border border-black/50"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Kata Sandi wajib diisi",
                  })}
                  placeholder="Kata Sandi"
                  className="w-full h-9 px-4 font-helvetica text-[14px] text-black/50 border border-black/50"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("password")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <Icon
                    icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                    width="24"
                    height="24"
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Konfirmasi kata sandi wajib diisi",
                    validate: (value) =>
                      value === password || "Kata sandi tidak cocok",
                  })}
                  placeholder="Masukkan Ulang Kata Sandi"
                  className="w-full h-9 px-4 font-helvetica text-[14px] text-black/50 border border-black/50"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <Icon
                    icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"}
                    width="24"
                    height="24"
                  />
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 bg-white text-black font-helvetica text-[12px] border border-black hover:bg-black hover:text-white transition-colors"
              >
                Buat Akun
              </button>

              <div className="flex justify-center items-center gap-1 mt-4">
                <span className="text-[12px] font-helvetica text-[#868686]">
                  Sudah punya akun?
                </span>
                <Link
                  to="/login"
                  className="text-[12px] font-helvetica text-[#1E1BCF]"
                >
                  Masuk
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full order-1 lg:order-2 lg:w-1/2 relative flex justify-center lg:justify-end 
                              overflow-hidden"
        >
          <div className="relative w-full h-full flex justify-center lg:justify-end">
            <img
              src="asset/image/login.svg"
              alt="Register illustration"
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[543px] h-auto 
                                     object-contain mt-8 lg:mt-[185px] lg:mr-[60px] xl:mr-[120px]
                                     transition-all duration-300"
            />
            <div
              className="absolute inset-0 mt-[100px] lg:mt-[203px] 
                                      bg-gradient-to-b from-transparent to-white/53"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

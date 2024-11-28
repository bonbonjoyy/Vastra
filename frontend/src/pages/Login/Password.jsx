import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Password() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Data yang di-submit:", data);
    setIsEmailSent(true);
  };

  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="w-full max-w-[1220px] mx-auto flex flex-col lg:flex-row">
        {/* Form Section */}
        <div
          className="w-full order-2 lg:order-1 lg:w-1/2 flex flex-col items-center 
                              mt-8 lg:mt-[355px] px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-8 lg:mb-14">
            <h1 className="font-helvetica text-[32px] lg:text-[48px] font-bold text-black">
              PULIHKAN
              <br />
              KATA SANDI
            </h1>
          </div>

          <div className="w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[396px]">
            {isEmailSent ? (
              <div className="space-y-4">
                <div className="bg-[#868686] p-4 text-white text-center rounded">
                  <p className="font-helvetica text-[12px]">
                    Kami telah mengirimi Anda email berisi instruksi untuk
                    <br />
                    mengatur ulang kata sandi Anda.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-4">
                  <span className="text-[12px] font-helvetica text-[#868686]">
                    Ingat kata sandi anda?
                  </span>
                  <Link
                    to="/login"
                    className="text-[12px] font-helvetica text-[#1E1BCF]"
                  >
                    Kembali ke Masuk
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  type="email"
                  {...register("email", { required: "Email wajib diisi" })}
                  placeholder="E-mail"
                  className="w-full h-9 px-4 font-helvetica text-[14px] text-black/50 border border-black/50"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 bg-white text-black font-helvetica text-[12px] border border-black hover:bg-black hover:text-white transition-colors"
                >
                  Pulihkan
                </button>

                <div className="flex justify-center items-center gap-2 mt-4">
                  <span className="text-[12px] font-helvetica text-[#868686]">
                    Ingat kata sandi anda?
                  </span>
                  <Link
                    to="/login"
                    className="text-[12px] font-helvetica text-[#1E1BCF]"
                  >
                    Kembali ke Masuk
                  </Link>
                </div>
              </form>
            )}
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
              alt="Password recovery illustration"
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

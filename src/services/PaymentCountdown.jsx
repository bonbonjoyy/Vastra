import React, { useState, useEffect } from 'react';
import { Text } from '../components/Text/Text';

const PaymentCountdown = () => {
  // Set waktu awal menjadi 24 jam dalam detik (24 * 60 * 60)
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60); // 24 jam

  useEffect(() => {
    if (timeRemaining <= 0) {
      alert("Waktu habis! Silakan ulangi konfirmasi pembayaran.");
      setTimeRemaining(24 * 60 * 60); // Reset waktu ke 24 jam
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timeInSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="w-full">
      <Text
        as="p"
        className="flex item-center justify-center border border-solid border-black bg-gray-300 px-[34px] py-1 text-[18px] font-normal text-black sm:px-5"
      >
        Bayar dalam {formatTime(timeRemaining)}
      </Text>
    </div>
  );
};

export default PaymentCountdown;
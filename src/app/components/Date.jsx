import React, { useState, useEffect } from "react";

export default function DateBoard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const dia = time.getDate();
  const mes = time.getMonth() + 1;
  const anio = time.getFullYear();
  const hour = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, '0'); 
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="text-black">
      <p className="date mx-1 my-1 bg-zinc-300 py-1 px-1 rounded-sm font-[Digital-7] font-black text-xl text-center">
        {`${dia}/${mes}/${anio}`}
      </p>
      <p className="hour mx-1 my-1 bg-zinc-300 py-1 px-1 rounded-sm font-[Digital-7] font-black text-xl text-center">
        {`${hour}:${minutes}:${seconds}`}
      </p>
    </div>
  );
}

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
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const remainingSeconds = Math.floor(seconds % 60)

  return (
    <div className="text-black">
      <span className="absolute top-0 left-0 mx-1 my-1 bg-zinc-300 p-1 rounded-sm text-xl font-bold">
       {`${dia}-${mes}-${anio}`}
      </span>
      <span className="absolute top-0 right-0 mx-1 my-1 bg-zinc-300 py-1 px-2 rounded-sm w-[80px] font-[Digital-7] text-2xl font-black text-center">
       {`${hour}:${minutes.toFixed()}:${remainingSeconds.toFixed()}`}
      </span>
    </div>
  );
}


'use client';

import { Button } from "./button";

export default function Hero() {
  return (
    <section className="w-full min-h-[500px] bg-gray-100 flex flex-col md:flex-row pt-2">

      
      <div className="w-full md:w-[60%] min-h-[350px] md:h-[500px] bg-gray-100 flex flex-col justify-center items-center gap-4 px-4 text-center">

        <h3 className="text-base sm:text-lg font-semibold text-black">
          Pro.Beyond.
        </h3>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-700 font-sans">
          Iphone 18 PRO
        </h1>

        <p className="text-sm sm:text-base text-black">
          Created to change the way you see the world.
        </p>

        <Button variant="transparent">Shop Now</Button>

      </div>

      
      <div className="w-full md:w-[40%] h-[300px] sm:h-[400px] md:h-[500px]">

        <img
          src="https://i.ebayimg.com/images/g/QGMAAeSwqYhqvxNI/s-l1600.webp"
          alt="Iphone 18 PRO"
          className="w-full h-full object-contain md:object-cover"
        />

      </div>

    </section>
  );
}

import React from "react";

function Hero({ title, img }) {
  return (
    <section className="relative h-64 md:h-64 lg:h-80 bg-gray-200 flex items-center overflow-hidden">
      <img
        src={img}
        alt="Healthcare professionals"
        fill
        className="object-cover opacity-80 w-full h-full"
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
      <div className="absolute bottom-10 left-5 md:left-14  z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
      </div>
    </section>
  );
}

export default Hero;

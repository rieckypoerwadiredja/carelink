import React from "react";
import { Link } from "react-router";

export default function BigHero({ title, desc, img }) {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <img
        src={img}
        alt="Caregiver with elderly person"
        fill
        className="!object-cover object-[70%] h-full w-full"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 container mx-auto flex flex-col justify-center text-center md:text-left px-8 sm:px-0 md:pl-20  z-30">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-white/90 mb-8">{desc}</p>
          <Link
            target="_blank"
            to="https://www.figma.com/proto/JvkQ1Vdd2TuzrLyFl590dz/Hydro-Hub?node-id=14-6743&t=toweK7EO8N52MplK-1&starting-point-node-id=14%3A6743"
            className="flex max-w-36 gap-x-2"
          >
            <img src="/assets/images/logo/appstore.png" alt="" />
            <img src="/assets/images/logo/playstore.webp" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

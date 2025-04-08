import React from "react";
import Hero from "../components/fragments/hero/Hero";
import Caremate from "../components/fragments/Caremate";

export default function Aboutus() {
  const timeline = [
    {
      year: "2025",
      title: "Stepping into the Digital World",
      content:
        "We begin a new chapter by embracing technology that brings caregivers, seniors, and families closer together. Our first app will help track health, schedule visits, and stay connected—making care not only easier, but also more heartfelt. It's a small step with big love.",
    },
    {
      year: "2030",
      title: "Warmth in Every Neighborhood",
      content:
        "We dream of creating community-based Carelink Hubs—friendly places where seniors can drop by for light checkups, join group activities, or simply enjoy a cup of tea with a friend. It’s not just care, it’s a second home filled with joy and laughter.",
    },
    {
      year: "2035",
      title: "Smarter Care, Deeper Understanding",
      content:
        "As we grow, we’ll use gentle technology like AI to understand each person better—how they feel, what they like, and what brings them comfort. Care becomes more personal, more intuitive, and always centered on the human touch.",
    },
    {
      year: "2040",
      title: "One Heart, Many Homes",
      content:
        "Our hope is to expand Carelink beyond borders, reaching families across countries with the same warmth and values. Whether in a big city or a quiet town, we want everyone to feel they belong—that they are loved, seen, and cared for.",
    },
    {
      year: "2045",
      title: "Kindness that Lasts",
      content:
        "By now, we dream that Carelink will be known not just as a service, but as a movement. A reminder that growing older should never mean growing apart. And that a kind world is possible—one caring heart at a time.",
    },
  ];
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Hero title="About Us" img="/assets/images/hero/aboutus.png" />

      {/* Mission Statement Section */}
      <section className="py-16 px-10 md:px-14">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Mission Statement</h2>
              <p className="text-gray-600 leading-relaxed">
                At Carelink, we believe that growing older should never mean
                growing alone. We are here not just to care, but to connect—with
                compassion, love, and genuine attention. Every smile, every
                story, every hand we hold is a reminder of why we do what we do.
                Our mission is to bring warmth, dignity, and joy into the daily
                lives of seniors, making each moment feel safe, meaningful, and
                full of heart.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/assets/images/desc/caremate/caremates.png"
                alt="Healthcare team"
                width={500}
                height={400}
                className="rounded-lg object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50 px-10 md:px-14">
        <div className="container mx-auto">
          {timeline.map((item, index) => (
            <div className="flex" key={index}>
              {/* Tahun + garis vertikal */}
              <div className="flex flex-col items-center mr-8">
                <div className="font-bold text-xl mb-2">{item.year}</div>
                <div className="h-full w-0.5 bg-primary relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>

              {/* Konten */}
              <div className="pb-8">
                <h3 className="text-xl font-semibold mb-4 flex gap-x-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-white"></div>
                  {item.title}
                </h3>
                <div className="flex gap-x-2 items-start max-w-2xl text-gray-600">
                  <div className="w-3 ml-1 bg-gray-600 rounded-full self-stretch"></div>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <Caremate />
    </main>
  );
}

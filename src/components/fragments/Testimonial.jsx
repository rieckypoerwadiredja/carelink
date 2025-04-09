import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Having Carelink with us has been a true blessing. My mother now wakes up with a smile, surrounded by people who treat her like family. She’s no longer alone, and knowing she’s in such caring hands gives our family peace of mind. The caregivers don’t just help—they genuinely care. Every visit, every meal, every small moment, they bring warmth and respect. I am deeply thankful for the joy and comfort they’ve brought into her life. It’s something we will always cherish.",
    name: "James Smith",
    company: "ABC Software",
    image: "/assets/images/desc/testimoni/james.png",
  },
  {
    quote:
      "It’s never easy to trust someone else to take care of your loved ones—but Carelink changed that completely. From day one, I could see how much attention and kindness they gave to my father. They talked with him, listened to his stories, and made sure he felt valued every single day. Watching him grow more joyful, more at ease, and even regain his laughter—has meant the world to our family. We feel at peace knowing he’s not just cared for, but truly appreciated.",
    name: "Linda Johnson",
    company: "Family Member",
    image: "/assets/images/desc/testimoni/linda.jpg",
  },
  {
    quote:
      "What touched me most was how my grandma started sharing stories again—stories she hadn’t told in years. Carelink created such a comfortable environment that she felt safe, heard, and happy. The team’s patience and genuine interest made all the difference. It’s more than care; it’s companionship. They give their time, their hearts, and their smiles. We’re forever grateful for the moments they’ve given back to her, and to us as a family.",
    name: "Carla Gomez",
    company: "Granddaughter",
    image: "/assets/images/desc/testimoni/carla.jpg",
  },
  {
    quote:
      "As a mother, I never expected to find such warmth outside of home. At Carelink, I’m not just living—I’m connecting. The staff greet me every morning with kindness, they take time to know me, to listen, and laugh with me. They treat me with dignity and make every day feel special. It’s like having an extended family who truly cares. I feel safe, loved, and seen. This place brings light into my days, and joy into my heart.",
    name: "Martha Lane",
    company: "Resident",
    image: "/assets/images/desc/testimoni/martha.jpg",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#f3fbf4] px-10 md:px-14">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Client Reviews</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="text-primary text-6xl absolute -top-10 left-0">
              "
            </div>
            <div className="text-primary text-6xl absolute -bottom-10 right-0">
              "
            </div>
            <blockquote className="text-gray-600 text-center text-lg px-12">
              {testimonial.quote}
            </blockquote>
          </div>

          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">
                  {testimonial.company}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? "bg-green-800 scale-110"
                      : "bg-green-800/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

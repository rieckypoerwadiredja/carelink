import React from "react";
const teamMembers = [
  {
    name: "Olivia Hart",
    image: "/assets/images/desc/caremate/olivia.jpg",
    title:
      "Geriatric Nurse in Training – Nursing Student, Universitas Indonesia",
    description:
      "Olivia brings over a decade of experience in senior care, but what truly sets her apart is her ability to make people feel at ease instantly. With gentle hands and a kind smile, she reminds us daily that compassion is the most powerful medicine.",
  },
  {
    name: "Marcus Lee",
    image: "/assets/images/desc/caremate/markus.jpg",
    title: "Creative Therapist – Psychology Student, Binus University",
    description:
      "Marcus leads art and music therapy sessions, helping seniors express emotions and reconnect with their past. “Sometimes a song or a paintbrush says what words cannot,” he shares with a warm laugh.",
  },
  {
    name: "Alisha Gomez",
    image: "/assets/images/desc/caremate/alisha.jpg",
    title: "Nutrition Assistant – Nutrition & Culinary Student, IPB University",
    description:
      "Alisha makes every mealtime a celebration. With a background in senior nutrition and a heart full of flavor, she blends health with joy—serving meals that not only nourish, but spark delight.",
  },
  {
    name: "Ethan Cole",
    image: "/assets/images/desc/caremate/ethan.jpg",
    title:
      "Personal Care Assistant – Communication Student, Universitas Padjadjaran",
    description:
      "With his calm demeanor and a notebook always in hand, Ethan is known for sitting by a resident’s side and simply… listening. “Everyone wants to be heard,” he says, “and their stories deserve to be remembered.”",
  },
  {
    name: "Priya Nair",
    image: "/assets/images/desc/caremate/priya.jpg",
    title:
      "Community Engagement – Social Work Student, Universitas Gadjah Mada",
    description:
      "Priya’s passion lies in building bridges—between residents and their families, and between the present and their fondest memories. Her programs help loved ones stay connected, no matter the distance.",
  },
  {
    name: "Daniel Yu",
    image: "/assets/images/desc/caremate/daniel.jpg",
    title:
      "Physical Wellness Coordinator – Physiotherapy Student, Universitas Udayana",
    description:
      "Daniel greets each morning with cheerful stretches and gentle movement sessions. With a degree in physiotherapy and a heart full of energy, he helps residents feel strong, supported, and alive.",
  },
  {
    name: "Mei Lin Wong",
    image: "/assets/images/desc/caremate/mei.jpg",
    title: "Mindfulness Coach – Psychology Student, Universitas Airlangga",
    description:
      "Mei Lin brings serenity to our space with guided meditation, breathing exercises, and thoughtful conversations. “Peace,” she says, “is the best gift we can offer one another.”",
  },
  {
    name: "Grace Thompson",
    image: "/assets/images/desc/caremate/grace.jpg",
    title:
      "Resident Companion – English Literature Student, Universitas Atma Jaya",
    description:
      "Grace doesn’t have a medical degree—but what she has is just as valuable: presence. Whether it's playing cards, sharing tea, or simply sitting quietly together, Grace makes every moment feel warm and full of care.",
  },
];

export default function Caremate() {
  return (
    <section className="py-16 px-10 md:px-14">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">
          Meet Our Care Givers
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed mb-16">
          Every one of our CareMates is handpicked not just for their skills,
          but for their heart. They come from diverse backgrounds, but share one
          common thread: an unwavering passion to care with love.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="bg-gray-100 aspect-square mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top aspect-square rounded-sm shadow-sm"
                />
              </div>
              <div className="flex flex-col grow">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{member.title}</p>
                <p className="text-sm text-gray-600 grow">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

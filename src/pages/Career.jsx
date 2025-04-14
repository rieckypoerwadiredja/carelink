import React from "react";
import { Link } from "react-router";
import Hero from "../components/fragments/hero/Hero";

export default function Career() {
  const caremates = [
    {
      title: "Care Mate (Regular)",
      description:
        "Entry level. You’ll assist with daily activities such as keeping seniors company, chatting, light walks, and medication reminders.",
    },
    {
      title: "Care Mate Plus",
      description:
        "Completed basic training and worked at least 40 hours. Supports light physical tasks like helping with meals or light household duties.",
    },
    {
      title: "Care Mate Pro",
      description:
        "Has caregiving certification or advanced training. Works independently with clients who may need more specific care (e.g. disabilities or chronic illness).",
    },
  ];

  const otherRules = [
    {
      title: "Programmer & UX/UI Designer",
      description:
        "Support our digital platform development to improve user experience for families and caregivers. Help us build meaningful and accessible features with care.",
    },
    {
      title: "Admin & Customer Support",
      description:
        "Gain experience in service communication and scheduling support.",
    },
    {
      title: "Content & Campaign Officer",
      description:
        "Create social media content, document stories, and support our awareness campaigns.",
    },
  ];

  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero title="Career" img="/assets/images/desc/caremate/caremates2.jpg" />

      {/* Resident Care Section */}
      <section className="py-16 px-10">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Care Mate Program</h2>
              <div>
                <p className="text-gray-600 mb-4">
                  Care Mates are companions who provide non-medical support and
                  heartfelt care to our elderly clients. This program is perfect
                  for students or young adults looking for a meaningful
                  part-time job that’s flexible and impactful.
                </p>
                <p className="text-gray-600">
                  We’re looking for individuals who: Are
                  <b> empathetic, patient, and genuinely love helping others</b>
                  . Want to learn about healthcare, psychology, or social work
                  through real-world experience. Need a job that fits around
                  their busy class schedule.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">
                There are 3 levels of Care Mates:
              </h3>
              <ul className="space-y-2">
                {caremates.map((role, index) => (
                  <li key={index}>
                    <p className="font-semibold text-gray-800">{role.title}</p>
                    <p className="text-gray-600">{role.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Elderly Nutrition Section */}
      <section className="py-16 px-10 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">
                Carelink Support Roles
              </h2>
              <p className="text-gray-600 mb-4">
                Not a medical or health major? No worries! We also have support
                roles for you to get involved and make a difference:
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Service Offerings</h3>
              <ul className="space-y-2">
                {otherRules.map((role, index) => (
                  <li key={index}>
                    <p className="font-semibold text-gray-800">{role.title}</p>
                    <p className="text-gray-600">{role.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Services Section */}
      <section className="py-16 px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How to Apply</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/assets/icon/step1_apply.png"
                  alt="Step 1"
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">
                1. Fill Out the Application Form
              </h3>
              <p className="text-gray-600">
                Head over to our{" "}
                <a href="#" className="text-blue-500 underline">
                  Application Form
                </a>{" "}
                and tell us a bit about yourself.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/assets/icon/step2_apply.png"
                  alt="Step 2"
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">
                2. Document Screening & Online Interview
              </h3>
              <p className="text-gray-600">
                Our team will review your application and invite you for a short
                interview.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/assets/icon/step3_apply.png"
                  alt="Step 3"
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">
                3. Basic Training (Required)
              </h3>
              <p className="text-gray-600">
                All accepted applicants will attend an onboarding session to
                prepare you for the role.
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/assets/icon/step4_apply.png"
                  alt="Step 4"
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">
                4. Placement & First Week Buddy System
              </h3>
              <p className="text-gray-600">
                You’ll be placed with a client and supported by a senior Care
                Mate during your first week.
              </p>
            </div>

            {/* Step 5 */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/assets/icon/step5_apply.png"
                  alt="Step 5"
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">
                5. Evaluation & Progression
              </h3>
              <p className="text-gray-600">
                After your first few assignments, you’ll get feedback and have
                the chance to move up to Care Mate Plus or Pro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Assistance Section */}
      <section className="py-16 px-8 text-center sm:text-left bg-linear-to-br from-[#D44043] to-[#955455] w-[85%] mb-10 mx-auto">
        <div className="container mx-auto max-w-4xl flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white my-6 text-center">
            Start Your Journey With Us
          </h2>

          <Link
            to=""
            target="_blank"
            className="bg-white inline-block mx-auto font-semibold cursor-pointer text-black px-6 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Drop Your CV Here
          </Link>
        </div>
      </section>
    </main>
  );
}

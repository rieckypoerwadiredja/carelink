import React from "react";
import { Link } from "react-router";
import { Check } from "lucide-react";
import BigHero from "../components/fragments/hero/BigHero";
import Testimonial from "../components/fragments/Testimonial";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <BigHero
        title="Comfortable Like Being with Family"
        desc="Providing compassionate and professional care for your loved ones."
        img="/assets/images/hero/home.png"
      />

      {/* About Us Section */}
      <section className="py-20 px-10 md:px-14">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 flex justify-center items-center aspect-square md:aspect-auto md:h-[400px] max-h-[450px] relative">
              <div className="absolute -bottom-4 -right-4 lg:right-25 -z-10 h-full aspect-[4/5] border-4 border-primary max-h-[450px]"></div>
              <img
                src="/assets/images/desc/caregiver-grandpa.webp"
                alt="Caregiver with elderly person"
                fill
                className="object-cover aspect-[4/5] h-full max-h-[450px]"
              />
            </div>
            <div className="w-full !h-full md:w-1/2 mt-12 sm:mt-0">
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                At Carelink, we believe every senior deserves to be treated with
                love, dignity, and care that feels like home. Our devoted team
                ensures every moment is filled with comfort, trust, and
                heartfelt service.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Thoughtful and individualized support",
                  "Safe, cozy, and peaceful living spaces",
                  "Trained and compassionate care experts",
                  "Focused on happiness and emotional wellness",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="bg-[#D44043] !w-fit text-white px-6 py-3 rounded hover:bg-care-green-dark transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="sm:pt-8 pb-20 px-10 md:px-14">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 shadow-sm border rounded-sm">
              <div className="bg-gradient-to-br rounded-xl from-[#D44043] to-[#955455] w-12 h-12 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Residential Companionship
              </h3>
              <p className="text-gray-600">
                We provide a warm and homelike atmosphere where seniors are
                supported in their daily lives with gentle companionship and
                heartfelt care.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 shadow-sm border rounded-sm">
              <div className="bg-gradient-to-br rounded-xl from-[#D44043] to-[#955455] w-12 h-12 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#fdfdfd]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Healthy Home-Cooked Meals
              </h3>
              <p className="text-gray-600">
                Delicious and balanced meals are served fresh every day—prepared
                with love to support health and bring comfort through every
                bite.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 shadow-sm border rounded-sm">
              <div className="bg-gradient-to-br rounded-xl from-[#D44043] to-[#955455] w-12 h-12 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#fdfdfd]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Daily Activities & Mental Wellness
              </h3>
              <p className="text-gray-600">
                Each day is filled with joyful, engaging routines—designed to
                uplift spirits, encourage movement, and keep the mind happily
                active.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 shadow-sm border rounded-sm">
              <div className="bg-gradient-to-br rounded-xl from-[#D44043] to-[#955455]  w-12 h-12 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#fdfdfd]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Emotional Support & Listening Ear
              </h3>
              <p className="text-gray-600">
                We take time to connect and truly listen. Our caregivers offer
                not only help, but genuine emotional presence and kindness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonial />

      {/* CTA Section */}
      <section className="py-20 px-10 md:px-14">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">
                The Best Eldery Care Center For You
              </h2>
              <p className="text-gray-600 mb-8">
                Discover peace of mind with Carelink. With heartfelt service and
                personalized care, we help your loved ones feel valued,
                respected, and truly at home.
              </p>
              <Link
                href="/about"
                className="bg-[#c13e3e] text-white px-6 py-3 rounded hover:bg-[#a83535] transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img
                src="/assets/images/desc/caregiver-grandma.png"
                alt="Elderly care"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

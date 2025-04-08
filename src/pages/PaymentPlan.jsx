import React, { useState } from "react";
import CardPlan from "../components/elements/card/CardPlan";
import Hero from "../components/fragments/hero/hero";
import { Link } from "react-router";

function PaymentPlan() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const plans = {
    monthly: [
      {
        name: "Basic",
        price: "1.400.000",
        oldPrice: null,
        benefits: [
          { name: "Access to CareMate Professional", status: "x" },
          { name: "Access to CareMate Plus", status: "x" },
          {
            name: "Support for basic daily tasks with a set routine",
            status: "check",
          },

          {
            name: "Up to 56 service hours/month (7 visits, 8 hrs each)",
            status: "check",
          },
          { name: "Family connection updates and alerts", status: "check" },

          { name: "Exclusive access to HaloDoc", status: "x" },
          { name: "Support for outdoor activities", status: "x" },
        ],
      },
      {
        name: "Premium",
        price: "4.000.000",
        oldPrice: "5.600.000",
        benefits: [
          { name: "Access to CareMate Professional", status: "check" },
          {
            name: "Personalized daily schedules with more flexibility",
            status: "check",
          },
          {
            name: "Priority scheduling with experienced companions",
            status: "check",
          },
          {
            name: "Up to 1.568 service hours/month (14 visits/week)",
            status: "check",
          },

          { name: "Family connection updates and alerts", status: "check" },
          { name: "Exclusive access to HaloDoc", status: "check" },
          {
            name: "Assistance with outdoor activities (morning walks, shopping, recreation)",
            status: "check",
          },
          { name: "24/7 Chat Support with CareMate", status: "check" },
        ],
      },
      {
        name: "Standard",
        price: "2.000.000",
        oldPrice: "2.800.000",
        benefits: [
          { name: "Access to CareMate Professional", status: "x" },
          { name: "Access to CareMate Plus", status: "check" },
          {
            name: "Personalized daily schedules with more flexibility",
            status: "check",
          },
          {
            name: "Priority scheduling with experienced companions",
            status: "check",
          },
          {
            name: "Up to 784 service hours/month (14 visits, 14 hrs total)",
            status: "check",
          },
          { name: "Family connection updates and alerts", status: "check" },
        ],
      },
    ],

    yearly: [
      {
        name: "Basic",
        price: "12.500.000",
        oldPrice: "13.440.000",
        benefits: [
          { name: "Access to CareMate Professional", status: "x" },
          { name: "Access to CareMate Plus", status: "x" },
          {
            name: "Support for basic daily tasks with a set routine",
            status: "check",
          },

          {
            name: "Up to 56 service hours/month (7 visits, 8 hrs each)",
            status: "check",
          },
          { name: "Family connection updates and alerts", status: "check" },

          { name: "Exclusive access to HaloDoc", status: "x" },
          { name: "Support for outdoor activities", status: "x" },
        ],
      },
      {
        name: "Premium",
        price: "38.400.000", // 4jt x 12 - 20% discount
        oldPrice: "48.000.000",
        benefits: [
          { name: "Access to CareMate Professional", status: "check" },
          {
            name: "Personalized daily schedules with more flexibility",
            status: "check",
          },
          {
            name: "Priority scheduling with experienced companions",
            status: "check",
          },
          {
            name: "Up to 1.568 service hours/month (14 visits/week)",
            status: "check",
          },

          { name: "Family connection updates and alerts", status: "check" },
          { name: "Exclusive access to HaloDoc", status: "check" },
          {
            name: "Assistance with outdoor activities (morning walks, shopping, recreation)",
            status: "check",
          },
          { name: "24/7 Chat Support with CareMate", status: "check" },
        ],
      },
      {
        name: "Standard",
        price: "19.200.000", // 2jt x 12 - 20% discount
        oldPrice: "24.000.000",
        benefits: [
          { name: "Access to CareMate Professional", status: "x" },
          { name: "Access to CareMate Plus", status: "check" },
          {
            name: "Personalized daily schedules with more flexibility",
            status: "check",
          },
          {
            name: "Priority scheduling with experienced companions",
            status: "check",
          },
          {
            name: "Up to 784 service hours/month (14 visits, 14 hrs total)",
            status: "check",
          },
          { name: "Family connection updates and alerts", status: "check" },
        ],
      },
    ],
  };

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          title="Cost and Payment"
          img="/assets/images/hero/payment_plan.avif"
        />

        {/* Payment Plans Section */}
        <section className="py-16 px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Payment Plans
            </h2>

            {/* Toggle */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex rounded-md overflow-hidden border border-[#D44043]">
                <button
                  onClick={() => setSelectedPlan("monthly")}
                  className={`${
                    selectedPlan === "monthly" && "bg-[#D44043] !text-[#fdfdfd]"
                  }  text-black px-6 py-2 cursor-pointer`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setSelectedPlan("yearly")}
                  className={`${
                    selectedPlan === "yearly" && "bg-[#D44043] !text-[#fdfdfd]"
                  } text-black px-6 py-2 cursor-pointer`}
                >
                  Yearly
                </button>
                <div className="bg-yellow-400 px-4 py-2 flex-none flex items-center text-sm font-medium">
                  Save 20%
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {selectedPlan === "monthly" && (
                <>
                  {plans.monthly.map((plan) => (
                    <CardPlan plan={plan} />
                  ))}
                </>
              )}
              {selectedPlan === "yearly" && (
                <>
                  {plans.yearly.map((plan) => (
                    <CardPlan plan={plan} />
                  ))}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Insurance Section */}
        <section className="pb-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">
              Insurance and Medicare/Medicaid
            </h2>
            <p className="text-gray-600 text-center leading-relaxed">
              At Carelink, we believe every senior deserves access to loving
              care—regardless of financial circumstances. We work hand in hand
              with insurance providers and government programs to ensure our
              members receive the support they need without financial burden.
              Let us handle the paperwork, so you can focus on what truly
              matters—creating joyful, stress-free moments every day.
            </p>
          </div>
        </section>

        {/* Financial Assistance Section */}
        <section className="py-16 px-8 text-center sm:text-left bg-linear-to-br from-[#D44043] to-[#955455] w-[85%] mb-10 mx-auto">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Financial Assistance Resources
            </h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              Financial challenges shouldn’t stand in the way of compassionate
              care. Our dedicated support team will walk with you through every
              step, helping you find flexible funding options, discounts, or
              community aid. Whether you're looking for short-term help or
              long-term plans, we’re just a message away. Let’s find the care
              you deserve—together.
            </p>
            <Link
              to="https://www.whatsapp.com/"
              target="_blank"
              className="bg-white font-semibold cursor-pointer text-black px-6 py-3 rounded hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default PaymentPlan;

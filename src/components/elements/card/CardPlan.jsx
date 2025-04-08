import React from "react";
function CardPlan({ plan }) {
  return (
    <div
      key={plan.name}
      className={`border-2 border-[#D44043] rounded-lg overflow-hidden flex flex-col h-full ${
        plan.name === "Premium" ? "bg-[#D44043] text-[#fdfdfd]" : ""
      }`}
    >
      <div className="p-6 flex-grow">
        <div className="uppercase text-sm font-semibold mb-6 bg-gray-300/20 p-3 px-5 w-fit rounded-md">
          {plan.name}
        </div>
        <div className="flex flex-col">
          {plan.oldPrice ? (
            <>
              <span className="text-gray-600 line-through mr-2">
                Rp.{plan.oldPrice}
              </span>
              <span className="text-3xl font-bold mb-2">Rp.{plan.price}</span>
            </>
          ) : (
            <span className="text-3xl font-bold mb-2">Rp.{plan.price}</span>
          )}
        </div>

        <div
          className={`text-sm ${
            plan.name === "Premium" ? "!text-[#fdfdfd]" : "text-gray-600"
          } mb-6`}
        >
          Per member, per Month
        </div>

        <ul className="space-y-3">
          {plan.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              {benefit.status === "check" && (
                <span className="text-green-500">✔</span>
              )}
              {benefit.status === "x" && (
                <span className="text-red-500">✖</span>
              )}
              <span className="ml-2">{benefit.name}</span>
              {benefit.status === "comingSoon" && (
                <span className="text-yellow-500">Soon</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Tombol & Info tambahan */}
      <div className="p-6 pt-0">
        <button
          className={`w-full py-3 rounded font-semibold h-12 ${
            plan.name === "Premium"
              ? "bg-yellow-400 text-black"
              : "bg-[#D44043] text-white"
          }`}
        >
          Start free 14-day Trial
        </button>
        <p className="text-xs text-center mt-2">No credit card required</p>
      </div>
    </div>
  );
}

export default CardPlan;

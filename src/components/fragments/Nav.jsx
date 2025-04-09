import React from "react";
import { Link } from "react-router";

function Nav() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-x-2">
          <div className="text-primary">
            <img
              className="h-20"
              src="/assets/images/logo/logo-website.png"
              alt="logo"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium">
            Home
          </Link>
          <Link to="/aboutus" className="text-sm font-medium">
            About Us
          </Link>

          <Link to="/payment-plan" className="text-sm font-medium text-primary">
            Cost & Payment
          </Link>
        </nav>
        <Link
          to="https://www.figma.com/proto/JvkQ1Vdd2TuzrLyFl590dz/Hydro-Hub?node-id=14-6743&t=toweK7EO8N52MplK-1&starting-point-node-id=14%3A6743"
          className="bg-[#D44043] text-white px-4 py-2 rounded-md shadow hover:bg-care-green-dark transition-colors"
          target="_blank"
        >
          Download
        </Link>
      </div>
    </header>
  );
}

export default Nav;

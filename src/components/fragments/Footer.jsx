import React from "react";
import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="text-primary">
                <img
                  className="h-12 aspect-square"
                  src="/assets/images/logo/logo.png"
                  alt="logo"
                />
              </div>
              <span className="text-3xl font-semibold text-[#D44043]">
                Carelink
              </span>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              Carelink offers senior care with compassion, love, and trust. We
              make every day meaningful, safe, and filled with joy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-primary"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-primary"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          Copyright 2023 United Software Solutions. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;

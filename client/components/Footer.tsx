import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-foreground font-bold text-sm">
                E
              </div>
              <span className="font-bold text-lg">Elite Store</span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium quality products at exceptional prices. Your trusted
              online shopping destination.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to get special offers and updates directly to your
              inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-foreground text-sm outline-none"
              />
              <button className="bg-secondary text-foreground px-4 py-2 rounded-r-lg font-semibold hover:bg-yellow-500 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2024 Elite Store. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="hidden md:block">•</span>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <span className="hidden md:block">•</span>
          <a href="#" className="hover:text-white transition-colors">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}

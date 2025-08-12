import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-400 to-orange-500 text-white pt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="rest-logo.png" alt="Logo" className="w-10 h-10" />
          <h2 className="text-2xl font-bold italic">Food</h2>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-bold mb-2">Menu</h3>
          <ul className="space-y-1 text-sm">
            <li>Kitchen</li>
            <li>Taste</li>
            <li>Recipes</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Meet Chefs */}
        <div>
          <h3 className="font-bold mb-2">Meet Chefs</h3>
          <ul className="space-y-1 text-sm">
            <li>Mostara seol</li>
            <li>Garvik los</li>
            <li>Subri morr</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-2">Social Media</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </li>
          </ul>
        </div>

  
          {/* Contact */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl">
              <div class="flex items-center gap-2 center">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border border-gray-300 rounded-full px-3 py-2"
              />
              <button className="bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-full">
                Send
              </button>
              </div>
            </form>
          </div>
      </div>

      {/* Bottom line */}
      <div className="bg-orange-600 text-center text-sm py-3">
        Designed by Hamzah Nurudeen @HamdyCode
      </div>
    </footer>
  );
};

export default Footer;

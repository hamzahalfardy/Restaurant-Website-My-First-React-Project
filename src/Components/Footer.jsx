// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-400 to-orange-500 text-white pt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 text-center md:text-left">
        
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src="rest-logo.png" alt="Logo" className="w-12 h-12 mb-2" />
          <h2 className="text-3xl font-bold italic font-roboto mono">Food</h2>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2 text-xl">Menu</h3>
          <ul className="space-y-1 text-sm">
            <li>Kitchen</li>
            <li>Taste</li>
            <li>Recipes</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Meet Chefs */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2 text-xl">Meet Chefs</h3>
          <ul className="space-y-1 text-sm">
            <li>Mostara seol</li>
            <li>Garvik los</li>
            <li>Subri morr</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2 text-xl">Social Media</h3>
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
<div>
  <h3 className="font-bold mb-2">Contact Us</h3>
  <form className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
    <input
      type="email"
      placeholder="example@gmail.com"
      className="flex-1 px-4 py-2 rounded-full text-black w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
    <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 mt-0 rounded-full whitespace-nowrap font-extrabold">
      Send
    </button>
  </form>
</div>
      </div>

      {/* Bottom line */}
      <div className="bg-orange-600 text-center text-sm py-3 font-bold">
        Designed by Hamzah Al-fardy @HamdyCode
      </div>
    </footer>
  );
};

export default Footer;

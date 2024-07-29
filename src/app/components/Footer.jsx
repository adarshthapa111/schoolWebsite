// components/Footer.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t  border-gray-400 max-w-6xl mx-auto">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="flex flex-col space-y-2 mb-4 md:mb-0">
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-semibold font-garamond text-xl">About us</Link>
            <Link href="/courses" className="text-gray-700 hover:text-gray-900">Courses</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
            <Link href="/teachers" className="text-gray-700 hover:text-gray-900">Teachers</Link>
          </div>
          
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <Image src="/images/school_logo.png" alt="Techkids Logo" width={100} height={100} />
            <div className="flex space-x-8 mt-4">
              <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn className="text-xl" />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebookF className="text-xl" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                <FaInstagram className="text-xl" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" aria-label="Twitter">
                <FaTwitter className="text-xl" />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <Link href="/privacy-policy" className="text-gray-700 text-xl hover:text-gray-900 font-semibold font-garamond">Private Police</Link>
            <Link href="/terms-conditions" className="text-gray-700 hover:text-gray-900">Terms</Link>
            <Link href="/sitemaps" className="text-gray-700 hover:text-gray-900">Sitemaps</Link>
            <Link href="/teachers" className="text-gray-700 hover:text-gray-900">Teachers</Link>
          </div>
        </div>
        <div className='h-16 bg-gray-800 w-0.5 mx-auto'></div>
        <div className="text-center pt-8">
          <h2 className="text-3xl font-semibold mb-2 font-josefin">How can we help?</h2>
          <p className="text-xl italic font-garamond">Let's Talk.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



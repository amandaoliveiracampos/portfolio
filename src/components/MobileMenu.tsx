import Image from 'next/image';

import React, { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="flex h-24 items-center text-white">
        <button className="flex items-center">
          <div className="flex items-center gap-4 rounded-full object-cover pl-4 text-lg transition duration-300 ease-in-out hover:scale-110">
            <Image
              className="g rounded-full object-cover"
              src="/images/amanda.jpeg"
              width={60}
              height={60}
              alt="amanda"
            />
            Amanda
          </div>
        </button>

        <div className="flex translate-x-40 gap-3">
          <button>
            <GrLanguage />
          </button>

          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <nav className="rounded-lg bg-white p-8 shadow-lg">
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-lg text-gray-700 hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg text-gray-700 hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-lg text-gray-700 hover:underline"
                >
                  Projects
                </a>
              </li>
              <li>
                <a className="text-lg text-gray-700 hover:underline">
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#feedbacks"
                  className="text-lg text-gray-700 hover:underline"
                >
                  Feedbacks
                </a>
              </li>
              <li>
                <a className="text-lg text-gray-700 hover:underline">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

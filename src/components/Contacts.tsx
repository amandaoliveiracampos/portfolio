'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquarePhoneFlip } from 'react-icons/fa6';
import { IoShareSocialSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
export default function Contacts() {
  return (
    <div className="justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:mb-28 lg:text-5xl lg:leading-normal">
          <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
            {`CONTACTS`}
          </span>
        </h1>
        <div className="h-[250px] bg-zinc-900 opacity-50">
          <div className="text-[#ADB7BE] sm:text-lg lg:text-2xl">
            <div className="flex justify-center gap-72">
              <div className="delay-150hover:-translate-y-1 mt-24 flex items-center gap-2 transition duration-300 ease-in-out hover:scale-110">
                <MdEmail />
                <Link href="/contact">E-mail</Link>
              </div>
              <div className="delay-150hover:-translate-y-1 mt-24 flex items-center gap-2 transition duration-300 ease-in-out hover:scale-110">
                <FaSquarePhoneFlip />
                <Link href="/contact">Telephone number</Link>
              </div>
              <div className="delay-150hover:-translate-y-1 mt-24 flex items-center gap-2 transition duration-300 ease-in-out hover:scale-110">
                <IoShareSocialSharp />
                <Link href="/contact">Social Media</Link>
              </div>
            </div>
            <section className="mb-24 mt-6 flex justify-between">
              <div className="pl-20">
                <Link
                  className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
                  href="/contact"
                >
                  amandaolivcampos@gmail.com
                </Link>
              </div>
              <div className="lg:-translate-x-56">
                <Link
                  className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
                  href="/contact"
                >
                  31992112071
                </Link>
              </div>
              <div>
                <Link
                  className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
                  href="/contact"
                >
                  {' '}
                  <div className="flex -translate-x-64 gap-4">
                    <FaLinkedin />
                    <FaGithub />
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="flex flex-col bg-black">
      <section className="mt-48 flex items-center justify-center">
        <img
          src="/images/ca.jpeg"
          alt="Background"
          className="absolute h-auto w-full scale-100 opacity-15"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-7 text-4xl font-extrabold text-white sm:text-5xl lg:text-8xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              {`HEY, I'M AMANDA`}
            </span>
          </h1>
          <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent"></span>
          <p className="mb-6 text-[#ADB7BE] sm:text-lg lg:px-60 lg:text-2xl">
            {`I'm a software development student.`}
          </p>
          <p className="-mt-5 text-[#ADB7BE] sm:text-lg lg:-mt-4 lg:px-60 lg:text-2xl">
            {`I love learning and exploring new technologies.`}
          </p>
          <div className="mt-8 px-12 lg:space-x-7">
            <Link
              href="/#contact"
              className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit"
            >
              <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                Hire Me
              </span>
            </Link>
            <Link
              href="/"
              className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit lg:mb-20"
            >
              <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

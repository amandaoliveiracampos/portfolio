'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LuPlus } from 'react-icons/lu';

export default function Experience() {
  return (
    <div className="relative bg-black px-12 py-4">
      <section className="relative flex min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="mb-12 mt-28 text-4xl font-extrabold text-white sm:text-5xl lg:text-5xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              {`PROFESSIONAL EXPERIENCE`}
            </span>
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center justify-center">
              <div className="h-20 w-[650px] rounded-md bg-pink-400 bg-opacity-35 p-6 text-start">
                Front-End Developer
                <p>Ritualiza Cosméticos Personalizados · Tempo integral</p>
                <Link href="/#contact" className="">
                  <LuPlus />
                </Link>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="h-20 w-[650px] rounded-md bg-pink-400 bg-opacity-35 p-6 text-start">
                HR Analyst
                <p>Transportadora Expresso M&R · Tempo integral</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="h-20 w-[650px] rounded-md bg-pink-400 bg-opacity-35 p-6 text-start">
                Analista contábil
                <p>Hospital Vera Cruz · Tempo integral</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

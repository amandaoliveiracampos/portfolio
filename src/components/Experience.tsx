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
          <h1 className="mb-16 mt-28 text-4xl font-extrabold text-white sm:text-5xl lg:text-5xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              {`PROFESSIONAL EXPERIENCE`}
            </span>
          </h1>
          <div className="mt-32 flex flex-col gap-5">
            <button className="flex w-full items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500">
              <div className="delay-150hover:-translate-y-1 relative flex h-20 w-[650px] justify-between rounded-md p-6 text-start transition duration-300 ease-in-out hover:scale-110">
                Front-End Developer @Ritualiza Cosméticos Personalizados
                <Link href="/#contact">
                  <LuPlus />
                </Link>
              </div>
            </button>
            <button className="flex w-full items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500">
              <div className="delay-150hover:-translate-y-1 relative flex h-20 w-[650px] justify-between rounded-md p-6 text-start transition duration-300 ease-in-out hover:scale-110">
                HR Analyst @Transportadora Expresso M&R
                <Link href="/#contact">
                  <LuPlus />
                </Link>
              </div>
            </button>
            <button className="flex w-full items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500">
              <div className="delay-150hover:-translate-y-1 relative flex h-20 w-[650px] justify-between rounded-md p-6 text-start transition duration-300 ease-in-out hover:scale-110">
                Analista contábil @Hospital Vera Cruz
                <Link href="/#contact">
                  <LuPlus />
                </Link>
              </div>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

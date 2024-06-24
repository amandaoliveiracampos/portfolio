import { motion } from 'framer-motion';
import Link from 'next/link';
import { LuPlus } from 'react-icons/lu';

export default function Experience() {
  return (
    <div className="relative bg-black px-8 py-4 sm:px-12 lg:px-12 lg:py-4">
      <section className="relative flex min-h-screen flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="mb-12 mt-24 text-3xl font-extrabold text-white sm:text-5xl lg:mb-16 lg:mt-28 lg:text-5xl">
            {' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              PROFESSIONAL EXPERIENCE
            </span>
          </h1>
          <div className="mt-12 flex w-full flex-col gap-4 sm:mt-20 lg:mt-32 lg:flex-col lg:gap-5">
            {' '}
            <button className="flex w-full items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500">
              <div className="flex w-full justify-between rounded-md p-4 text-start transition duration-300 ease-in-out hover:scale-110 sm:p-6 lg:h-20 lg:w-[650px] lg:p-6">
                <span className="flex-1">
                  Front-End Developer @Ritualiza Cosméticos Personalizados
                </span>{' '}
                <Link href="/#contact">
                  <LuPlus />
                </Link>
              </div>
            </button>
            <button className="flex w-full items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500">
              <div className="flex w-full justify-between rounded-md p-4 text-start transition duration-300 ease-in-out hover:scale-110 sm:p-6 lg:h-20 lg:w-[650px] lg:p-6">
                <span className="flex-1">
                  HR Analyst @Transportadora Expresso M&R
                </span>{' '}
                <Link href="/#contact">
                  <LuPlus />
                </Link>
              </div>
            </button>
            <button className="flex w-full items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500">
              <div className="flex w-full justify-between rounded-md p-4 text-start transition duration-300 ease-in-out hover:scale-110 sm:p-6 lg:h-20 lg:w-[650px] lg:p-6">
                <span className="flex-1">
                  Analista contábil @Hospital Vera Cruz
                </span>{' '}
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

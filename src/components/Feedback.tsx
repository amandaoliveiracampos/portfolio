'use client';
'use client';
import { motion } from 'framer-motion';

export default function Feedback() {
  return (
    <div className="relative bg-black px-12 py-4">
      <section className="relative flex items-center justify-center lg:min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="mb-16 font-extrabold text-white sm:text-5xl lg:text-5xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              {`FEEDBACKS`}
            </span>
          </h1>
          <button className="mb-32 mt-32 flex gap-8">
            <img
              className="delay-150hover:-translate-y-1 relative h-96 px-6 transition duration-300 ease-in-out hover:scale-110"
              src="/images/erick.jpeg"
              alt=""
            />
            <img
              className="delay-150hover:-translate-y-1 relative h-96 px-6 transition duration-300 ease-in-out hover:scale-110"
              src="/images/erick.jpeg"
              alt=""
            />
            <img
              className="delay-150hover:-translate-y-1 relative h-96 px-6 transition duration-300 ease-in-out hover:scale-110"
              src="/images/erick.jpeg"
              alt=""
            />
          </button>
        </motion.div>
      </section>
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
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
              {`ABOUT ME`}
            </span>
          </h1>

          <section className="justify-center">
            <div className="text-[#ADB7BE] sm:text-lg">
              <div className="font-extrabold text-white lg:leading-normal"></div>
              <p className="flex justify-center text-justify text-[#ADB7BE] sm:text-lg lg:mb-28 lg:px-80">
                {`I am a Web development student focused on Frontend, building and managing the Front-end of websites and Web applications that lead to the success of the overall product. Check out some of my work in the Projects section. I am open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don't hesitate to contact me.`}
              </p>
            </div>
            <div className="text-[#ADB7BE]">
              <div className="mb-12 mt-44 text-4xl font-extrabold text-white sm:text-5xl lg:text-5xl lg:leading-normal">
                <h1 className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent lg:mt-28">
                  MY SKILLS
                </h1>
              </div>
              <div className="flex flex-col gap-4 px-12 lg:flex-row lg:items-center lg:justify-center">
                <Link
                  href="/"
                  className="mt-3 inline-block rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit"
                >
                  <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                    Responsive Design
                  </span>
                </Link>
                <Link
                  href="/"
                  className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit"
                >
                  <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                    JavaScript
                  </span>
                </Link>
                <Link
                  href="/"
                  className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit"
                >
                  <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                    TypeScript
                  </span>
                </Link>
                <Link
                  href="/"
                  className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit"
                >
                  <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                    Tailwind
                  </span>
                </Link>
                <Link
                  href="/"
                  className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit"
                >
                  <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                    HTML
                  </span>
                </Link>
                <Link
                  href="/"
                  className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit"
                >
                  <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                    CSS
                  </span>
                </Link>
                <Link
                  href="/"
                  className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit"
                >
                  <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                    Git
                  </span>
                </Link>
                <Link
                  href="/#contact"
                  className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit"
                >
                  <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                    GitHub
                  </span>
                </Link>
                <Link
                  href="/"
                  className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-200 sm:w-fit"
                >
                  <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                    React
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

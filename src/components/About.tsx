'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DiResponsive } from 'react-icons/di';
import { FaGitSquare, FaGithubSquare, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
} from 'react-icons/si';
import { TfiHtml5 } from 'react-icons/tfi';

const About = () => {
  return (
    <div className="bg-black lg:relative lg:px-12 lg:py-4">
      <section className="flex min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="mb-10 text-center text-3xl font-extrabold text-white lg:mb-12 lg:mt-28 lg:text-5xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              {`ABOUT ME`}
            </span>
          </h1>
          <p className="px-9 text-justify text-sm text-[#ADB7BE] lg:mb-28 lg:flex lg:px-80 lg:text-lg">
            {`I am a Web development student focused on Frontend, building and managing the Front-end of websites and Web applications that lead to the success of the overall product. Check out some of my work in the Projects section. I am open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don't hesitate to contact me.`}
          </p>

          <section>
            <div className="text-3xl font-extrabold text-white lg:mb-12 lg:mt-44 lg:text-5xl lg:leading-normal">
              <h1 className="mb-20 mt-24 bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent lg:mb-28">
                MY SKILLS
              </h1>
              <div className="lg:flex lg:items-center lg:justify-center lg:gap-9">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-6 text-3xl lg:flex lg:items-center lg:justify-center lg:gap-9 lg:text-4xl"
                >
                  <SiJavascript className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
                  <SiTypescript className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
                  <RiTailwindCssFill className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
                  <TfiHtml5 className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
                  <SiPostgresql className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
                </Link>
                <Link
                  href="/"
                  className="mt-9 flex items-center justify-center gap-6 text-3xl lg:mt-0 lg:flex lg:items-center lg:justify-center lg:gap-9 lg:text-4xl"
                >
                  <IoLogoCss3 className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
                  <FaGitSquare className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
                  <FaGithubSquare className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
                  <FaReact className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
                  <DiResponsive className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
                  <SiMongodb className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-150" />
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

'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    image: '/images/alura.png',
    title: 'Alura+ ',
    description: 'A streaming platform.',
    link: 'https://alura-plus-rho-two.vercel.app/',
  },
  {
    image: '/images/pro3.png',
    title: 'Spotify Screen',
    description: 'A clone of my Spotify screen.',
    link: 'https://spotify-clone-nine-phi.vercel.app/',
  },
  {
    image: '/images/pro2.png',
    title: 'Portfolio',
    description: 'Portfolio Amanda.',
    link: 'https://my-portifolio-lake.vercel.app/',
  },
  {
    image: '/images/pro4.png',
    title: 'DevLinks',
    description:
      'DevLinks is a link aggregator to use as an online business card.',
    link: 'https://projeto-rocketseat-one.vercel.app/',
  },
  {
    image: '/images/pro5.png',
    title: 'ChatBot',
    description: 'Chat screen.',
    link: 'https://chatbot-omega-silk.vercel.app/',
  },
];

export default function MobileProjects() {
  return (
    <div className="lg:relative lg:px-12 lg:py-4">
      <section className="relative mb-36 mt-48 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="mb-20 mt-8 text-4xl font-extrabold text-white sm:text-5xl lg:text-5xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              {`PROJECTS`}
            </span>
          </h1>
        </motion.div>

        <div className="flex flex-col p-5">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 h-60 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="bg-black bg-opacity-70 font-extrabold text-white">
                <div className="flex h-full items-center justify-center p-24 text-lg font-extrabold text-white">
                  {project.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

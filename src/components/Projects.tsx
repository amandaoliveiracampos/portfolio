'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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

export default function Projects() {
  return (
    <div className="relative flex flex-col bg-black">
      <section className="relative mb-36 mt-48 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="mt-12 text-4xl font-extrabold text-white sm:text-5xl lg:text-5xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              {`PROJECTS`}
            </span>
          </h1>
          <p className="mt-12 text-[#ADB7BE] sm:text-lg lg:text-2xl">
            {`Here you will find some of the personal projects that I created.`}
          </p>
        </motion.div>
      </section>
      <section className="px-36">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Link href={project.link} target="_blank" key={index}>
              <div className="delay-150hover:-translate-y-1 relative px-6 transition duration-300 ease-in-out hover:scale-110">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="rounded-lg bg-[#121212] shadow-lg hover:bg-opacity-80"
                >
                  <img src={project.image} alt={`Project ${index + 1}`} />
                  <h2 className="mb-3 ml-6 mt-6 font-bold">{project.title}</h2>
                  <p className="ml-6 mt-6 bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text pb-6 text-transparent">
                    {project.description}
                  </p>
                </motion.div>
              </div>
            </Link>
          ))}
        </Slider>
      </section>
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function Projects() {
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

  const projectImages = [
    '/images/alura.png',
    '/images/alura.png',
    '/images/alura.png',
    '/images/alura.png',
    '/images/alura.png',
    '/images/alura.png',
    '/images/alura.png',
  ];

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
        <Link rel="stylesheet" href="/">
          <Slider {...settings}>
            {projectImages.map((image, index) => (
              <div
                key={index}
                className="delay-150hover:-translate-y-1 relative p-6 transition duration-300 ease-in-out hover:scale-110"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="rounded-lg bg-[#121212] shadow-lg hover:bg-opacity-80"
                >
                  <img src={image} alt={`Project ${index + 1}`} />
                  <h2 className="font-bold">Project {index + 1}</h2>
                  <p className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
                    This is a brief description of project {index + 1}.
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </Link>
      </section>
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';
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
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    '/path/to/image4.jpg',
    '/path/to/image5.jpg',
    '/path/to/image6.jpg',
  ];

  return (
    <div className="relative flex flex-col bg-black px-4 py-4 md:px-12">
      <section className="relative flex min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="mb-7 text-4xl font-extrabold text-white sm:text-5xl lg:-mt-40 lg:text-5xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              {`PROJECTS`}
            </span>
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg lg:mb-28 lg:text-2xl">
            {`Here you will find some of the personal projects that I created.`}
          </p>
        </motion.div>
      </section>
      <section className="relative -mt-16 md:-mt-32 lg:-translate-y-56">
        <Slider {...settings} className="px-4 md:px-10">
          {projectImages.map((image, index) => (
            <div key={index} className="px-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-lg bg-white p-10 shadow-lg sm:p-20 md:p-32"
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="mb-4 h-48 w-full rounded-md object-cover"
                />
                <h2 className="text-start text-xl font-bold">
                  Project {index + 1}
                </h2>
                <p className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
                  This is a brief description of project {index + 1}.
                </p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

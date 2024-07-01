import Image from 'next/image';

export default function Header() {
  function onClick(element: string): void {
    document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="fixed left-0 top-0 z-50 flex h-[100px] w-full items-center justify-between bg-black px-20 text-lg text-[#ADB7BE]">
      <button className="flex items-center gap-7 text-lg">
        <div className="delay-150hover:-translate-y-1 flex items-center gap-7 rounded-full object-cover text-lg transition duration-300 ease-in-out hover:scale-110">
          <Image
            className="rounded-full object-cover"
            src="/images/amanda.jpeg"
            width={60}
            height={60}
            alt="amanda"
          />
          Amanda Campos
        </div>
      </button>

      <div className="flex gap-7">
        <button
          onClick={() => onClick('hero-section')}
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
        >
          Home
        </button>
        <button
          onClick={() => onClick('about')}
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
        >
          About
        </button>
        <button
          onClick={() => onClick('projects')}
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
        >
          Projects
        </button>
        <button
          onClick={() => onClick('contact')}
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
        >
          Contact
        </button>
      </div>
    </div>
  );
}

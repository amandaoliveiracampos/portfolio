import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-[100px] w-full items-center justify-between bg-zinc-900 px-20 text-lg text-[#ADB7BE] opacity-50">
      <Link className="flex items-center gap-7 text-lg" href="/">
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
      </Link>

      <div className="flex gap-7">
        <Link
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
          href="/"
        >
          Home
        </Link>
        <Link
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
          href="/about"
        >
          About
        </Link>
        <Link
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

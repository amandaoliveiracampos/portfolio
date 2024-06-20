import Link from 'next/link';

export default function Contacts() {
  return (
    <div className="h-[500px] w-full bg-zinc-900 text-white opacity-50">
      <div className="flex flex-col gap-4 px-6 pt-24 text-xl">
        <Link
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
          href="/"
        >
          LinkedIn
        </Link>
        <Link
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
          href="/"
        >
          Email
        </Link>
        <Link
          className="delay-150hover:-translate-y-1 transition duration-300 ease-in-out hover:scale-110"
          href="/"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}

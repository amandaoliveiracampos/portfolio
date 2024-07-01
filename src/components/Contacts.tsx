import Link from 'next/link';

export default function Contacts() {
  return (
    <div id="contact" className="w-full bg-zinc-900 text-center text-[#ADB7BE]">
      <div className="px-6 pt-10 text-2xl font-extrabold text-white">
        <h1>Send me an e-mail or an instant message!</h1>
        <div className="mt-4 flex h-44 flex-col gap-4 text-center text-base text-[#ADB7BE]">
          <Link
            href="/"
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125"
          >
            amandaolivcampos@gmail.com
          </Link>
          <Link
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125"
            href="/"
          >
            Messenger
          </Link>
          <Link
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125"
            href="/"
          >
            LinkedIn
          </Link>
          <Link
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125"
            href="/"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}

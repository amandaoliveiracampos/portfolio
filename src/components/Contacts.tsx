import Link from 'next/link';

export default function Contacts() {
  return (
    <div className="h-[500px] w-full bg-zinc-900 text-white opacity-50">
      <div className="flex flex-col gap-4 px-6 pt-24 text-xl">
        <Link className="" href="/">
          LinkedIn
        </Link>
        <Link className="" href="/">
          Email
        </Link>
        <Link className="" href="/">
          GitHub
        </Link>
      </div>
    </div>
  );
}

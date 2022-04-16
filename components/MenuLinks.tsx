import Link from "next/link";

const MenuLinks: React.FC = () => {
  return (
    <>
      <a
        href="#"
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-zinc-800 mt-4 lg:mt-0"
      >
        LANG
      </a>
      <Link href="/">
        <a className="block lg:inline-block text-sm px-4 py-2 lg:mx-2 leading-none rounded text-white hover:border-transparent hover:text-white hover:bg-zinc-800 mt-4 lg:mt-0">
          HOME
        </a>
      </Link>
      <Link href="/">
        <a className="block lg:inline-block text-sm px-4 py-2 lg:mx-2 leading-none rounded text-white hover:border-transparent hover:text-white hover:bg-zinc-800 mt-4 lg:mt-0">
          CONTACT
        </a>
      </Link>
      <Link href="/cv">
        <a className="block lg:inline-block text-sm px-4 py-2 lg:mx-2 leading-none rounded text-white hover:border-transparent hover:text-white hover:bg-zinc-800 mt-4 lg:mt-0">
          CV
        </a>
      </Link>
      <Link href="/blog">
        <a className="block lg:inline-block text-sm px-4 py-2 lg:mx-2 leading-none rounded text-white hover:border-transparent hover:text-white hover:bg-zinc-800 mt-4 lg:mt-0">
          BLOG
        </a>
      </Link>
    </>
  );
};

export default MenuLinks;

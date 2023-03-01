import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="stick bottom-0 flex items-center justify-center gap-4 bg-zinc-200 py-4 text-center text-black dark:bg-zinc-800 dark:text-white">
      <a
        href="https://github.com/j-Riv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black dark:text-white"
      >
        {`© ${new Date().getFullYear()} j-Riv`}
      </a>
      <SocialLinks />
    </footer>
  );
};

export default Footer;

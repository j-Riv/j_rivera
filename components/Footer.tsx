import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center gap-4 bg-zinc-200 dark:bg-zinc-800 py-4 text-center text-black dark:text-white stick bottom-0">
      <a
        href="https://github.com/j-Riv"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`© ${new Date().getFullYear()} j-Riv`}
      </a>
      <SocialLinks />
    </footer>
  );
};

export default Footer;

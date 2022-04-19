import Image from "next/image";
import styles from "../styles/Home.module.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 py-4 text-center text-white sticky">
      <a
        href="https://github.com/j-Riv"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`© ${new Date().getFullYear()} j-Riv`}
      </a>
    </footer>
  );
};

export default Footer;

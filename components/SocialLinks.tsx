import Link from "next/link";
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedInIcon,
  FaStackOverflow as StackOverflowIcon,
  FaInstagram as InstagramIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-5 text-2xl py-4">
      <a
        href="https://www.linkedin.com/in/jose-alfredo-rivera-turcios/"
        rel="no-follow noreferrer"
        target="_blank"
      >
        <LinkedInIcon className="hover:text-zinc-600" />
      </a>
      <a
        href="https://github.com/j-Riv"
        rel="no-follow noreferrer"
        target="_blank"
      >
        <GithubIcon className="hover:text-zinc-600" />
      </a>
      <a
        href="https://stackoverflow.com/users/11257595/j-riv"
        rel="no-follow noreferrer"
        target="_blank"
      >
        <StackOverflowIcon className="hover:text-zinc-600" />
      </a>
      <a
        href="https://instagram.com/iam_jriv"
        rel="no-follow noreferrer"
        target="_blank"
      >
        <InstagramIcon className="hover:text-zinc-600" />
      </a>
      <a
        href="https://twitter.com/iam_jriv"
        rel="no-follow noreferrer"
        target="_blank"
      >
        <TwitterIcon className="hover:text-zinc-600" />
      </a>
    </div>
  );
};

export default SocialLinks;

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
        rel="no-follow"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a href="https://github.com/j-Riv" rel="no-follow" target="_blank">
        <GithubIcon />
      </a>
      <a
        href="https://stackoverflow.com/users/11257595/j-riv"
        rel="no-follow"
        target="_blank"
      >
        <StackOverflowIcon />
      </a>
      <a href="https://instagram.com/iam_jriv" rel="no-follow" target="_blank">
        <InstagramIcon />
      </a>
      <a href="https://twitter.com/iam_jriv" rel="no-follow" target="_blank">
        <TwitterIcon />
      </a>
    </div>
  );
};

export default SocialLinks;

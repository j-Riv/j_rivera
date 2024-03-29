import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedInIcon,
  FaStackOverflow as StackOverflowIcon,
  FaInstagram as InstagramIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 py-4 text-2xl">
      <a
        className="text-black dark:text-white"
        href="https://www.linkedin.com/in/jose-alfredo-rivera-turcios/"
        rel="no-follow noreferrer"
        target="_blank"
      >
        <LinkedInIcon className="hover:text-zinc-600" />
      </a>
      <a
        className="text-black dark:text-white"
        href="https://github.com/j-Riv"
        rel="no-follow noreferrer"
        target="_blank"
      >
        <GithubIcon className="hover:text-zinc-600" />
      </a>
      <a
        className="text-black dark:text-white"
        href="https://stackoverflow.com/users/11257595/j-riv"
        rel="no-follow noreferrer"
        target="_blank"
      >
        <StackOverflowIcon className="hover:text-zinc-600" />
      </a>
      <a
        className="text-black dark:text-white"
        href="https://instagram.com/iam_jriv"
        rel="no-follow noreferrer"
        target="_blank"
      >
        <InstagramIcon className="hover:text-zinc-600" />
      </a>
      <a
        className="text-black dark:text-white"
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

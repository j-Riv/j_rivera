import Link from "next/link";
import {
  FaApple as AppleIcon,
  FaCode as CodeIcon,
  FaDocker as DockerIcon,
  FaDog as DogIcon,
  FaRaspberryPi as PiIcon,
  FaLinux as LinuxIcon,
  FaServer as ServerIcon,
  FaSearch as SearchIcon,
} from "react-icons/fa";
import { BsCpuFill as CpuIcon } from "react-icons/bs";
import { SiBlueprint as PrinterIcon } from "react-icons/si";

interface Props {
  tag: string;
}

const Tag: React.FC<Props> = ({ tag }) => {
  const icon = () => {
    if (tag === "macOS" || tag === "iOS") {
      return <AppleIcon className="inline" />;
    } else if (
      tag === "Web Development" ||
      tag === "Computing" ||
      tag === "Server"
    ) {
      return <ServerIcon className="inline" />;
    } else if (tag === "Dogs" || tag === "Dog") {
      return <DogIcon className="inline" />;
    } else if (tag === "Docker") {
      return <DockerIcon className="inline" />;
    } else if (tag === "Linux") {
      return <LinuxIcon className="inline" />;
    } else if (tag === "Raspberry Pi") {
      return <PiIcon className="inline" />;
    } else if (tag === "Code") {
      return <CodeIcon className="inline" />;
    } else if (tag === "ARM" || tag === "X86") {
      return <CpuIcon className="inline" />;
    } else if (tag === "3D Printing") {
      return <PrinterIcon className="inline" />;
    } else {
      return <SearchIcon className="inline" />;
    }
  };

  return (
    <Link href={`/blog/category/${tag}`}>
      <a className="flex items-center gap-1 bg-red-800 hover:bg-red-900 py-2 px-4 rounded text-white">
        {icon()}
        {` ${tag}`}
      </a>
    </Link>
  );
};

export default Tag;

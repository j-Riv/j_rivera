import parse, {
  HTMLReactParserOptions,
  Element,
  attributesToProps,
  domToReact,
} from "html-react-parser";
import Image from "next/image";
import CodeSnippet from "./CodeSnippet";

const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element && domNode.name === "img") {
      const { src, alt, width, height } = domNode.attribs;

      return (
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            layout="responsive"
            width={width ? parseInt(width) : 2048}
            height={height ? parseInt(height) : 2048}
            quality={75}
            blurDataURL={src}
            placeholder="blur"
            objectFit={width ? "contain" : "cover"}
          />
          <p className="italic">{alt}</p>
        </div>
      );
    }

    if (domNode instanceof Element && domNode.name === "pre") {
      const props = attributesToProps(domNode.attribs);
      return (
        <CodeSnippet {...props}>
          {domToReact(domNode.children, options)}
        </CodeSnippet>
      );
    }
  },
};

type Props = {
  content: string;
};

const PostContent = ({ content }: Props) => {
  return (
    <div className="post-content" style={{ position: "relative" }}>
      {parse(content, options)}
    </div>
  );
};

export default PostContent;

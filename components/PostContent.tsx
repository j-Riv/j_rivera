import { HTMLReactParserOptions } from "html-react-parser";
import { Element } from "domhandler/lib/node";
import parse from "html-react-parser";
import Image from "next/image";

const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element && domNode.name === "img") {
      const { src, alt } = domNode.attribs;

      return (
        <div className="post_image_wrapper">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            quality={75}
            blurDataURL={src}
            placeholder="blur"
            className="post_img"
          />
          <p className="italic">{alt}</p>
        </div>
      );
    }
  },
};

const PostContent = ({ content }: { content: string }) => {
  return (
    <div style={{ maxWidth: "1200px", position: "relative" }}>
      {parse(content, options)}
    </div>
  );
};

export default PostContent;

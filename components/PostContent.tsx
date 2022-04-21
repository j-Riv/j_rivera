import { HTMLReactParserOptions } from "html-react-parser";
import { Element } from "domhandler/lib/node";
import parse from "html-react-parser";
import Image from "next/image";
import styles from "../styles/PostContent.module.css";

const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element && domNode.name === "img") {
      const { src, alt } = domNode.attribs;

      return (
        <div className={styles.post_img_wrapper}>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            quality={75}
            blurDataURL={src}
            placeholder="blur"
            className={styles.post_img}
            objectFit="contain"
          />
          <p className="italic">{alt}</p>
        </div>
      );
    }
  },
};

const PostContent = ({ content }: { content: string }) => {
  return (
    <div className="post-content" style={{ position: "relative" }}>
      {parse(content, options)}
    </div>
  );
};

export default PostContent;

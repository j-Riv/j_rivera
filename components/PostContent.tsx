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
      const { src, alt } = domNode.attribs;

      return (
        <div className="post_img_wrapper">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            quality={75}
            blurDataURL={src}
            placeholder="blur"
            className="post_img"
            objectFit="contain"
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

const PostContent = ({ content }: { content: string }) => {
  return (
    <div className="post-content" style={{ position: "relative" }}>
      {parse(content, options)}
    </div>
  );
};

export default PostContent;
function children(children: any, options: HTMLReactParserOptions) {
  throw new Error("Function not implemented.");
}

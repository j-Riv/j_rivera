import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
};

const CodeSnippet = ({ className, children }: Props) => {
  const [ssr, setSSR] = useState<boolean>(true);

  useEffect(() => {
    if (window !== undefined) {
      setSSR(false);
      Prism.highlightAll();
    }
  }, []);

  useEffect(() => {
    if (!ssr) {
      Prism.highlightAll();
    }
  }, [ssr]);

  return (
    <>
      {!ssr && (
        <pre className={className} tabIndex={0}>
          {children}
        </pre>
      )}
    </>
  );
};

export default CodeSnippet;

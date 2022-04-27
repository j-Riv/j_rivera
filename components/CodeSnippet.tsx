import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";

interface Props {
  [key: string]: any;
}

const CodeSnippet: React.FC<Props> = ({ className, children }) => {
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

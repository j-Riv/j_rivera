import { useEffect } from "react";
import prism from "prismjs";
import "prismjs/components/prism-markup-templating";

const About: React.FC = () => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  const code = `
    class Me {
      constructor() {
        this.name = 'José Alfredo Rivera Turcios';
        this.currentLocation = 'California, United States';
        this.job = 'Developer';
        this.interests = [
          'Dogs', 'Linux', 'Technology', 'Motorcycles', 'Sports'
        ];
        this.hobbies = ['Beer', 'Coding', 'Tinkering'];
      }
      get name() {
        return this.name;
      }
    }
  `;

  return (
    <div className="relative bg-zinc-800 dark:bg-zinc-800 pb-[300px]">
      <div className="container py-4">
        <pre className="language-javascript" tabIndex={0}>
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default About;

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
// import Example from "./Example";

interface Props {
  title: string;
  description: string;
}

const Layout: React.FC<Props> = ({ title, description, children }) => {
  return (
    <div className="application-wrap">
      <Header title={title} description={description} />
      <NavBar />
      <main className="relative flex-1 bg-zinc-300 dark:bg-zinc-800">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

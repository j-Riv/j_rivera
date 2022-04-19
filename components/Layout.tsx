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
    <>
      <Header title={title} description={description} />
      <NavBar />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

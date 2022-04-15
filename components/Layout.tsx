import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

interface Props {
  title: string;
  description: string;
}

const Layout: React.FC<Props> = ({ title, description, children }) => {
  return (
    <div className={styles.container}>
      <Header title={title} description={description} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

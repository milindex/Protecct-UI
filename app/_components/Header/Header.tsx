import styles from "./Header.module.scss";
import Topbar from "./parts/Topbar/Topbar";
import Navbar from "./parts/Navbar/Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <Topbar />
      <Navbar />
    </header>
  );
};
export default Header;

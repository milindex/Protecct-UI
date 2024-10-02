import styles from "./Footer.module.scss";
import Copyright from "./parts/Copyright/Copyright";
import MainFooter from "./parts/MainFooter/MainFooter";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MainFooter />
      {/* <Copyright /> */}
    </footer>
  );
};
export default Footer;

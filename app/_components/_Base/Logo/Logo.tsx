import Link from "next/link";
import styles from "./Logo.module.scss";
import Image from "next/image";

const Logo = ({ type = "default" }) => {
  return (
    <Link href="/">
      <Image className={styles.Logo} src="/assets/images/logo_protecct.png" alt="Protecct" width={220} height={30} />
    </Link>
  );
};
export default Logo;

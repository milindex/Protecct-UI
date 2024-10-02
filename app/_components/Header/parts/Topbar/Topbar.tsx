import { IconArrowRight } from "@tabler/icons-react";
import styles from "./Topbar.module.scss";
import Link from "next/link";
import { Container } from "@mantine/core";

const Topbar = () => {
  return (
    <div className={`${styles.topbarContainer} container-fluid`}>
      <Container size="xl" className={styles.inner}>
        <p>
          Professional and highly dedicated business services
          <span>
            <Link href="/services" className={styles.exploreLink}>
              Explore Now <IconArrowRight size={14} />
            </Link>
          </span>
        </p>
      </Container>
    </div>
  );
};
export default Topbar;

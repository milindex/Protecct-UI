import StatsDisplay from "@/app/_components/_Base/StatsDisplay/StatsDisplay";
import styles from "./SectionAbout.module.scss";
import { IconBulb, IconChessRook, IconCalendarClock, IconCarambola } from "@tabler/icons-react";

const SectionAbout = () => {
  return (
    <div className={styles.sectionAboutContainer}>
      <div className={styles.statsContainer}>
        <div className={styles.statsItem}>
          <StatsDisplay value={1000} label="Happy Customers" />
        </div>
        <div className={styles.statsItem}>
          <StatsDisplay value={1000} label="Audits Completed" pill={{ text: "Popular", color: "tomato.6" }} />
        </div>
        <div className={styles.statsItem}>
          <StatsDisplay value={1500} label="Services Provided" />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.pill}>About Safety</div>
        <h2>Your Partner in Safety & Compliance</h2>
        <p>
          We have been at the forefront of providing top-notch safety services to a variety of industries, ensuring that our clients are not just compliant but safe in all aspects.
        </p>

        <div className="usps">
          <div className="UspContainer">
            <div className="icon">
              <IconBulb size={50} color="tomato.7" />
            </div>
            <div className="uspContent">
              <div className="title">Innovative ideas</div>
              <div className="description">Lorem ipsum simply dummy text printing typesetting.</div>
            </div>
          </div>
          <div className="UspContainer">
            <div className="icon">
              <IconChessRook size={50} color="tomato.7" />
            </div>
            <div className="uspContent">
              <div className="title">Expertise strategy</div>
              <div className="description">Lorem ipsum simply dummy text printing typesetting.</div>
            </div>
          </div>
          <div className="UspContainer">
            <div className="icon">
              <IconCalendarClock size={50} color="tomato.7" />
            </div>
            <div className="uspContent">
              <div className="title">Safety planning</div>
              <div className="description">Lorem ipsum simply dummy text printing typesetting.</div>
            </div>
          </div>
          <div className="UspContainer">
            <div className="icon">
              <IconCarambola size={50} color="tomato.7" />
            </div>
            <div className="uspContent">
              <div className="title">Leading experts</div>
              <div className="description">Meet our people</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image}>{/* Add your image here */}</div>
    </div>
  );
};

export default SectionAbout;

import styles from "./HeroStyles.module.css";
import Img1 from "../../assets/website-photo.png";
import Img2 from "../../assets/website-photo2.png";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme } = useTheme();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.hero}
          src={theme === "light" ? Img1 : Img2}
          alt="Profile Picture"
        />

        <h1 className={styles.name}>
          Akshat<br />Kalra
        </h1>

        <p className={styles.subtitle}>
          Third Year CS & Statistics @ UBC
        </p>

        <div className={styles.links}>
          <a href="https://github.com/Akshat-Kalra" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className={styles.separator}>/</span>
          <a href="https://www.linkedin.com/in/akshat-kalra-783819156/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className={styles.separator}>/</span>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <p className={styles.email}>akshatkalra2005@gmail.com</p>
      </div>
    </section>
  );
}

export default Hero;

import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section className={styles.container}>
      <h2 className="sectionTitle">CONTACT</h2>
      <div className={styles.contactContent}>
        <a href="mailto:akshatkalra2005@gmail.com" className={styles.email}>
          akshatkalra2005@gmail.com
        </a>
        <div className={styles.links}>
          <a
            href="https://github.com/akshat-kalra"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className={styles.separator}>/</span>
          <a
            href="https://www.linkedin.com/in/akshat-kalra-783819156/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <div className={styles.container}>
      <h2 className="sectionTitle">SKILLS</h2>
      <div className={styles.skillsList}>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Frontend</h3>
          <p className={styles.skills}>React · Next.js · HTML · CSS · JavaScript · TailwindCSS · Figma</p>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Backend</h3>
          <p className={styles.skills}>Node.js · Express.js · Flask · MySQL · MongoDB · SQLite</p>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Programming Languages</h3>
          <p className={styles.skills}>C · C++ · Java · JavaScript · TypeScript · Python · R</p>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Machine Learning</h3>
          <p className={styles.skills}>Scikit-learn · NumPy · Pandas · OpenCV</p>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Cloud & Tools</h3>
          <p className={styles.skills}>AWS · Linux · Docker · Git · GitHub · LaTeX · Postman · ROS2</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

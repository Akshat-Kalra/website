import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <section className={styles.container}>
      <h2 className="sectionTitle">SKILLS</h2>
      <div className={styles.skillsList}>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Languages</h3>
          <p className={styles.skills}>Python · C/C++ · TypeScript · Java · Rust · SQL (PostgreSQL) · R · HTML/CSS · Racket</p>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Full-Stack</h3>
          <p className={styles.skills}>React.js · Next.js · Nest.js · Node.js · FastAPI · Flask</p>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Machine Learning & AI</h3>
          <p className={styles.skills}>Scikit-Learn · PyTorch · Neural Networks · AWS Bedrock · Automated Evaluation for AI Systems</p>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Data Science & Analytics</h3>
          <p className={styles.skills}>Pandas · NumPy · Matplotlib · Statistical Validation</p>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Cloud & Infrastructure</h3>
          <p className={styles.skills}>AWS (Bedrock, Lambda, S3, DynamoDB, API Gateway) · Docker · Linux</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import styles from "./EducationStyles.module.css";
import ubclogo from "../../assets/ubc-logo.png";

function Education() {
  return (
    <section className={styles.container}>
      <h2 className="sectionTitle">EDUCATION</h2>
      <div className={styles.card}>
        <img src={ubclogo} alt="UBC logo" className={styles.logo} />
        <h3 className={styles.degree}>BSc Computer Science & Statistics</h3>
        <p className={styles.school}>The University of British Columbia</p>
        <p className={styles.meta}>Expected Graduation May 2027 · Dean's Honor List</p>
        <p className={styles.scholarships}>
          2x Faculty of Science International Student Scholarship · OIS Scholarship
        </p>
      </div>
    </section>
  );
}

export default Education;

import PropTypes from "prop-types";
import styles from "./ExperienceStyles.module.css";
import companyLogo from "../../assets/subbots.png";
import ubclogo from "../../assets/ubc-logo.png";
import cslogo from "../../assets/ubc-cs-logo.png";
import phillogo from "../../assets/ubc-phil-logo.png";

function Experience() {
  return (
    <section className={styles.container}>
      <h2 className="sectionTitle">EXPERIENCE</h2>
      <div className={styles.cardsContainer}>
        <ExperienceCard
          title="Software Developer (GenAI) Co-op"
          company="Faculty of Forestry, UBC"
          logo={ubclogo}
          location="Vancouver, BC"
          timeframe="May 2025 – Present"
          details={[
            "Built an AI-assisted grading tool end-to-end — AWS serverless backend, LTI 1.3 Canvas integration with automatic grade passback, and an LLM evaluation system benchmarking Claude, Llama 3, and Mistral against instructor grades on 3,500+ submissions.",
            "Contributed to HelpMe, an open-source LLM-powered course assistant used by 1,500+ students across 40+ courses — built the RAG data pipeline, semantic search with pgvector, and instructor-controlled content filtering.",
          ]}
        />
        <ExperienceCard
          title="Teaching Assistant — CPSC 121"
          company="Department of Computer Science, UBC"
          logo={cslogo}
          location="Vancouver, BC"
          timeframe="Jan 2025 – Present (4 terms)"
          terms="2024W2 · 2025S2 · 2025W1 · 2025W2 — Wolfman, Hosseini, Mochetti, Johnson"
          details={[
            "TA for Models of Computation across 4 terms — leading weekly labs, tutorials, and discussion sections covering automata theory, boolean logic, proof techniques, and sequential circuit design.",
            "Developed original discussion slides and held structured office hours promoting independent problem-solving.",
          ]}
        />
        <ExperienceCard
          title="Teaching Assistant — PHIL 220"
          company="Department of Philosophy, UBC"
          logo={phillogo}
          location="Vancouver, BC"
          timeframe="Sep 2023 – Dec 2024 (2 terms)"
          terms="2023W1 · 2024W1 — Aydede"
          details={[
            "TA for Symbolic Logic across 2 terms — graded 200+ assignments and exams with detailed feedback on sentential logic, predicate logic, and formal proof construction.",
            "Assisted in writing exam questions, held weekly office hours, and maintained the course discussion forum.",
          ]}
        />
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, logo, location, timeframe, terms, details }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {logo && (
          <img src={logo} alt={`${company} logo`} className={styles.logo} />
        )}
        <h3>{title}</h3>
        <p className={styles.company}>
          {company} {location && `| ${location}`}
        </p>
        <p className={styles.timeframe}>{timeframe}</p>
        {terms && <p className={styles.terms}>{terms}</p>}
      </div>
      <ul className={styles.detailList}>
        {details.map((detail, index) => (
          <li key={index} className={styles.detailItem}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  logo: PropTypes.string,
  location: PropTypes.string,
  timeframe: PropTypes.string,
  terms: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;

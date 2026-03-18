/* eslint-disable react/prop-types */
import styles from "./ProjectsStyles.module.css";
import tranquilo from "../../assets/tranquilo.png";
import airbnb from "../../assets/airbnb.png";
import ecoCircle from "../../assets/ecocircle.png";
import rustlock from "../../assets/rustlock.png";

function Projects() {
  return (
    <section className={styles.container}>
      <h2 className="sectionTitle">PROJECTS</h2>

      <div className={styles.featured}>
        <FeaturedProject
          img={rustlock}
          name="Rustlock"
          description="Local-first CLI password manager with AES-256-GCM authenticated encryption, Argon2id key derivation, and an interactive terminal UI."
          link="https://github.com/Akshat-Kalra/rustlock"
          skills="Rust | AES-256-GCM | Argon2id | TUI"
        />
        <FeaturedProject
          img={tranquilo}
          name="Tranquilo"
          description="AI-powered mental health journal providing therapist-like responses through Retrieval Augmented Generation (RAG) and BERTopic modeling."
          link="https://github.com/SaiUbc/Tranquilo"
          skills="Next.js | SQLite | Flask | Ngrok | RESTful APIs | BERTopic | RAG"
        />
        <FeaturedProject
          img={airbnb}
          name="Predicting Revenue Impacts of Vancouver's Airbnb Policy"
          description="Won 1st Place at the UBC WiDS Case Competition. Developed an end-to-end ML pipeline using scikit-learn, reducing MSE by 27.4% over the baseline."
          link="https://medium.com/@akshatkalra2005/adapting-to-change-predicting-revenue-impacts-of-vancouvers-airbnb-policies-a35b034716f0"
          skills="Scikit-learn | Pandas | NumPy"
        />
        <FeaturedProject
          img={ecoCircle}
          name="Eco-Circle"
          description="Secured 3rd place at the UBC CIC x AWS Gen AI and Sustainability Hackathon. AI-powered marketplace for sustainable buying and upcycling, leveraging Llama 3.1 70B and AWS architecture."
          link="https://cic.ubc.ca/2024/10/24/a-look-back-at-cics-generative-ai-and-sustainability-hackathon/"
          skills="AWS | Next.js | Python"
        />
      </div>

      <div className={styles.other}>
        <CompactProject
          name="FitTrackr"
          description="Java-based fitness tracking app. Logs workouts, visualizes progress, and persists data."
          link="https://github.com/Akshat-Kalra/FitTrackr"
          skills="Java | Swing (GUI) | JUnit5"
        />
        <CompactProject
          name="This Website :)"
          description="ReactJS-powered portfolio showcasing projects and skills."
          link="https://akshatkalra.com"
          skills="ReactJS | HTML | CSS"
        />
        <CompactProject
          name="Sorting Algorithm Visualizer"
          description="Customizable array length and speed. Supports Insertion, Selection, and Bubble Sort."
          link="https://react-sorting-visualizer-eight.vercel.app/"
          skills="ReactJS | HTML | CSS"
        />
        <CompactProject
          name="Only Cat Facts"
          description="Cat facts app that fetches data from APIs and displays cute cat content."
          link="https://onlycatfacts.netlify.app/"
          skills="ReactJS | HTML | CSS | API Integration"
        />
        <CompactProject
          name="Inferential Analysis"
          description="Statistical inference on whether ticket classes affected survival rates on the RMS Titanic."
          link="https://github.com/Akshat-Kalra/STAT_201_PROJECT"
          skills="R | Jupyter Notebook | EDA | Inferential Statistics"
        />
      </div>
    </section>
  );
}

function FeaturedProject({ img, name, description, link, skills }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.featuredCard}>
      <img src={img} alt={name} loading="lazy" />
      <div className={styles.featuredInfo}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className={styles.techStack}>{skills}</p>
      </div>
    </a>
  );
}

function CompactProject({ name, description, link, skills }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.compactCard}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className={styles.techStack}>{skills}</p>
    </a>
  );
}

export default Projects;

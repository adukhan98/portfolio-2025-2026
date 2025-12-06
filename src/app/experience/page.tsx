import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { experiences } from "@/data/experience";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Experience | Adnaan Khan",
    description:
        "Professional experience in AI product management, from KPMG to Oracle.",
};

export default function ExperiencePage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <AnimatedSection>
                    <h1>Experience</h1>
                    <p>
                        From engineering to product—building AI-enabled solutions that
                        transform enterprise workflows.
                    </p>
                </AnimatedSection>
            </header>

            <section className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <AnimatedSection key={exp.company} delay={index * 0.1}>
                        <article className={styles.experience}>
                            <div className={styles.timelineDot} />
                            <div className={styles.experienceHeader}>
                                <div className={styles.companyInfo}>
                                    <h2>{exp.company}</h2>
                                    <h3>{exp.role}</h3>
                                </div>
                                <div className={styles.meta}>
                                    <span className={styles.period}>{exp.period}</span>
                                    <span className={styles.location}>{exp.location}</span>
                                </div>
                            </div>
                            <ul className={styles.responsibilities}>
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    </AnimatedSection>
                ))}
            </section>
        </div>
    );
}

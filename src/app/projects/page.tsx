import { Metadata } from "next";
import CaseStudyCard from "@/components/CaseStudyCard";
import AnimatedSection from "@/components/AnimatedSection";
import { caseStudies } from "@/data/case-studies";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Projects | Adnaan Khan",
    description:
        "Selected projects showcasing AI-enabled workflow transformation and enterprise productivity.",
};

export default function ProjectsPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <AnimatedSection>
                    <h1>Selected Projects</h1>
                    <p>
                        Stuff I&apos;ve actually shipped. Real problems, real solutions, real impact. <br />
                        (Spoiler: There&apos;s a lot of AI, but zero buzzwords. Promise.)
                    </p>
                </AnimatedSection>
            </header>

            <section className={styles.caseStudies}>
                <div className={styles.grid}>
                    {caseStudies.map((study, index) => (
                        <AnimatedSection key={study.slug} delay={index * 0.15}>
                            <CaseStudyCard
                                slug={study.slug}
                                title={study.title}
                                summary={study.summary}
                                tags={study.tags}
                                index={index}
                            />
                        </AnimatedSection>
                    ))}
                </div>
            </section>
        </div>
    );
}

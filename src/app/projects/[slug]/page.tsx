import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import styles from "./page.module.css";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudy(slug);
    if (!study) return { title: "Project Not Found" };

    return {
        title: `${study.title} | Adnaan Khan`,
        description: study.summary,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const study = getCaseStudy(slug);

    if (!study) {
        notFound();
    }

    return (
        <article className={styles.page}>
            <header className={styles.header}>
                <AnimatedSection>
                    <Link href="/projects" className={styles.backLink}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        All Projects
                    </Link>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <div className={styles.tags}>
                        {study.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1>{study.title}</h1>
                    <p className={styles.summary}>{study.summary}</p>
                </AnimatedSection>
            </header>

            <div className={styles.content}>
                <AnimatedSection delay={0.2}>
                    <section className={styles.section}>
                        <h2>Problem</h2>
                        <p>{study.problem}</p>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={0.25}>
                    <section className={styles.section}>
                        <h2>Discovery & Insights</h2>
                        <p>{study.discovery}</p>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <section className={styles.section}>
                        <h2>Solution</h2>
                        <p>{study.solution}</p>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={0.35}>
                    <section className={styles.section}>
                        <h2>Impact & Results</h2>
                        <ul className={styles.impactList}>
                            {study.impact.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                    <div className={styles.cta}>
                        <p>Interested in learning more about this project?</p>
                        <Button href="/contact" variant="primary">
                            Let&apos;s Talk
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </article>
    );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./CaseStudyCard.module.css";

interface CaseStudyCardProps {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    index?: number;
}

export default function CaseStudyCard({
    slug,
    title,
    summary,
    tags,
    index = 0,
}: CaseStudyCardProps) {
    return (
        <motion.article
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/work/${slug}`} className={styles.link}>
                <div className={styles.content}>
                    <div className={styles.number}>0{index + 1}</div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.summary}>{summary}</p>
                    <div className={styles.tags}>
                        {tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className={styles.arrow}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}

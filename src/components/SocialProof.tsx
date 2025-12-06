"use client";

import { motion } from "framer-motion";
import styles from "./SocialProof.module.css";

const stats = [
    {
        value: "200+",
        label: "Users",
        description: "Using AI tools I built",
    },
    {
        value: "13M+",
        label: "Impressions",
        description: "From AI enablement content",
    },
    {
        value: "25+",
        label: "Hours Saved Weekly",
        description: "Through automation",
    },
    {
        value: "6x",
        label: "Usage Increase",
        description: "After enablement programs",
    },
];

export default function SocialProof() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className={styles.stat}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.value}>{stat.value}</div>
                            <div className={styles.label}>{stat.label}</div>
                            <div className={styles.description}>{stat.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

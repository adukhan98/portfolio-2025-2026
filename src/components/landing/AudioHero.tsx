"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { resumeSummary } from "@/data/resumeSummary";
import AudioPlayerClient from "./AudioPlayerClient";
import Transcript from "./Transcript";
import { track } from "@/components/analytics/track";
import styles from "./AudioHero.module.css";

export default function AudioHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                {/* Left content */}
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <span className={styles.name}>Adnaan Khan</span>
                    <h1 className={styles.headline}>
                        I like building and scaling products.
                    </h1>
                    <p className={styles.bio}>
                        I build AI-powered products that eliminate manual drudgery and help
                        enterprises scale knowledge, accuracy, and decision-making.
                    </p>

                    {/* Audio Player */}
                    <div className={styles.audioSection}>
                        <AudioPlayerClient
                            audioSrc={resumeSummary.audioSrc}
                            title={resumeSummary.title}
                            onStart={() => track("audio_start")}
                            onPause={() => track("audio_pause")}
                            onComplete={() => track("audio_complete")}
                            onProgress={(percent) => track(`audio_progress_${percent}`)}
                            onError={() => track("audio_error")}
                        />

                        {/* Secondary CTAs */}
                        <div className={styles.secondaryCtas}>
                            <Link href="#transcript" className={styles.textLink} onClick={() => track("transcript_open")}>
                                Read Summary
                            </Link>
                            <span className={styles.divider}>•</span>
                            <Link href="/resume.pdf" className={styles.textLink} target="_blank">
                                View Resume
                            </Link>
                            <span className={styles.divider}>•</span>
                            <Link href="https://linkedin.com/in/adukhan98" className={styles.textLink} target="_blank">
                                LinkedIn
                            </Link>
                        </div>
                    </div>

                    {/* Transcript */}
                    <Transcript
                        text={resumeSummary.scriptText}
                        title="Read Transcript"
                        onToggle={(isExpanded) => {
                            if (isExpanded) track("transcript_open");
                        }}
                    />
                </motion.div>

                {/* Right image */}
                <motion.div
                    className={styles.heroImageWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <div className={styles.imageReveal}>
                        <Image
                            src="/images/home-portrait.jpg"
                            alt="Adnaan Khan"
                            fill
                            priority
                            className={styles.heroImage}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className={styles.imageOverlay} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

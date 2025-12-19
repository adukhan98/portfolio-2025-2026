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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <span className={styles.name}>Adnaan Khan</span>
                    <h1 className={styles.headline}>
                        I turn messy problems into products people actually want to use.
                    </h1>
                    <p className={styles.bio}>
                        Obsessed with making AI feel less like magic and more like a really good assistant. Currently: building tools that eliminate the boring stuff so teams can focus on what actually matters.
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
                                listen to summary
                            </Link>
                            <span className={styles.divider}>/</span>
                            <Link href="/resume.pdf" className={styles.textLink} target="_blank">
                                resume
                            </Link>
                            <span className={styles.divider}>/</span>
                            <a href="https://linkedin.com/in/adukhan98" className={styles.textLink} target="_blank" rel="noopener noreferrer">
                                linkedin
                            </a>
                        </div>
                    </div>

                    {/* Transcript Integration */}
                    <Transcript
                        text={resumeSummary.scriptText}
                        title="read transcript"
                        onToggle={(isExpanded) => {
                            if (isExpanded) track("transcript_open");
                        }}
                    />
                </motion.div>

                {/* Right image */}
                <motion.div
                    className={styles.heroImageWrapper}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <div className={styles.imageReveal}>
                        <Image
                            src="/images/home-portrait.jpg"
                            alt="Adnaan Khan - AI Product Manager"
                            fill
                            priority
                            className={styles.heroImage}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className={styles.imageOverlay} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

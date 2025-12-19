"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Added missing Link import
import Button from "@/components/Button";
import SocialProof from "@/components/SocialProof";
import AnimatedSection from "@/components/AnimatedSection";
import AudioHero from "@/components/landing/AudioHero";
import { experiences as experience } from "@/data/experience";
import styles from "./page.module.css";
// Importing timeline styles from experience module because we want to mimic it. 
// However, reusing css modules across files in Next.js isn't direct if they are not global. 
// I will copy the minimal necessary timeline styles to page.module.css to avoid conflicts or duplicate the loop.

// Feature flag for audio-first landing page (defaults to enabled)
const flag = process.env.NEXT_PUBLIC_AUDIO_LANDING;
const AUDIO_LANDING_ENABLED =
  flag === undefined ? true : flag === "1" || flag === "true";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      {AUDIO_LANDING_ENABLED ? (
        <AudioHero />

      ) : (
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h1 className={styles.name}>Adnaan Khan</h1>
              <h2 className={styles.headline}>
                I turn messy problems into products people actually want to use.
              </h2>
              <p className={styles.bio}>
                Obsessed with making AI feel less like magic and more like a really good assistant. Currently: building tools that eliminate the boring stuff so teams can focus on what actually matters.
              </p>
              <div className={styles.heroCtas}>
                <Button href="/projects" variant="primary" size="lg">
                  view selected projects
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  get in touch
                </Button>
              </div>
            </motion.div>

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
      )}

      {/* Social Proof */}
      <SocialProof />

      {/* Experience Section (Replaces Projects) */}
      <section className={styles.featuredWork}> {/* Keeping class name for spacing, but logically it's experience */}
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>experience</h2>
              <div className={styles.divider} />
              <Link href="/experience" className={styles.viewMoreLink}>view full timeline</Link>
            </div>
          </AnimatedSection>

          <div className={styles.timeline}>
            {experience.slice(0, 3).map((role, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <h3>{role.company}</h3>
                    <span className={styles.timelinePeriod}>{role.period}</span>
                  </div>
                  <span className={styles.timelineRole}>{role.role}</span>
                  <ul className={styles.timelineDesc}>
                    {role.description.slice(0, 2).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <AnimatedSection className={styles.ctaContent}>
          <h2>working on something ambitious? i&apos;m in.</h2>
          <Button href="/contact" variant="primary" size="lg">
            let&apos;s talk
          </Button>
        </AnimatedSection>
      </section>
    </>
  );
}

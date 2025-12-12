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

// Feature flag for audio-first landing page
const flag = process.env.NEXT_PUBLIC_AUDIO_LANDING;
const AUDIO_LANDING_ENABLED = flag === '1' || flag === 'true';

if (typeof window !== "undefined") {
  console.log("[Debug] Flag:", flag, "Enabled:", AUDIO_LANDING_ENABLED);
}

export default function Home() {
  return (
    <>
      {/* Temporary Debug Banner */}
      <div style={{
        background: '#ff0000',
        color: 'white',
        padding: '8px',
        textAlign: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        DEBUG: ENV_VAR=[{flag}] | ENABLED=[{AUDIO_LANDING_ENABLED.toString()}]
      </div>

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
                I like building and scaling products.
              </h2>
              <p className={styles.bio}>
                I build AI-powered products that eliminate manual drudgery and help
                enterprises scale knowledge, accuracy, and decision-making.
              </p>
              <div className={styles.heroCtas}>
                <Button href="/projects" variant="primary" size="lg">
                  View Selected Projects
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Get In Touch
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
              <h2 className={styles.sectionTitle}>Experience</h2>
              <div className={styles.divider} />
              <Link href="/experience" className={styles.viewMoreLink}>View Full Timeline</Link>
            </div>
          </AnimatedSection>

          <div className={styles.timeline}>
            {experience.slice(0, 3).map((role, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h3>{role.company}</h3>
                      <span className={styles.timelinePeriod}>{role.period}</span>
                    </div>
                    <h4 className={styles.timelineRole}>{role.role}</h4>
                    <ul className={styles.timelineDesc}>
                      {role.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <AnimatedSection className={styles.ctaContent}>
          <h2>Ready to build something meaningful?</h2>
          <Button href="/contact" variant="primary" size="lg">
            Let&apos;s Talk
          </Button>
        </AnimatedSection>
      </section>
    </>
  );
}

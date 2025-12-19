import { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "About | Adnaan Khan",
    description: "Product Manager, Creator, and coffee enthusiast.",
};

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <AnimatedSection>
                    <h1>I ask 'why' way too much.</h1>
                    <p className={styles.intro}>
                        Product person by day, amateur chef and sunset chaser when the laptop closes. I translate technical chaos into experiences that just *work*.
                    </p>
                </AnimatedSection>
            </header>

            <div className={styles.content}>
                {/* Main Bio */}
                <AnimatedSection delay={0.1} direction="left" className={styles.section}>
                    <div className={styles.grid}>
                        <div className={styles.textColumn}>
                            <h2>The Professional Side</h2>
                            <p>
                                Started as an engineer. Quickly discovered I care more about <em>why</em> someone clicks a button than <em>how</em> the button works.
                            </p>
                            <p>
                                At <strong>KPMG</strong>, I built AI tools that saved consultants thousands of hours (and probably a few mental breakdowns). Before that, I learned how to scale messy, real-world systems at <strong>Oracle</strong> and <strong>Reliance Jio</strong>.
                            </p>
                            <p>
                                These days, I live in the beautiful chaos between 'this could work' and 'let's ship it.' 0-to-1 AI products? Love it. Optimizing dashboards with real user feedback? Also love it. The thread? Making things that people don't have to fight with.
                            </p>
                        </div>
                        <div className={styles.imageColumn}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/about-grad.jpg"
                                    alt="Graduation moment"
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Beyond Work */}
                <AnimatedSection delay={0.2} direction="right" className={styles.section}>
                    <div className={`${styles.grid} ${styles.reverseMobile}`}>
                        <div className={styles.imageColumn}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/about-casual.jpg"
                                    alt="Casual vibes"
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                        <div className={styles.textColumn}>
                            <h2>Beyond Work</h2>
                            <p>
                                Look, I love building products. But if I don't step away from Cursor occasionally, I start optimizing my grocery list.
                            </p>
                            <p>
                                So I cook. Obsessively. My kitchen scale gets more use than my standing desk, and I've definitely Googled 'perfect pasta water salinity' at 2 AM. Pour-over coffee? It's a science experiment every morning.
                            </p>
                            <p>
                                When I'm not nerding out over flavor profiles, I'm either chasing that perfect golden hour shot with my camera, yelling at my TV during a football match (Manchester United, don't @ me), or planning my next culinary disaster/masterpiece.
                            </p>
                            <p>
                                The best product ideas don't come from staring at a screen—they come from living life and noticing what's broken.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Values/Philosophy - Kept from previous but simplified */}
                <AnimatedSection delay={0.3} className={styles.section}>
                    <h2 className={styles.centerTitle}>My Philosophy</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <h3>Clarity over Complexity</h3>
                            <p>If you can't explain it to your grandma, you don't get it yet.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Bias for Action</h3>
                            <p>Done beats perfect. Ship it, then fix it.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>User Obsessed</h3>
                            <p>Numbers show what broke. Conversations show why.</p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}

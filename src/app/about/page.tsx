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
                    <h1>Obsessed with the <em>why</em>.</h1>
                    <p className={styles.intro}>
                        I bridge the gap between technical complexity and user delight.
                        But when I'm not building products, I'm usually deconstructing a recipe or chasing a sunset.
                    </p>
                </AnimatedSection>
            </header>

            <div className={styles.content}>
                {/* Main Bio */}
                <AnimatedSection delay={0.1} className={styles.section}>
                    <div className={styles.grid}>
                        <div className={styles.textColumn}>
                            <h2>The Professional Side</h2>
                            <p>
                                My journey started in engineering, but I quickly realized my true passion lay in the human stories behind the code.
                                At <strong>KPMG</strong>, I led the charge on internal AI tools, helping consultants save thousands of hours.
                                Before that, I cut my teeth at <strong>Oracle</strong> and <strong>Reliance Jio</strong>, learning how to scale data-driven systems.
                            </p>
                            <p>
                                I thrive in ambiguity. Whether it's defining a roadmap for a 0-to-1 AI product or optimizing a mature analytics dashboard,
                                I focus on delivering tangible business value while keeping the user experience pristine.
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
                <AnimatedSection delay={0.2} className={styles.section}>
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
                                Product management is my craft, but creation is my outlet. I treat my kitchen like a lab—obsessively weighing coffee beans
                                to dial in the perfect pour-over or iterating on a pasta sauce until it hits that specific flavor profile.
                            </p>
                            <p>
                                When the laptop closes, I'm either chasing golden hour light with my camera, shouting at the TV during a football match
                                (it gets emotional), or planning my next culinary experiment. I believe the best ideas often come when you step
                                away from the screen and let life happen.
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
                            <p>If you can't explain it simply, you don't understand it well enough.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Bias for Action</h3>
                            <p>Shipping and learning beats perfect planning every time.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>User Obsessed</h3>
                            <p>Data tells you what happened. Users tell you why.</p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}

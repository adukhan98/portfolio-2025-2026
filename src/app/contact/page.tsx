import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Contact | Adnaan Khan",
    description:
        "Get in touch for hiring, partnership, or AI product opportunities.",
};

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <AnimatedSection>
                    <h1>Let's talk.</h1>
                    <p>
                        Hiring? Building something ambitious? Just want to chat about AI products or the perfect espresso grind? I'm down for all of it.
                    </p>
                    <p>
                        Drop me a line below, or find me on the usual internet corners →
                    </p>
                </AnimatedSection>
            </header>

            <div className={styles.content}>
                <AnimatedSection delay={0.1} direction="left" className={styles.formSection}>
                    <h2>Send a Message</h2>
                    <ContactForm />
                </AnimatedSection>

                <AnimatedSection delay={0.2} direction="right" className={styles.aside}>
                    <div className={styles.asideCard}>
                        <h3>Download Resume</h3>
                        <p>A detailed look at my work and skills.</p>
                        <Button href="/resume.pdf" variant="secondary" download>
                            Download PDF
                        </Button>
                    </div>

                    <div className={styles.asideCard}>
                        <h3>Connect</h3>
                        <p>Let's connect.</p>
                        <div className={styles.socialLinks}>
                            <a
                                href="https://www.linkedin.com/in/adnaankhan98/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/adukhan98"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                                GitHub
                            </a>
                            <a
                                href="https://www.instagram.com/theadnaankhan?igsh=MWhnZ3d1MWlqMXMzMQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Instagram"
                            >
                                <Instagram size={24} />
                                Instagram
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}

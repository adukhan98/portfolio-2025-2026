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
                    <h1>Let&apos;s build something meaningful.</h1>
                    <p>
                        Whether you&apos;re hiring, partnering, or exploring AI-enabled product
                        opportunities—I&apos;d love to connect.
                    </p>
                </AnimatedSection>
            </header>

            <div className={styles.content}>
                <AnimatedSection delay={0.1} className={styles.formSection}>
                    <h2>Send a Message</h2>
                    <ContactForm />
                </AnimatedSection>

                <AnimatedSection delay={0.2} className={styles.aside}>
                    <div className={styles.asideCard}>
                        <h3>Download Resume</h3>
                        <p>Get a detailed overview of my experience and skills.</p>
                        <Button href="/resume.pdf" variant="secondary" download>
                            Download PDF
                        </Button>
                    </div>

                    <div className={styles.asideCard}>
                        <h3>Connect</h3>
                        <p>Find me on professional networks.</p>
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

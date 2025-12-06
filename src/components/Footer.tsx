import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react"; // Import Instagram
import styles from "./Footer.module.css";

// Updated Footer with correct social links and Instagram
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoHighlight}>AK</span>
                        </Link>
                        <p className={styles.tagline}>
                            Building products that matter.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className={styles.links}>
                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkGroupTitle}>Navigation</h4>
                            <Link href="/experience">Experience</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </nav>

                    {/* Socials */}
                    <div className={styles.socials}>
                        <h4 className={styles.linkGroupTitle}>Connect</h4>
                        <div className={styles.socialIcons}>
                            <a
                                href="https://www.linkedin.com/in/adnaankhan98/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className={styles.socialLink}
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/adukhan98"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className={styles.socialLink}
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/theadnaankhan?igsh=MWhnZ3d1MWlqMXMzMQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className={styles.socialLink}
                            >
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {currentYear} Adnaan Khan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText } from "lucide-react";
import styles from "./Transcript.module.css";

interface TranscriptProps {
    text: string;
    title?: string;
    defaultExpanded?: boolean;
    onToggle?: (isExpanded: boolean) => void;
}

export default function Transcript({
    text,
    title = "Transcript",
    defaultExpanded = false,
    onToggle,
}: TranscriptProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleExpanded = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        onToggle?.(newState);
    };

    // Handle scroll into view when expanding via hash
    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash === "#transcript") {
            // Use a small delay to avoid cascading render warning and ensure DOM is ready
            const timer = setTimeout(() => {
                setIsExpanded(true);
                buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    // Respect prefers-reduced-motion
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Split text into paragraphs
    const paragraphs = text.split("\n\n").filter(Boolean);

    return (
        <div className={styles.transcriptWrapper} id="transcript">
            <button
                ref={buttonRef}
                className={styles.toggleButton}
                onClick={toggleExpanded}
                aria-expanded={isExpanded}
                aria-controls="transcript-content"
            >
                <FileText size={18} className={styles.icon} />
                <span>{title}</span>
                <ChevronDown
                    size={20}
                    className={`${styles.chevron} ${isExpanded ? styles.chevronUp : ""}`}
                />
            </button>

            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        id="transcript-content"
                        className={styles.contentWrapper}
                        initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div ref={contentRef} className={styles.content}>
                            {paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

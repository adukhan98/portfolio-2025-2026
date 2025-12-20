"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Preloader.module.css";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const name = "adnaan khan";

    useEffect(() => {
        // Dismiss preloader after animation completes
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // Slightly increased to allow for smoother exit
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3,
            }
        }
    };

    const letterVariants = {
        initial: { opacity: 0, y: 20, filter: "blur(10px)" },
        animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }
        }
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className={styles.preloader}
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
                    }}
                >
                    <div className={styles.content}>
                        <motion.div
                            className={styles.logo}
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                        >
                            {name.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    className={styles.letter}
                                    variants={letterVariants}
                                    style={{ marginRight: char === " " ? "0.5em" : "0" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                        <div className={styles.lineWrapper}>
                            <motion.div
                                className={styles.line}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1.5, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

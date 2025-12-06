"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
        "idle"
    );

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate form submission (replace with actual EmailJS or API call)
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={styles.input}
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === "sending"}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={styles.input}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === "sending"}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                    disabled={status === "sending"}
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "sending"}
            >
                {status === "sending" ? "Sending..." : "Send Message"}
            </Button>

            <AnimatePresence>
                {status === "success" && (
                    <motion.div
                        className={styles.successMessage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Thank you! I&apos;ll get back to you soon.
                    </motion.div>
                )}
                {status === "error" && (
                    <motion.div
                        className={styles.errorMessage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        Something went wrong. Please try again.
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
}

"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Button.module.css";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
    download?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    onClick,
    disabled = false,
    type = "button",
    className = "",
    download = false,
}: ButtonProps) {
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    const buttonContent = (
        <motion.span
            className={styles.content}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.span>
    );

    if (href) {
        if (href.startsWith("http") || download) {
            return (
                <a
                    href={href}
                    className={buttonClass}
                    target={download ? undefined : "_blank"}
                    rel={download ? undefined : "noopener noreferrer"}
                    download={download}
                >
                    {buttonContent}
                </a>
            );
        }
        return (
            <Link href={href} className={buttonClass}>
                {buttonContent}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonContent}
        </button>
    );
}

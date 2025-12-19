"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const directionOffset = {
        up: { x: 0, y: 50 },
        down: { x: 0, y: -50 },
        left: { x: 50, y: 0 },
        right: { x: -50, y: 0 },
    };

    const offset = directionOffset[direction];

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

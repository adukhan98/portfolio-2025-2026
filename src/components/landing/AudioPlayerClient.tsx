"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, RotateCcw, Loader2 } from "lucide-react";
import styles from "./AudioPlayer.module.css";

interface AudioPlayerClientProps {
    audioSrc: string;
    title: string;
    onStart?: () => void;
    onPause?: () => void;
    onComplete?: () => void;
    onProgress?: (percent: number) => void;
    onError?: () => void;
}

export default function AudioPlayerClient({
    audioSrc,
    title,
    onStart,
    onPause,
    onComplete,
    onProgress,
    onError,
}: AudioPlayerClientProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<Set<number>>(new Set());

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    // Format time as mm:ss
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    // Handle play/pause toggle
    const togglePlay = useCallback(async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (hasError) {
            // Retry on error
            setHasError(false);
            setIsLoading(true);
            audio.load();
            return;
        }

        try {
            if (isPlaying) {
                audio.pause();
                onPause?.();
            } else {
                setIsLoading(true);
                await audio.play();
                if (!hasStarted) {
                    setHasStarted(true);
                    onStart?.();
                }
            }
        } catch (err) {
            console.error("Audio playback error:", err);
            setHasError(true);
            setIsLoading(false);
            onError?.();
        }
    }, [isPlaying, hasStarted, hasError, onStart, onPause, onError]);

    // Handle seek
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const newTime = parseFloat(e.target.value);
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    // Handle volume change
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const newVolume = parseFloat(e.target.value);
        audio.volume = newVolume;
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
    };

    // Toggle mute
    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isMuted) {
            audio.volume = volume || 1;
            setIsMuted(false);
        } else {
            audio.volume = 0;
            setIsMuted(true);
        }
    };

    // Audio event handlers
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
            setIsLoading(false);
        };

        const handleCanPlay = () => {
            setIsLoading(false);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);

            // Track progress milestones
            if (audio.duration > 0) {
                const percent = (audio.currentTime / audio.duration) * 100;
                [25, 50, 75].forEach((milestone) => {
                    if (percent >= milestone && !progressRef.current.has(milestone)) {
                        progressRef.current.add(milestone);
                        onProgress?.(milestone);
                    }
                });
            }
        };

        const handlePlay = () => {
            setIsPlaying(true);
            setIsLoading(false);
        };

        const handlePause = () => {
            setIsPlaying(false);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            if (!progressRef.current.has(100)) {
                progressRef.current.add(100);
                onProgress?.(100);
            }
            onComplete?.();
        };

        const handleError = () => {
            setHasError(true);
            setIsLoading(false);
            setIsPlaying(false);
            onError?.();
        };

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("canplay", handleCanPlay);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);
        audio.addEventListener("ended", handleEnded);
        audio.addEventListener("error", handleError);

        return () => {
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("canplay", handleCanPlay);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
            audio.removeEventListener("ended", handleEnded);
            audio.removeEventListener("error", handleError);
        };
    }, [onComplete, onProgress, onError]);

    // Respect prefers-reduced-motion
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className={styles.playerWrapper}>
            <audio
                ref={audioRef}
                src={audioSrc}
                preload="metadata"
                aria-label={title}
            />

            <AnimatePresence mode="wait">
                {!hasStarted ? (
                    // Initial "Start Listening" button
                    <motion.button
                        key="start"
                        className={styles.startButton}
                        onClick={togglePlay}
                        disabled={isLoading}
                        aria-label="Start listening to resume summary"
                        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                        animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                        exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                        whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    >
                        {isLoading ? (
                            <Loader2 className={styles.spinnerIcon} size={24} />
                        ) : (
                            <Play className={styles.playIcon} size={24} />
                        )}
                        <span>Start Listening</span>
                    </motion.button>
                ) : (
                    // Full player controls
                    <motion.div
                        key="player"
                        className={styles.playerControls}
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                    >
                        {/* Play/Pause button */}
                        <button
                            className={styles.controlButton}
                            onClick={togglePlay}
                            aria-label={hasError ? "Retry playback" : isPlaying ? "Pause" : "Play"}
                        >
                            {isLoading ? (
                                <Loader2 className={styles.spinnerIcon} size={20} />
                            ) : hasError ? (
                                <RotateCcw size={20} />
                            ) : isPlaying ? (
                                <Pause size={20} />
                            ) : (
                                <Play size={20} />
                            )}
                        </button>

                        {/* Time display */}
                        <span className={styles.timeDisplay}>
                            {formatTime(currentTime)}
                        </span>

                        {/* Seek bar */}
                        <div className={styles.seekWrapper}>
                            <div
                                className={styles.seekProgress}
                                style={{ width: `${progressPercent}%` }}
                            />
                            <input
                                type="range"
                                className={styles.seekBar}
                                min={0}
                                max={duration || 100}
                                step={0.1}
                                value={currentTime}
                                onChange={handleSeek}
                                aria-label="Seek audio"
                            />
                        </div>

                        {/* Duration */}
                        <span className={styles.timeDisplay}>
                            {formatTime(duration)}
                        </span>

                        {/* Volume controls */}
                        <div className={styles.volumeWrapper}>
                            <button
                                className={styles.controlButton}
                                onClick={toggleMute}
                                aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                            </button>
                            <input
                                type="range"
                                className={styles.volumeBar}
                                min={0}
                                max={1}
                                step={0.05}
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                aria-label="Volume"
                            />
                        </div>

                        {/* Error message */}
                        {hasError && (
                            <span className={styles.errorText}>
                                Failed to load. Tap to retry.
                            </span>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

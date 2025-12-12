// Resume summary data - single source of truth for audio and transcript
export const resumeSummary = {
    version: "1.0",
    title: "About Adnaan Khan",
    scriptText: `Hi, I'm Adnaan Khan — a product builder focused on AI-powered solutions that eliminate manual work and help enterprises scale.

I've spent the last several years at the intersection of product management, AI, and enterprise software. Currently, I'm building intelligent automation systems that help organizations make better decisions faster.

My background spans AI product development, from LLM evaluation frameworks to multi-agent systems. I've led teams building voice-powered productivity tools, automated knowledge extraction pipelines, and enterprise-grade AI applications.

What drives me is turning complex technical capabilities into elegant, user-friendly products. I believe the best AI products are the ones that feel invisible — they just work, making people's lives easier without requiring them to understand the technology underneath.

Previously, I've worked across startups and established companies, always gravitating toward roles where I could bridge the gap between technical possibilities and real user needs.

When I'm not building products, you'll find me exploring new AI research, mentoring aspiring PMs, or thinking about the future of human-AI collaboration.

If you're working on something interesting in AI, I'd love to connect. Let's build something meaningful together.`,
    audioSrc: "/audio/resume-summary-v1.mp3",
    durationSeconds: 90,
    lastUpdatedISO: "2024-12-12"
};

export type ResumeSummary = typeof resumeSummary;

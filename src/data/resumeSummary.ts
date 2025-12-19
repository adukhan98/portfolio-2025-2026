// Resume summary data - single source of truth for audio and transcript
export const resumeSummary = {
    version: "1.0",
    title: "About Adnaan Khan",
    scriptText: `Hey—Adnaan here.

I build AI products that don't feel like AI products. You know, the kind that just *work* without making you read a manual or question your life choices.

I've spent the last few years in consulting, building AI tooling and enterprise software solutions. Right now, I'm building intelligent automation systems—basically, software that helps teams make better decisions without drowning in spreadsheets.

My background? Think LLM evaluation frameworks, multi-agent systems, voice-powered productivity tools, and automated knowledge pipelines. Sounds fancy, but really it's about taking complex tech and making it feel stupidly simple.

What gets me out of bed: turning cutting-edge AI into products that *disappear*. The best tools are invisible—they just make life easier.

I've worked across startups and big companies, always gravitating toward the messy middle where technical possibility meets actual human need.

When I'm not shipping features, I'm reading AI research papers, mentoring students and immigrants, or thinking wayy too hard about the future of human-AI collaboration.

Building something cool in AI? Let's connect. I'm always down to jam on interesting problems.`,
    audioSrc: "/audio/resume-summary-v1.mp3",
    durationSeconds: 90,
    lastUpdatedISO: "2024-12-12"
};

export type ResumeSummary = typeof resumeSummary;

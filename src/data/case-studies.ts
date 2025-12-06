export interface CaseStudy {
    slug: string;
    title: string;
    summary: string;
    problem: string;
    discovery: string;
    solution: string;
    impact: string[];
    tags: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "ai-productivity-hub",
        title: "AI Productivity Hub – Driving Enterprise-Wide GenAI Adoption",
        summary:
            "An internal hub that accelerated AI adoption through structured enablement, governance, and feedback systems.",
        problem:
            "Teams struggled with fragmented prompt usage, repeat questions, and no consistent framework to apply AI correctly. This led to inconsistent results, wasted time rediscovering solutions, and growing skepticism about AI's practical value in daily work.",
        discovery:
            "Through stakeholder interviews and usage analysis, I discovered that users wanted both confidence in results and simplicity in onboarding. They needed trusted, pre-vetted resources rather than having to figure things out on their own.",
        solution:
            "Built a centralized platform containing tested prompt templates, quick-start videos, role-specific workflows, and feedback intake mechanisms. The hub included governance guidelines, usage guardrails, and a continuously updated library of 50+ production-ready prompts.",
        impact: [
            "Adoption grew from 20 users to 150+ in under 3 months",
            "Reduced repetitive support requests by 40%",
            "Moved the organization toward responsible and standardized AI usage",
            "Created a scalable model for AI enablement across the enterprise",
        ],
        tags: ["GenAI", "Enterprise", "Change Management", "Microsoft Copilot"],
    },
    {
        slug: "voice-notes-to-todos",
        title: "Voice Notes to TODOs – Automating Follow-Ups for Busy Teams",
        summary:
            "An MVP built using Claude Code to convert hallway conversations into structured action items.",
        problem:
            "Fast-moving teams forgot critical tasks because notes lived in fragmented voice clips or memory. Important decisions made in hallway conversations or quick calls were lost, leading to dropped balls and missed deadlines.",
        discovery:
            "Observing team workflows revealed that the friction of manual note-taking during conversations prevented capture altogether. Users needed a zero-effort solution that would work within their natural communication patterns.",
        solution:
            "Developed a voice-to-structured-actions workflow that processes audio recordings and generates tasks, bugs, owners, and deadlines automatically. The system uses Claude to understand context and extract actionable items with appropriate categorization.",
        impact: [
            "Reported 30% less manual writing during pilots",
            "Friction-free capture of context without workflow disruption",
            "Improved team accountability through clear ownership assignment",
            "Prototype validated in under 2 weeks with positive user feedback",
        ],
        tags: ["Claude Code", "Voice AI", "Productivity", "MVP"],
    },
    {
        slug: "multi-agent-automations",
        title: "Multi-Agent Automations for Audit Teams",
        summary:
            "Automating repetitive document analysis and summarization across financial workflows.",
        problem:
            "Audit teams spent countless hours on repetitive document review, extracting key information from standardized reports, and summarizing findings. This manual work was error-prone and prevented senior staff from focusing on high-value analysis.",
        discovery:
            "Analysis of audit workflows revealed that 60% of initial document review followed predictable patterns that could be automated. The key insight was that multi-step processes required orchestrated agents rather than single-model solutions.",
        solution:
            "Designed and deployed multi-agent automations using Microsoft Copilot and custom orchestration. Agents specialized in document parsing, information extraction, cross-referencing, and summary generation work together seamlessly.",
        impact: [
            "Saved 25+ hours weekly per team",
            "Scaled consistency and reduced human error in audit pipelines",
            "Freed senior auditors to focus on judgment-based analysis",
            "Created reusable automation patterns for other teams",
        ],
        tags: ["Multi-Agent", "Automation", "Microsoft Copilot", "Financial Services"],
    },
    {
        slug: "llm-evaluation-framework",
        title: "LLM Evaluation Framework for HR Chatbot",
        summary:
            "Automated evaluation to improve model reliability before deployment.",
        problem:
            "An HR chatbot was being deployed with no systematic way to measure response quality, accuracy, or consistency. Manual spot-checking was insufficient for enterprise deployment, and there were concerns about hallucinations and policy compliance.",
        discovery:
            "Research into evaluation methodologies revealed the need for a hybrid approach: automated metrics for scale combined with human-in-the-loop validation for nuanced accuracy. The framework needed to be repeatable across model updates.",
        solution:
            "Developed an LLM evaluation framework blending automated scoring (factuality, relevance, tone) with structured human review. Built a test suite of edge cases and created benchmarks for ongoing model monitoring.",
        impact: [
            "Shortened evaluation cycles by 60%",
            "Increased response accuracy and clarity at scale",
            "Established quality gates for production deployment",
            "Created repeatable process for future chatbot initiatives",
        ],
        tags: ["LLM Evaluation", "HR Tech", "Quality Assurance", "Chatbot"],
    },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
}

export const experiences: Experience[] = [
    {
        company: "KPMG Canada",
        role: "Senior Consultant, AI & Data",
        period: "2024 – Present",
        location: "Toronto, ON",
        description: [
            "Owned product strategy and roadmap for internal AI-enabled solutions used by over 200 consultants across the firm",
            "Shipped multi-agent automations using Microsoft Copilot, Claude Code, and Cursor that reduced manual work by over 25 hours weekly and increased workflow efficiency by 30%",
            "Led cross-functional sprint planning, backlog management, and release tracking across product, engineering, compliance, and security teams",
            "Built a 50+ asset enterprise prompt library with governance, usage guardrails, and training collateral to drive scalable adoption",
            "Designed onboarding and enablement programs leading to a 6x increase in internal usage within 3 months",
            "Developed LLM evaluation frameworks blending human-in-the-loop testing and automated scoring to benchmark performance of enterprise chatbots",
        ],
    },
    {
        company: "Oracle",
        role: "Associate Consultant, Product & Data",
        period: "2020 – 2021",
        location: "Toronto, ON",
        description: [
            "Supported roadmap prioritization for a B2B analytics product using Agile methodologies",
            "Led user research initiatives and translated insights into product requirements",
            "Contributed to measurable improvements in user performance metrics through data-driven feature prioritization",
        ],
    },
    {
        company: "Reliance Jio",
        role: "Product Analyst Intern",
        period: "2019 – 2019",
        location: "Mumbai, India",
        description: [
            "Reduced network downtime by 20% through monitoring workflow improvements and anomaly investigations",
            "Built dashboards to track key network performance indicators",
            "Collaborated with engineering teams to prioritize and resolve critical infrastructure issues",
        ],
    },
];

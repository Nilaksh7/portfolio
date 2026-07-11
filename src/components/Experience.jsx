import { useScrollReveal } from "../hooks/useScrollReveal";

const experiences = [
  {
    role: "Google Gemini Student Ambassador",
    org: "Google Gemini",
    period: "2026 – Present",
    type: "Ambassador",
    color: "#8b5cf6",
    bullets: [
      "Promote Google Gemini and Generative AI through technical sessions, workshops, and community initiatives.",
      "Help students explore practical AI applications, LLMs, and modern developer tools.",
      "Collaborate with Google for Developers programs to increase AI awareness on campus.",
    ],
  },
  {
    role: "Core Team Member",
    org: "Google Developer Student Clubs (GDSC), NIT Delhi",
    period: "2026 – Present",
    type: "Community",
    color: "#60a5fa",
    bullets: [
      "Organize technical workshops, coding events, and developer-focused sessions for the student community.",
      "Collaborate with cross-functional teams to execute campus-wide technical initiatives and hackathons.",
      "Contribute to fostering an active developer ecosystem by mentoring peers and promoting Google technologies.",
    ],
  },
  {
    role: "Database Coordinator",
    org: "Training & Placement Cell, NIT Delhi",
    period: "2025 – Present",
    type: "Leadership",
    color: "#6ee7b7",
    bullets: [
      "Managed placement data for 500+ students and recruiters in a structured database",
      "Coordinated end-to-end placement workflows for 20+ companies visiting NIT Delhi",
      "Built and maintained data pipelines for recruitment reporting and analytics",
    ],
  },
  {
    role: "Technical Team Member",
    org: "Alumni Cell, NIT Delhi",
    period: "2025 – Present",
    type: "Technical",
    color: "#fbbf24",
    bullets: [
      "Develop and maintain technical solutions supporting alumni engagement and institutional initiatives.",
      "Collaborate with the technical team to improve digital platforms and automate operational workflows.",
      "Support event management, website updates, and technology-driven outreach activities.",
    ],
  },
];

export default function Experience() {
  const titleRef = useScrollReveal();
  const listRef = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="reveal mb-12">
          <p className="font-mono text-[#6ee7b7] text-xs uppercase tracking-widest mb-2">
            04 / Experience
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
            Roles & Responsibilities
          </h2>
        </div>

        <div ref={listRef} className="reveal stagger flex flex-col gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-[#16161e] border border-[#1e1e2a] rounded-xl p-6 card-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span
                    className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border mb-2 inline-block"
                    style={{
                      color: exp.color,
                      borderColor: `${exp.color}30`,
                      background: `${exp.color}08`,
                    }}
                  >
                    {exp.type}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#e2e8f0]">
                    {exp.org}
                  </h3>
                  <p className="text-[#9ca3af] text-sm">{exp.role}</p>
                </div>
                <div className="text-[#6b7280] text-sm font-mono shrink-0 bg-[#0a0a0f] px-3 py-1 rounded-full border border-[#1e1e2a]">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[#9ca3af] text-sm">
                    <span
                      style={{ color: exp.color }}
                      className="shrink-0 mt-0.5"
                    >
                      ▸
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

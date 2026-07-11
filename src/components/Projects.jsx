import { useScrollReveal } from "../hooks/useScrollReveal";

function ProjectCard({ project, index }) {
  const cardRef = useScrollReveal();
  const i = index;
  return (
    <div
      ref={cardRef}
      className="reveal bg-[#16161e] border border-[#1e1e2a] rounded-2xl overflow-hidden card-hover group"
    >
      <div
        className={`grid ${i % 2 === 0 ? "lg:grid-cols-[1fr_360px]" : "lg:grid-cols-[360px_1fr]"} gap-0`}
      >
        {/* Info — always first on mobile */}
        <div className={`p-8 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: project.color }}
              >
                Project 0{project.id}
              </span>
              {project.featured && (
                <div className="inline-flex mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    ★ Featured Project
                  </span>
                </div>
              )}
              <h3 className="font-display font-bold text-2xl text-[#e2e8f0] mt-1">
                {project.name}
              </h3>
              <p className="text-[#9ca3af] text-sm mt-1">{project.tagline}</p>
            </div>
          </div>

          <p className="text-[#6b7280] text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Stats */}
          <div className="flex gap-4 mb-5">
            {project.stats.map((s) => (
              <div key={s.label}>
                <div
                  className="font-display font-bold text-lg"
                  style={{ color: project.color }}
                >
                  {s.value}
                </div>
                <div className="text-[#6b7280] text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-mono border"
                style={{
                  borderColor: `${project.color}30`,
                  color: project.color,
                  backgroundColor: `${project.color}08`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#9ca3af] hover:text-[#e2e8f0] transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: project.color }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Visual */}
        <div
          className={`hidden lg:block relative overflow-hidden ${i % 2 !== 0 ? "lg:order-1" : ""}`}
          style={{ backgroundColor: project.accent }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-6">
            {project.visual}
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, ${project.color}08 0%, transparent 70%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    id: 1,
    name: "RepoMind",
    tagline: "AI-powered GitHub Repository Intelligence Platform",
    description:
      "A full-stack repository intelligence platform that indexes GitHub repositories using Retrieval-Augmented Generation (RAG), semantic search, and vector embeddings. Enables AI-powered repository summaries, file explanations, dependency visualization, and conversational code understanding through a scalable multi-service architecture.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Gemini",
      "Cohere",
      "JWT",
      "Google OAuth",
      "Vercel",
      "Render",
      "Supabase",
    ],
    github: "https://github.com/Nilaksh7/RepoMind",
    live: "https://repo-mind-mu.vercel.app/",
    stats: [
      { label: "Indexed Files", value: "29K+" },
      { label: "Embeddings", value: "1536-D" },
      { label: "Services", value: "3" },
    ],
    color: "#8b5cf6",
    accent: "#170b2c",
    featured: true,
    visual: (
      <svg
        viewBox="0 0 320 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2"
      >
        <rect x="40" y="40" width="240" height="100" rx="10" fill="#2c0d5a" />
        <line x1="40" y1="70" x2="280" y2="70" />
        <line x1="40" y1="110" x2="280" y2="110" />
        <circle cx="80" cy="90" r="10" fill="#8b5cf6" />
        <circle cx="160" cy="90" r="10" fill="#8b5cf6" />
        <circle cx="240" cy="90" r="10" fill="#8b5cf6" />
        <line x1="80" y1="90" x2="160" y2="90" />
        <line x1="160" y1="90" x2="240" y2="90" />
        <path
          d="M100 130 L120 150 L140 130"
          stroke="#8b5cf6"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "AI Code Mentor",
    tagline: "AI-powered code analysis & debugging platform",
    description:
      "Built an AI-assisted code analysis platform supporting 15+ programming languages with automated debugging, code optimization, complexity analysis, and intelligent explanations using Google Gemini and the Monaco Editor.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "JWT",
      "Monaco Editor",
    ],
    github: "https://github.com/Nilaksh7/ai-code-mentor",
    live: "https://ai-code-mentor-tau.vercel.app",
    stats: [
      { label: "Languages", value: "15+" },
      { label: "API Requests", value: "100+" },
      { label: "Users", value: "20+" },
    ],
    color: "#6ee7b7",
    accent: "#0a2e22",
    visual: (
      <svg
        viewBox="0 0 320 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="320" height="180" fill="#0d1117" />
        {/* Editor lines */}
        <rect x="12" y="14" width="80" height="6" rx="3" fill="#21262d" />
        <rect x="100" y="14" width="40" height="6" rx="3" fill="#21262d" />
        <rect
          x="12"
          y="30"
          width="140"
          height="4"
          rx="2"
          fill="#6ee7b7"
          opacity="0.4"
        />
        <rect
          x="12"
          y="42"
          width="30"
          height="4"
          rx="2"
          fill="#818cf8"
          opacity="0.7"
        />
        <rect
          x="50"
          y="42"
          width="60"
          height="4"
          rx="2"
          fill="#fbbf24"
          opacity="0.5"
        />
        <rect
          x="120"
          y="42"
          width="30"
          height="4"
          rx="2"
          fill="#f472b6"
          opacity="0.6"
        />
        <rect
          x="12"
          y="54"
          width="20"
          height="4"
          rx="2"
          fill="#9ca3af"
          opacity="0.3"
        />
        <rect
          x="40"
          y="54"
          width="90"
          height="4"
          rx="2"
          fill="#6ee7b7"
          opacity="0.3"
        />
        <rect
          x="12"
          y="66"
          width="50"
          height="4"
          rx="2"
          fill="#818cf8"
          opacity="0.5"
        />
        <rect
          x="12"
          y="78"
          width="110"
          height="4"
          rx="2"
          fill="#9ca3af"
          opacity="0.2"
        />
        <rect
          x="12"
          y="90"
          width="70"
          height="4"
          rx="2"
          fill="#fbbf24"
          opacity="0.4"
        />
        {/* AI panel */}
        <rect
          x="170"
          y="10"
          width="140"
          height="160"
          rx="8"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect
          x="180"
          y="20"
          width="60"
          height="5"
          rx="2.5"
          fill="#6ee7b7"
          opacity="0.8"
        />
        <rect
          x="180"
          y="33"
          width="120"
          height="3"
          rx="1.5"
          fill="#9ca3af"
          opacity="0.3"
        />
        <rect
          x="180"
          y="41"
          width="100"
          height="3"
          rx="1.5"
          fill="#9ca3af"
          opacity="0.3"
        />
        <rect
          x="180"
          y="49"
          width="110"
          height="3"
          rx="1.5"
          fill="#9ca3af"
          opacity="0.3"
        />
        <rect
          x="180"
          y="64"
          width="50"
          height="18"
          rx="4"
          fill="#6ee7b7"
          opacity="0.1"
          stroke="#6ee7b7"
          strokeWidth="0.5"
        />
        <rect
          x="184"
          y="69"
          width="40"
          height="3"
          rx="1.5"
          fill="#6ee7b7"
          opacity="0.5"
        />
        <rect
          x="184"
          y="75"
          width="30"
          height="3"
          rx="1.5"
          fill="#6ee7b7"
          opacity="0.3"
        />
        <circle cx="286" cy="22" r="4" fill="#6ee7b7" opacity="0.9" />
        <text x="283" y="25" fill="#0a0a0f" fontSize="7" fontWeight="bold">
          AI
        </text>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Farm Marketplace",
    tagline: "Full-stack farmer-to-consumer marketplace",
    description:
      "Designed and developed a full-stack farmer-to-consumer marketplace featuring secure authentication, relational database design, REST APIs, and optimized product management with JWT and Google OAuth integration.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "OAuth 2.0"],
    github: "https://github.com/Nilaksh7/farm-marketplace",
    live: null,
    stats: [
      { label: "DB Tables", value: "6+" },
      { label: "Auth", value: "JWT+OAuth" },
      { label: "Stack", value: "Full Stack" },
    ],
    color: "#34d399",
    accent: "#0a2a1e",
    visual: (
      <svg
        viewBox="0 0 320 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="320" height="180" fill="#0d1a0f" />
        {/* Nav */}
        <rect x="0" y="0" width="320" height="28" fill="#0f2012" />
        <rect
          x="12"
          y="10"
          width="40"
          height="8"
          rx="2"
          fill="#34d399"
          opacity="0.8"
        />
        <rect
          x="220"
          y="10"
          width="30"
          height="8"
          rx="2"
          fill="#34d399"
          opacity="0.3"
        />
        <rect
          x="258"
          y="10"
          width="20"
          height="8"
          rx="2"
          fill="#34d399"
          opacity="0.5"
        />
        <rect
          x="286"
          y="10"
          width="22"
          height="8"
          rx="4"
          fill="#34d399"
          opacity="0.9"
        />
        {/* Hero banner */}
        <rect x="0" y="28" width="320" height="60" fill="#102415" />
        <rect
          x="20"
          y="40"
          width="120"
          height="8"
          rx="2"
          fill="#e2e8f0"
          opacity="0.8"
        />
        <rect
          x="20"
          y="54"
          width="90"
          height="5"
          rx="2"
          fill="#9ca3af"
          opacity="0.4"
        />
        <rect x="20" y="66" width="60" height="12" rx="3" fill="#34d399" />
        {/* Product cards */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x={12 + i * 100}
              y="102"
              width="88"
              height="68"
              rx="5"
              fill="#16231a"
              stroke="#1e3024"
              strokeWidth="1"
            />
            <rect
              x={18 + i * 100}
              y="108"
              width="76"
              height="36"
              rx="3"
              fill="#0d1a0f"
            />
            <circle
              cx={56 + i * 100}
              cy="126"
              r="12"
              fill="#34d399"
              opacity="0.15"
            />
            <circle
              cx={56 + i * 100}
              cy="126"
              r="6"
              fill="#34d399"
              opacity="0.4"
            />
            <rect
              x={18 + i * 100}
              y="150"
              width="50"
              height="5"
              rx="2"
              fill="#9ca3af"
              opacity="0.4"
            />
            <rect
              x={18 + i * 100}
              y="159"
              width="35"
              height="5"
              rx="2"
              fill="#34d399"
              opacity="0.6"
            />
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: 4,
    name: "Smart Suitcase",
    tagline: "IoT security system with biometric & GPS tracking",
    description:
      "An IoT-enabled smart luggage system integrating biometric authentication, GPS tracking, GSM communication, and real-time theft alerts using ESP32-based embedded hardware.",
    tech: ["ESP32", "GSM Module", "GPS", "C++", "IoT"],
    github: null,
    live: null,
    stats: [
      { label: "Auth", value: "Biometric" },
      { label: "Tracking", value: "Real-time" },
      { label: "Hardware", value: "ESP32" },
    ],
    color: "#60a5fa",
    accent: "#0a1929",
    visual: (
      <svg
        viewBox="0 0 320 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="320" height="180" fill="#070e18" />
        {/* Suitcase body */}
        <rect
          x="90"
          y="50"
          width="140"
          height="110"
          rx="10"
          fill="#0d1829"
          stroke="#1e3a5f"
          strokeWidth="1.5"
        />
        <rect
          x="115"
          y="40"
          width="90"
          height="18"
          rx="6"
          fill="#0d1829"
          stroke="#1e3a5f"
          strokeWidth="1.5"
        />
        {/* Lock panel */}
        <rect
          x="130"
          y="80"
          width="60"
          height="50"
          rx="6"
          fill="#0a1320"
          stroke="#60a5fa"
          strokeWidth="0.8"
          opacity="0.8"
        />
        {/* Fingerprint icon */}
        <path
          d="M155 95 Q160 89 165 95 M152 100 Q160 90 168 100 M150 106 Q160 93 170 106"
          stroke="#60a5fa"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        <circle cx="160" cy="103" r="3" fill="#60a5fa" opacity="0.5" />
        {/* Status indicator */}
        <circle cx="160" cy="118" r="4" fill="#34d399" opacity="0.9" />
        <circle cx="160" cy="118" r="8" fill="#34d399" opacity="0.1" />
        {/* GPS signal */}
        <circle
          cx="240"
          cy="40"
          r="18"
          fill="#0d1829"
          stroke="#60a5fa"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <path
          d="M240 28 L240 52 M228 40 L252 40"
          stroke="#60a5fa"
          strokeWidth="0.8"
          opacity="0.4"
        />
        <circle cx="240" cy="40" r="5" fill="#60a5fa" opacity="0.6" />
        <text x="229" y="68" fill="#60a5fa" fontSize="6" opacity="0.7">
          GPS Live
        </text>
        {/* Signal waves */}
        {[8, 14, 20].map((r, i) => (
          <circle
            key={i}
            cx="70"
            cy="60"
            r={r}
            fill="none"
            stroke="#60a5fa"
            strokeWidth="0.6"
            opacity={0.3 - i * 0.08}
          />
        ))}
        {/* Handle */}
        <rect x="148" y="44" width="24" height="4" rx="2" fill="#1e3a5f" />
      </svg>
    ),
  },
];

export default function Projects() {
  const titleRef = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6ee7b7]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div ref={titleRef} className="reveal mb-12">
          <p className="font-mono text-[#6ee7b7] text-xs uppercase tracking-widest mb-2">
            03 / Projects
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
            What I've Built
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

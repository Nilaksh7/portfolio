import { useScrollReveal } from "../hooks/useScrollReveal";

const skillGroups = [
  {
    label: "Languages",
    color: "#6ee7b7",
    items: ["C++", "Python", "JavaScript", "TypeScript", "SQL", "C"],
  },

  {
    label: "Frontend",
    color: "#f472b6",
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    label: "Backend",
    color: "#fbbf24",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT",
      "Google OAuth 2.0",
    ],
  },
  {
    label: "Databases",
    color: "#34d399",
    items: ["PostgreSQL", "pgvector", "MongoDB", "MySQL", "Database Design"],
  },
  {
    label: "Cloud & DevOps",
    color: "#60a5fa",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Redis",
      "Supabase",
      "Vercel",
      "Render",
      "Postman",
      "Linux",
    ],
  },
  {
    label: "Computer Science",
    color: "#818cf8",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "System Design",
      "Software Architecture",
      "SDLC",
    ],
  },
];

export default function Skills() {
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#818cf8]/4 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div ref={titleRef} className="reveal mb-12">
          <p className="font-mono text-[#6ee7b7] text-xs uppercase tracking-widest mb-2">
            02 / Skills
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
            Tech Stack
          </h2>
        </div>

        <div
          ref={gridRef}
          className="reveal stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="bg-[#16161e] border border-[#1e1e2a] rounded-xl p-5 card-hover group"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: group.color,
                    boxShadow: `0 0 8px ${group.color}60`,
                  }}
                />
                <h3
                  className="font-display font-semibold text-sm uppercase tracking-wider"
                  style={{ color: group.color }}
                >
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-[#0a0a0f] border border-[#1e1e2a] text-[#9ca3af] text-xs font-mono group-hover:border-opacity-50 transition-all duration-200"
                    style={{ "--hover-color": group.color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

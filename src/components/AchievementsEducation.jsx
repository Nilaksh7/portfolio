import { useScrollReveal } from "../hooks/useScrollReveal";

const achievements = [
  {
    title: "AIR 323",
    desc: "ERoH National Level Competitive Programming Contest",
    icon: "🏆",
    color: "#fbbf24",
  },
  {
    title: "Knight",
    desc: "LeetCode — 1850+ Contest Rating",
    icon: "♞",
    color: "#f97316",
  },
  {
    title: "Pupil",
    desc: "Codeforces — Competitive Programming",
    icon: "⚔️",
    color: "#60a5fa",
  },
  {
    title: "2nd Place",
    desc: "AlgoUniversity Graph Contest at NIT Delhi",
    icon: "🥈",
    color: "#a78bfa",
  },
  {
    title: "Selected",
    desc: "Google Gemini Student Ambassador",
    icon: "✨",
    color: "#8b5cf6",
  },
  {
    title: "2 X Semi-Finalist",
    desc: "Industrial Hackathon — DSIIDC & HackIndia",
    icon: "🚀",
    color: "#6ee7b7",
  },
  {
    title: "Invited Delegate",
    desc: "IIT Kanpur — Representing NIT Delhi Think India",
    icon: "🎓",
    color: "#f472b6",
  },
  {
    title: "Top 1 Percentile",
    desc: "JEE — National Competitive Examination",
    icon: "🎯",
    color: "#ef4444",
  },
];


const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "NIT Delhi",
    period: "2024 – Expected 2028",
    grade: "CGPA: 8.19",
    color: "#6ee7b7",
  },
  {
    degree: "Class 12 — PCM",
    institution: "Bhavan Vidyalaya, Chandigarh",
    period: "2023 – 2024",
    grade: "92.8%",
    color: "#818cf8",
  },
  {
    degree: "Class 10",
    institution: "DAV Public School, Ludhiana",
    period: "2020 – 2021",
    grade: "99%",
    color: "#fbbf24",
  },
];

export default function AchievementsEducation() {
  const titleRefA = useScrollReveal();
  const achieveRef = useScrollReveal();
  const titleRefE = useScrollReveal();
  const eduRef = useScrollReveal();

  return (
    <>
      {/* Achievements */}
      <section id="achievements" className="py-16 relative scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={titleRefA} className="reveal mb-10">
            <p className="font-mono text-[#6ee7b7] text-xs uppercase tracking-widest mb-2">
              05 / Achievements
            </p>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
              Highlights
            </h2>
          </div>

          <div
            ref={achieveRef}
            className="reveal stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {achievements.map((a, index) => (
              <div
                key={`${a.title}-${index}`}
                className="bg-[#16161e] border border-[#1e1e2a] rounded-xl p-6 card-hover text-center"
              >
                <div className="text-4xl mb-3">{a.icon}</div>

                <div
                  className="font-display font-bold text-xl mb-1"
                  style={{ color: a.color }}
                >
                  {a.title}
                </div>

                <div className="text-[#9ca3af] text-sm">
                  {a.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 relative scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={titleRefE} className="reveal mb-10">
            <p className="font-mono text-[#6ee7b7] text-xs uppercase tracking-widest mb-2">
              06 / Education
            </p>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
              Academic Background
            </h2>
          </div>

          <div
            ref={eduRef}
            className="reveal stagger grid md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {education.map((e) => (
              <div
                key={e.institution}
                className="bg-[#16161e] border border-[#1e1e2a] rounded-xl p-6 card-hover h-full flex flex-col"
              >
                <div
                  className="font-mono text-xs uppercase tracking-wider mb-3 flex items-center gap-2"
                  style={{ color: e.color }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: e.color }}
                  />

                  {e.period}
                </div>

                <h3 className="font-display font-bold text-lg text-[#e2e8f0] mb-1">
                  {e.degree}
                </h3>

                <p className="text-[#9ca3af] text-sm mb-5 flex-1">
                  {e.institution}
                </p>

                <div className="mt-auto">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      color: e.color,
                      backgroundColor: `${e.color}12`,
                      border: `1px solid ${e.color}30`,
                    }}
                  >
                    {e.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

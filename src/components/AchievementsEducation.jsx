import { useScrollReveal } from '../hooks/useScrollReveal'

const achievements = [
  {
    title: 'AIR 323 / 20,000+',
    desc: 'EROH Competitive Programming Contest',
    icon: '🏆',
    color: '#fbbf24',
  },
  {
    title: '2nd Place',
    desc: 'AlgoUniversity Graph Contest — 500+ participants',
    icon: '🥈',
    color: '#60a5fa',
  },
  {
    title: '200+ Problems',
    desc: 'LeetCode — Arrays, Graphs, Trees, DP',
    icon: '⚡',
    color: '#6ee7b7',
  },
]

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'NIT Delhi',
    period: '2024 – Expected 2028',
    grade: 'CGPA: 8.25',
    color: '#6ee7b7',
  },
  {
    degree: 'Class 12 — PCM',
    institution: 'Bhavan Vidyalaya, Chandigarh',
    period: '2022 – 2024',
    grade: '92.8%',
    color: '#818cf8',
  },
]

export default function AchievementsEducation() {
  const titleRefA = useScrollReveal()
  const achieveRef = useScrollReveal()
  const titleRefE = useScrollReveal()
  const eduRef = useScrollReveal()

  return (
    <>
      {/* Achievements */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={titleRefA} className="reveal mb-10">
            <p className="font-mono text-[#6ee7b7] text-xs uppercase tracking-widest mb-2">05 / Achievements</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
              Highlights
            </h2>
          </div>
          <div ref={achieveRef} className="reveal stagger grid sm:grid-cols-3 gap-4">
            {achievements.map(a => (
              <div
                key={a.title}
                className="bg-[#16161e] border border-[#1e1e2a] rounded-xl p-6 card-hover text-center"
              >
                <div className="text-4xl mb-3">{a.icon}</div>
                <div
                  className="font-display font-bold text-xl mb-1"
                  style={{ color: a.color }}
                >
                  {a.title}
                </div>
                <div className="text-[#9ca3af] text-sm">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={titleRefE} className="reveal mb-10">
            <p className="font-mono text-[#6ee7b7] text-xs uppercase tracking-widest mb-2">06 / Education</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
              Academic Background
            </h2>
          </div>
          <div ref={eduRef} className="reveal stagger grid sm:grid-cols-2 gap-4">
            {education.map(e => (
              <div
                key={e.institution}
                className="bg-[#16161e] border border-[#1e1e2a] rounded-xl p-6 card-hover"
              >
                <div
                  className="font-mono text-xs uppercase tracking-wider mb-3 flex items-center gap-2"
                  style={{ color: e.color }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: e.color }} />
                  {e.period}
                </div>
                <h3 className="font-display font-bold text-lg text-[#e2e8f0] mb-1">
                  {e.degree}
                </h3>
                <p className="text-[#9ca3af] text-sm mb-3">{e.institution}</p>
                <div
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ color: e.color, backgroundColor: `${e.color}12`, border: `1px solid ${e.color}30` }}
                >
                  {e.grade}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

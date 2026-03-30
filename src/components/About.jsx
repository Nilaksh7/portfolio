import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  { label: 'University', value: 'NIT Delhi', sub: 'B.Tech CSE' },
  { label: 'CGPA', value: '8.25', sub: 'Expected 2028' },
  { label: 'DSA Problems', value: '200+', sub: 'LeetCode' },
  { label: 'Projects', value: '3+', sub: 'Deployed' },
]

export default function About() {
  const titleRef = useScrollReveal()
  const contentRef = useScrollReveal()
  const statsRef = useScrollReveal()

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div ref={titleRef} className="reveal mb-12">
          <p className="font-mono text-[#6ee7b7] text-xs uppercase tracking-widest mb-2">01 / About</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div ref={contentRef} className="reveal space-y-4">
            <p className="text-[#9ca3af] text-base leading-relaxed">
              I'm a Computer Science undergraduate at{' '}
              <span className="text-[#e2e8f0] font-medium">NIT Delhi</span> with a
              CGPA of <span className="text-[#6ee7b7] font-semibold">8.25</span>,
              building a strong foundation in Data Structures, Algorithms, and
              full-stack development.
            </p>
            <p className="text-[#9ca3af] text-base leading-relaxed">
              I've solved{' '}
              <span className="text-[#6ee7b7] font-semibold">200+ DSA problems</span>{' '}
              across arrays, graphs, and trees — ranking{' '}
              <span className="text-[#e2e8f0] font-medium">AIR 323 / 20,000+</span>{' '}
              in competitive contests. On the engineering side, I build scalable
              applications using React.js, Node.js, and MongoDB with a focus on
              backend optimization and system design.
            </p>
            <p className="text-[#9ca3af] text-base leading-relaxed">
              Currently seeking{' '}
              <span className="text-[#818cf8] font-medium">
                Software Engineering Internship
              </span>{' '}
              opportunities where I can contribute meaningfully and grow fast.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['C++', 'Python', 'JavaScript', 'MERN Stack', 'REST APIs', 'MongoDB'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#16161e] border border-[#1e1e2a] text-[#9ca3af] text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="reveal">
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(h => (
                <div
                  key={h.label}
                  className="bg-[#16161e] border border-[#1e1e2a] rounded-xl p-5 card-hover group"
                >
                  <div className="text-3xl font-display font-bold text-gradient mb-1">
                    {h.value}
                  </div>
                  <div className="text-[#e2e8f0] text-sm font-medium">{h.label}</div>
                  <div className="text-[#6b7280] text-xs mt-0.5">{h.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

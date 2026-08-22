import { useScrollReveal } from "../hooks/useScrollReveal";

const highlights = [
  { label: "University", value: "NIT Delhi", sub: "B.Tech CSE" },
  { label: "CGPA", value: "8.19", sub: "Current" },
  { label: "DSA Solved", value: "500+", sub: "Across Platforms" },
  { label: "LeetCode", value: "Knight", sub: "1850+ Rating" },

  { label: "Codeforces", value: "Pupil", sub: "Competitive Programmer" },

  
  { label: "Featured Project", value: "RepoMind", sub: "RAG + LLM Platform" },
];

export default function About() {
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div ref={titleRef} className="reveal mb-12">
          <p className="font-mono text-[#6ee7b7] text-xs uppercase tracking-widest mb-2">
            01 / About
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div ref={contentRef} className="reveal space-y-4">
            <p className="text-[#9ca3af] text-base leading-relaxed">
              I'm a{" "}
              <span className="text-[#e2e8f0] font-medium">
                Computer Science undergraduate at NIT Delhi
              </span>{" "}
              passionate about building scalable software and AI-powered
              developer tools. I enjoy solving complex engineering problems
              across full-stack development, backend systems, and modern AI
              applications.
            </p>

            <p className="text-[#9ca3af] text-base leading-relaxed">
  I have solved{" "}
  <span className="text-[#6ee7b7] font-semibold">
    500+ DSA problems
  </span>{" "}
  across multiple coding platforms and hold a{" "}
  <span className="text-[#e2e8f0] font-medium">
    Knight rating (1850+) on LeetCode
  </span>{" "}
  and{" "}
  <span className="text-[#e2e8f0] font-medium">
    Pupil rating on Codeforces
  </span>
  . I also secured{" "}
  <span className="text-[#e2e8f0] font-medium">
    2nd place in the AlgoUniversity Graph Contest
  </span>{" "}
  held at NIT Delhi. My recent work focuses on Retrieval-Augmented
  Generation (RAG), semantic search, vector databases, and designing
  production-ready full-stack applications.
</p>

            <p className="text-[#9ca3af] text-base leading-relaxed">
              As a{" "}
              <span className="text-[#8b5cf6] font-medium">
                Google Gemini Student Ambassador
              </span>{" "}
              and active contributor to the Google Developer Student Clubs
              community, I'm continuously exploring Large Language Models,
              system design, and cloud-native architectures while seeking
              opportunities to build impactful software products.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "React",
                "Node.js",
                "Express.js",
                "FastAPI",
                "SQL",
                "RAG",
                "LLMs",
                "System Design",
              ].map((tag) => (
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
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-[#16161e] border border-[#1e1e2a] rounded-xl p-5 card-hover group"
                >
                  <div className="text-3xl font-display font-bold text-gradient mb-1">
                    {h.value}
                  </div>
                  <div className="text-[#e2e8f0] text-sm font-medium">
                    {h.label}
                  </div>
                  <div className="text-[#6b7280] text-xs mt-0.5">{h.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

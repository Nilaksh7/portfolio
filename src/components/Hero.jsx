import { useEffect, useRef } from "react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Nilaksh7",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nilaksh-berwal-g07071952",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Nilakshbe7/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
  label: "Codeforces",
  href: "https://codeforces.com/profile/Nilaksh7",
  icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.5 2.5C3.12 2.5 2 3.62 2 5v14c0 1.38 1.12 2.5 2.5 2.5h2C7.88 21.5 9 20.38 9 19V5c0-1.38-1.12-2.5-2.5-2.5h-2zm7.5 4C10.62 6.5 9.5 7.62 9.5 9v10c0 1.38 1.12 2.5 2.5 2.5h2c1.38 0 2.5-1.12 2.5-2.5V9c0-1.38-1.12-2.5-2.5-2.5h-2zm7.5 4C18.12 10.5 17 11.62 17 13v6c0 1.38 1.12 2.5 2.5 2.5h2c1.38 0 2.5-1.12 2.5-2.5v-6c0-1.38-1.12-2.5-2.5-2.5h-2z" />
    </svg>
  ),
},
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(110, 231, 183, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6ee7b7]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#818cf8]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(110,231,183,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,231,183,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6ee7b7]/25 bg-[#6ee7b7]/5 text-[#6ee7b7] text-xs font-mono mb-6"
            style={{ animation: "fadeUp 0.5s ease 0.1s both" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7] animate-pulse" />
            Open to Internship Opportunities
          </div>

          {/* Name */}
          <h1
            className="font-display font-bold leading-[1.05] mb-4"
            style={{ animation: "fadeUp 0.5s ease 0.2s both" }}
          >
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-[#e2e8f0]">
              Nilaksh
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-gradient">
              Berwal
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="font-mono text-[#6ee7b7] text-sm sm:text-base mb-4 tracking-widest uppercase"
            style={{ animation: "fadeUp 0.5s ease 0.3s both" }}
          >
            Full Stack Developer · Problem Solver
          </p>

          {/* Description */}
          <p
            className="text-[#9ca3af] text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            style={{ animation: "fadeUp 0.5s ease 0.4s both" }}
          >
            CS undergraduate at{" "}
            <span className="text-[#e2e8f0] font-medium">NIT Delhi</span>{" "}
            building scalable full-stack systems. Passionate about clean
            architecture and solving real-world problems with elegant code.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            style={{ animation: "fadeUp 0.5s ease 0.5s both" }}
          >
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full bg-[#6ee7b7] text-[#0a0a0f] font-semibold text-sm hover:bg-[#5fcfa3] transition-all duration-200 hover:shadow-lg hover:shadow-[#6ee7b7]/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full border border-[#1e1e2a] text-[#e2e8f0] font-medium text-sm hover:border-[#6ee7b7]/40 hover:bg-[#6ee7b7]/5 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center lg:justify-start gap-4"
            style={{ animation: "fadeUp 0.5s ease 0.6s both" }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[#6b7280] hover:text-[#6ee7b7] transition-colors duration-200 hover:-translate-y-0.5 inline-block"
              >
                {s.icon}
              </a>
            ))}
            <span className="text-[#1e1e2a] text-xl">|</span>
            <a
              href="mailto:nilakshbe@gmail.com"
              className="text-[#6b7280] hover:text-[#6ee7b7] transition-colors duration-200 text-sm font-mono"
            >
              nilakshbe@gmail.com
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className="flex-shrink-0"
          style={{ animation: "fadeIn 0.8s ease 0.3s both" }}
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-[#6ee7b7]/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-6 rounded-full border border-[#818cf8]/10" />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-[#6ee7b7]/10 blur-2xl scale-110" />

            {/* Image */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-[#1e1e2a]">
              <img
                src="/profile.jpeg"
                alt="Nilaksh Berwal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/30 to-transparent" />
            </div>

            {/* Stats badge */}
            <div className="absolute -bottom-3 -right-3 bg-[#16161e] border border-[#1e1e2a] rounded-xl px-3 py-2 text-center glow-green">
              <div className="font-display font-bold text-[#6ee7b7] text-lg">
                500+
              </div>
              <div className="text-[#6b7280] text-[10px] font-mono uppercase tracking-wider">
                DSA Solved
              </div>
            </div>

            {/* CGPA badge */}
            <div className="absolute -top-2 -left-4 bg-[#16161e] border border-[#1e1e2a] rounded-xl px-3 py-2 text-center glow-purple">
              <div className="font-display font-bold text-[#818cf8] text-lg">
                8.19
              </div>
              <div className="text-[#6b7280] text-[10px] font-mono uppercase tracking-wider">
                CGPA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#6b7280] opacity-60">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#6b7280] to-transparent" />
      </div>
    </section>
  );
}

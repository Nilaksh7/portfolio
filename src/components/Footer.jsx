export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2a] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-display font-bold text-base">
          <span className="text-gradient">NB</span>
          <span className="text-[#6b7280] ml-1 font-mono text-xs">.dev</span>
        </div>
        <p className="text-[#6b7280] text-xs font-mono text-center">
          © {new Date().getFullYear()} Nilaksh Berwal · Built with React + Tailwind
        </p>
        <div className="flex items-center gap-4">
          {[
            { href: 'https://github.com/Nilaksh7', label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/nilaksh-berwal-g07071952', label: 'LinkedIn' },
            { href: 'https://leetcode.com/u/Nilakshbe7/', label: 'LeetCode' },
      { href: 'https://codeforces.com/profile/Nilaksh7', label: 'CodeForces' },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b7280] hover:text-[#6ee7b7] transition-colors duration-200 text-xs font-mono"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactLinks = [
  {
    label: 'Email',
    value: 'nilakshbe@gmail.com',
    href: 'mailto:nilakshbe@gmail.com',
    color: '#6ee7b7',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91-9215715799',
    href: 'tel:+919215715799',
    color: '#34d399',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'nilaksh-berwal',
    href: 'https://www.linkedin.com/in/nilaksh-berwal-g07071952',
    color: '#60a5fa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Nilaksh7',
    href: 'https://github.com/Nilaksh7',
    color: '#a78bfa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const titleRef = useScrollReveal()
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-[#6ee7b7]/4 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div ref={titleRef} className="reveal mb-12">
          <p className="font-mono text-[#6ee7b7] text-xs uppercase tracking-widest mb-2">07 / Contact</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#e2e8f0]">
            Let's Connect
          </h2>
          <p className="text-[#9ca3af] mt-2 max-w-lg">
            I'm actively looking for Software Engineering internships. Whether you have a role, a project, or just want to chat — my inbox is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div ref={leftRef} className="reveal space-y-4">
            {contactLinks.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#16161e] border border-[#1e1e2a] rounded-xl card-hover group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105"
                  style={{ backgroundColor: `${c.color}15`, color: c.color, border: `1px solid ${c.color}20` }}
                >
                  {c.icon}
                </div>
                <div>
                  <div className="text-[#6b7280] text-xs font-mono uppercase tracking-wider">{c.label}</div>
                  <div className="text-[#e2e8f0] text-sm font-medium mt-0.5">{c.value}</div>
                </div>
                <svg className="w-4 h-4 text-[#6b7280] ml-auto group-hover:text-[#6ee7b7] transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            ))}

            {/* Location */}
            <div className="flex items-center gap-3 p-4 bg-[#16161e] border border-[#1e1e2a] rounded-xl">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#fbbf2415] border border-[#fbbf2420]">
                <svg className="w-5 h-5 text-[#fbbf24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-[#6b7280] text-xs font-mono uppercase tracking-wider">Location</div>
                <div className="text-[#e2e8f0] text-sm font-medium mt-0.5">Delhi, India</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div ref={rightRef} className="reveal">
            <form
              onSubmit={handleSubmit}
              className="bg-[#16161e] border border-[#1e1e2a] rounded-xl p-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9ca3af] text-xs font-mono uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-[#0a0a0f] border border-[#1e1e2a] rounded-lg px-3 py-2.5 text-[#e2e8f0] text-sm placeholder-[#374151] focus:outline-none focus:border-[#6ee7b7]/50 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[#9ca3af] text-xs font-mono uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-[#0a0a0f] border border-[#1e1e2a] rounded-lg px-3 py-2.5 text-[#e2e8f0] text-sm placeholder-[#374151] focus:outline-none focus:border-[#6ee7b7]/50 transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#9ca3af] text-xs font-mono uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Nilaksh, we'd love to have you intern with us..."
                  className="w-full bg-[#0a0a0f] border border-[#1e1e2a] rounded-lg px-3 py-2.5 text-[#e2e8f0] text-sm placeholder-[#374151] focus:outline-none focus:border-[#6ee7b7]/50 transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  sent
                    ? 'bg-[#34d399] text-[#0a0a0f]'
                    : 'bg-[#6ee7b7] text-[#0a0a0f] hover:bg-[#5fcfa3] hover:shadow-lg hover:shadow-[#6ee7b7]/20'
                }`}
              >
                {sent ? '✓ Message Sent!' : 'Send Message'}
              </button>
              <p className="text-[#6b7280] text-xs text-center">
                Or email directly at{' '}
                <a href="mailto:nilakshbe@gmail.com" className="text-[#6ee7b7] hover:underline">
                  nilakshbe@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

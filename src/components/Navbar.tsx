import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const LINKS = [
  { to: "/",        label: "Главная"  },
  { to: "/services",label: "Услуги"   },
  { to: "/about",   label: "О нас"    },
  { to: "/booking", label: "Запись"   },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full"
        style={{
          background: 'rgba(238,244,250,0.72)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(106,154,184,0.18)',
          boxShadow: '0 4px 30px rgba(106,154,184,0.1)',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: '20px', color: '#2D3A4A', letterSpacing: '2px' }}>
            Ka<span style={{ color: '#6A9AB8' }}>.Le</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={cn(
                  "text-xs tracking-[3px] uppercase font-light transition-colors",
                  pathname === to ? "text-[#6A9AB8]" : "text-[#4A5A6A]/60 hover:text-[#4A5A6A]"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/booking"
          className="hidden md:flex items-center gap-2 rounded-full pl-2 pr-5 py-2 text-white text-xs tracking-[2px] uppercase font-light transition-all hover:scale-105"
          style={{ background: 'rgba(42,68,90,0.85)' }}
        >
          <div className="bg-white/20 p-1.5 rounded-full">
            <Phone className="w-3 h-3 text-white" />
          </div>
          Записаться
        </Link>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#2D3A4A]" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: 'rgba(238,244,250,0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(106,154,184,0.18)' }}
          >
            {LINKS.map(({ to, label }) => (
              <Link key={to} to={to} onClick={() => setOpen(false)}
                className="text-sm tracking-[3px] uppercase font-light text-[#2D3A4A]/70 hover:text-[#6A9AB8] transition-colors">
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

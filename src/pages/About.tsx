import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Sparkles, Leaf, Award, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuroraBackground } from "@/components/ui/aurora-background"

const PILLARS = [
  { icon: Sparkles, title: "Инновации", desc: "Холодная плазма, LED-терапия, ультразвук — только проверенные технологии нового поколения." },
  { icon: Leaf,     title: "Натуральность", desc: "Травяные сауны, аромамасла, натуральные составы. Красота без химии и агрессивных методов." },
  { icon: Award,    title: "Результат", desc: "Каждая процедура — измеримый эффект. Вы увидите разницу уже после первого визита." },
  { icon: Heart,    title: "Забота", desc: "Индивидуальный подход к каждому клиенту. Мы подбираем программу под ваши цели и кожу." },
]

function fade(delay = 0) {
  return { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay } }
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero — aurora mini */}
      <AuroraBackground className="h-[60vh]" showRadialGradient={false}>
        <div className="text-center px-6 pt-20">
          <motion.p className="text-[10px] tracking-[4px] uppercase text-[#6A9AB8] mb-4" {...fade()}>
            // О нас
          </motion.p>
          <motion.h1
            {...fade(0.15)}
            style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(38px,7vw,88px)', color: '#2D3A4A', lineHeight: 1.0 }}>
            Место, где<br />
            <span style={{ color: '#6A9AB8' }}>время работает</span><br />
            на вас
          </motion.h1>
        </div>
      </AuroraBackground>

      {/* Story */}
      <section className="py-24 px-6" style={{ background: 'rgba(255,255,255,0.65)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fade()}>
            <p className="text-[10px] tracking-[4px] uppercase text-[#6A9AB8] mb-5">// Наша история</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(28px,4vw,52px)', color: '#2D3A4A', lineHeight: 1.1, marginBottom: '24px' }}>
              KA.LE Beauty — это<br />пространство, где<br />рождается красота
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
              Мы — современный beauty-студия в Ташкенте, где передовые технологии встречаются
              с вековой мудростью ухода за собой. Мы верим, что красота — это не маска,
              а здоровье изнутри.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Каждая процедура в KA.LE Beauty разработана так, чтобы дать вашей коже,
              волосам и телу именно то, что им нужно. Холодная плазма, Head SPA, эликсир
              молодости — мы используем только самые современные методики, прошедшие
              клиническую проверку.
            </p>
          </motion.div>

          <motion.div {...fade(0.15)}>
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80"
                alt="KA.LE Beauty salon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(106,154,184,0.1) 0%, transparent 60%)' }} />
              {/* Stats overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.9)' }}>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[['2 465', 'Клиентов'], ['7+', 'Процедур'], ['5★', 'Рейтинг']].map(([n, l]) => (
                    <div key={l}>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: '26px', color: '#2D3A4A', lineHeight: 1 }}>{n}</p>
                      <p className="text-[9px] tracking-[2px] uppercase text-muted-foreground mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #EEF4FA, #E4EFF7)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14" {...fade()}>
            <p className="text-[10px] tracking-[4px] uppercase text-[#6A9AB8] mb-3">// Наши принципы</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(28px,4vw,56px)', color: '#2D3A4A' }}>
              Четыре столпа <span style={{ color: '#6A9AB8' }}>KA.LE</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PILLARS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fade(i * 0.1)}
                className="p-7 rounded-2xl flex items-start gap-5 hover:shadow-md transition-shadow"
                style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.8)' }}>
                <div className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'rgba(106,154,184,0.1)', border: '1px solid rgba(106,154,184,0.2)' }}>
                  <Icon className="w-4 h-4 text-[#6A9AB8]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium tracking-widest uppercase text-[#2D3A4A] mb-2">{title}</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: 'rgba(255,255,255,0.5)' }}>
        <motion.div {...fade()}>
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(26px,4vw,48px)', color: '#2D3A4A', marginBottom: '16px' }}>
            Готовы начать путь к красоте?
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="gap-3">
              <Link to="/booking">Записаться <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-3">
              <Link to="/services">Посмотреть услуги</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

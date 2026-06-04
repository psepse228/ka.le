import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Star } from "lucide-react"
import { Hero } from "@/components/ui/animated-hero"
import { Button } from "@/components/ui/button"

const SERVICES_PREVIEW = [
  {
    id: "01", name: "Head Spa", tag: "60–100 мин",
    desc: "15 этапов роскошного ухода. Ароматерапия, массаж, травяные маски, LED-терапия.",
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
    accent: "#6A9AB8",
  },
  {
    id: "02", name: "Холодная Плазма", tag: "70–80 мин",
    desc: "Инновация без инъекций. Плотность, сияние, минус 10 лет — результат с первой процедуры.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    accent: "#C9A840",
  },
  {
    id: "03", name: "Эликсир Молодости", tag: "70–80 мин · 540 000 сум",
    desc: "12-этапный ритуал: очищение, гуаша, ультразвук, сыворотка, SPF. Бонус — LED-терапия.",
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80",
    accent: "#6A9AB8",
  },
]

const STATS = [
  { num: "2 465", label: "Довольных клиентов" },
  { num: "5.0", label: "Рейтинг", icon: <Star className="w-3 h-3 fill-[#C9A840] text-[#C9A840] inline-block mr-0.5" /> },
  { num: "7+", label: "Видов процедур" },
  { num: "163", label: "Публикаций" },
]

function fade(delay = 0) {
  return { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay } }
}

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Stats strip */}
      <div className="border-y border-border/50 py-6 px-6" style={{ background: 'rgba(255,255,255,0.55)' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ num, label, icon }) => (
            <div key={label} className="text-center">
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(28px,3vw,40px)', color: '#2D3A4A', lineHeight: 1 }}>
                {icon}{num}
              </p>
              <p className="text-[10px] tracking-[2px] uppercase text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services preview */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div className="text-center mb-14" {...fade()}>
          <p className="text-[10px] tracking-[4px] uppercase text-[#6A9AB8] mb-3">// Процедуры</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(32px,5vw,64px)', color: '#2D3A4A', lineHeight: 1.05 }}>
            Ваша красота —<br /><span style={{ color: '#6A9AB8' }}>наша страсть</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES_PREVIEW.map(({ id, name, tag, desc, img, accent }, i) => (
            <motion.div key={id} {...fade(i * 0.1)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ aspectRatio: '4/5' }}>
              <img src={img} alt={name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(30,45,60,0.85) 0%, rgba(30,45,60,0.1) 50%, transparent 100%)' }} />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-[3px] uppercase mb-2" style={{ color: accent }}>{id}</span>
                <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(20px,2vw,28px)', color: 'white', lineHeight: 1.1, marginBottom: '8px' }}>
                  {name}
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed mb-3">{desc}</p>
                <span className="text-[9px] tracking-[2px] uppercase px-3 py-1.5 rounded-full self-start font-light"
                  style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  {tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-10" {...fade(0.3)}>
          <Button asChild variant="outline" size="lg" className="gap-3">
            <Link to="/services">Все услуги <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </motion.div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #EAF2F8, #DCE9F5)' }}>
        <motion.div className="max-w-2xl mx-auto text-center" {...fade()}>
          <p className="text-[10px] tracking-[4px] uppercase text-[#6A9AB8] mb-4">// Начните сегодня</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(34px,5vw,72px)', color: '#2D3A4A', lineHeight: 1.0, marginBottom: '20px' }}>
            Первая консультация<br /><span style={{ color: '#6A9AB8' }}>бесплатно</span>
          </h2>
          <p className="text-sm text-muted-foreground font-light tracking-wide mb-8">
            Запишитесь онлайн или позвоните нам. Выберем процедуру вместе.
          </p>
          <Button asChild size="lg" className="gap-3">
            <Link to="/booking">Записаться онлайн <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

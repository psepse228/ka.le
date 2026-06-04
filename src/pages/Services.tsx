import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

const SERVICES = [
  {
    id: "01", name: "Head Spa", price: "по прайсу", duration: "60–100 мин",
    desc: "15 этапов роскошного ухода: ароматерапия, сухой массаж головы, маска, паровая баня, LED-терапия, чайная церемония.",
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=700&q=80",
    color: "#6A9AB8",
    items: ["Ароматерапия", "Массаж различными гаджетами", "Маска для волос", "Паровая маска", "LED-терапия", "Чайная церемония"],
  },
  {
    id: "02", name: "Холодная Плазма", price: "по прайсу", duration: "70–80 мин",
    desc: "Инновация для кожи без инъекций и скальпеля. Плотность, сияние, −10 лет. Революция в эстетике.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80",
    color: "#C9A840",
    items: ["Без инъекций", "Без скальпеля", "Видимый результат с 1-й процедуры", "Для лица и тела"],
  },
  {
    id: "03", name: "Эликсир Молодости", price: "540 000 сум", duration: "70–80 мин",
    desc: "12-этапный ритуал омоложения: очищение, энзимная пудра, гуаша, ультразвук, сыворотка, SPF. Бонус — LED-терапия.",
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=700&q=80",
    color: "#6A9AB8",
    items: ["Очищение лица", "Глубокое очищение", "Лифтинг-массаж + гуаша", "Ультразвуковая чистка", "LED-маска", "Крем SPF"],
  },
  {
    id: "04", name: "Эко Загар", price: "по прайсу", duration: "40–50 мин",
    desc: "Безвредный, натуральный загар без солнца. Ваш идеальный оттенок круглый год.",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&q=80",
    color: "#C9A840",
    items: ["Без ультрафиолета", "Натуральный состав", "Равномерный тон", "Долговременный эффект"],
  },
  {
    id: "05", name: "Массаж лица", price: "по прайсу", duration: "50–60 мин",
    desc: "Лифтинг-массаж лица и декольте + массаж гуаша. Тонизация, питание, молодость контуров.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80",
    color: "#6A9AB8",
    items: ["Лифтинг контуров", "Массаж гуаша", "Питающая сыворотка", "Тонизация кожи"],
  },
  {
    id: "06", name: "SPA против отёков", price: "по прайсу", duration: "60–80 мин",
    desc: "Убираем лишние сантиметры и отёки. SPA-процедура для тела, которую вы заслуживаете.",
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=700&q=80",
    color: "#C9A840",
    items: ["Лимфодренаж", "Обёртывание", "Ароматерапия", "Видимый результат"],
  },
]

function fade(delay = 0) {
  return { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.65, delay } }
}

export default function Services() {
  return (
    <div className="min-h-screen pt-28" style={{ background: 'linear-gradient(180deg, #EEF4FA 0%, #F5F8FC 100%)' }}>
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <motion.p className="text-[10px] tracking-[4px] uppercase text-[#6A9AB8] mb-3" {...fade()}>
          // Наши процедуры
        </motion.p>
        <motion.h1
          {...fade(0.1)}
          style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(36px, 6vw, 80px)', color: '#2D3A4A', lineHeight: 1.0 }}>
          Услуги и цены
        </motion.h1>
        <motion.p className="text-sm text-muted-foreground font-light mt-4 max-w-xl mx-auto tracking-wide" {...fade(0.2)}>
          Все процедуры проводятся сертифицированными специалистами с использованием профессиональной косметики.
        </motion.p>
      </div>

      {/* Services grid */}
      <div className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map(({ id, name, price, duration, desc, img, color, items }, i) => (
          <motion.article key={id} {...fade(i * 0.08)}
            className="rounded-2xl overflow-hidden border border-border/40 hover:shadow-lg transition-shadow duration-300"
            style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)' }}>
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.9) 100%)' }} />
              <span className="absolute top-4 left-4 text-[9px] tracking-[3px] uppercase px-3 py-1 rounded-full font-light"
                style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', color }}>
                {id}
              </span>
            </div>
            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(20px, 2.5vw, 26px)', color: '#2D3A4A' }}>
                  {name}
                </h2>
                <div className="text-right flex-shrink-0 ml-4">
                  <p className="text-sm font-light text-[#2D3A4A]" style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: '18px' }}>{price}</p>
                  <div className="flex items-center gap-1 text-muted-foreground justify-end mt-0.5">
                    <Clock className="w-3 h-3" />
                    <span className="text-[10px] tracking-wide">{duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className="text-[10px] tracking-[1px] px-2.5 py-1 rounded-full font-light"
                    style={{ background: 'rgba(106,154,184,0.08)', color: '#4A7A9B', border: `1px solid rgba(106,154,184,0.2)` }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Liquid glass CTA */}
      <div className="pb-24 flex flex-col items-center gap-5" style={{ background: 'linear-gradient(135deg, #E8F1F8, #D6E9F4)' }}>
        <div className="pt-16 text-center px-6 mb-6">
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(28px,4vw,52px)', color: '#2D3A4A' }}>
            Хочу записаться
          </h3>
          <p className="text-sm text-muted-foreground font-light mt-2">Выберем процедуру вместе — первая консультация бесплатна</p>
        </div>
        <div className="relative h-24 w-72 flex items-center justify-center">
          <LiquidButton size="xl" onClick={() => window.location.href='/booking'}>
            Записаться онлайн
          </LiquidButton>
        </div>
        <Button asChild variant="ghost" size="sm" className="gap-2">
          <Link to="/about">Узнать о нас <ArrowRight className="w-3 h-3" /></Link>
        </Button>
      </div>
    </div>
  )
}

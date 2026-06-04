import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Share2, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"


const SERVICES_LIST = [
  "Head Spa (Short 60–90 мин)",
  "Head Spa (Long 90–100 мин)",
  "Холодная Плазма",
  "Эликсир Молодости 12-этапный",
  "Эко Загар",
  "Массаж лица и декольте",
  "SPA против отёков",
  "Консультация (бесплатно)",
]

function fade(delay = 0) {
  return { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.65, delay } }
}

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const inputCls = "w-full px-4 py-3 rounded-xl text-sm font-light bg-white/70 border border-border/60 focus:outline-none focus:border-[#6A9AB8]/60 transition-colors placeholder:text-muted-foreground/50 tracking-wide"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-6" style={{ background: 'linear-gradient(180deg, #EEF4FA 0%, #E4EFF7 100%)' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div className="text-center mb-14" {...fade()}>
          <p className="text-[10px] tracking-[4px] uppercase text-[#6A9AB8] mb-3">// Запись</p>
          <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(36px,6vw,80px)', color: '#2D3A4A', lineHeight: 1.0 }}>
            Запишитесь<br />
            <span style={{ color: '#6A9AB8' }}>онлайн</span>
          </h1>
          <p className="text-sm text-muted-foreground font-light mt-4 max-w-md mx-auto tracking-wide">
            Оставьте заявку — мы свяжемся с вами в течение 30 минут и согласуем удобное время.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form */}
          <motion.div className="lg:col-span-3" {...fade(0.1)}>
            <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.85)', boxShadow: '0 4px 40px rgba(106,154,184,0.1)' }}>
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle className="w-12 h-12 text-[#6A9AB8]" />
                  <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: '28px', color: '#2D3A4A' }}>
                    Заявка отправлена!
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">Мы свяжемся с вами в ближайшее время.</p>
                  <Button variant="outline" size="sm" onClick={() => setSent(false)}>Новая запись</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[2px] uppercase text-muted-foreground block mb-1.5">Ваше имя</label>
                      <input className={inputCls} placeholder="Имя" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[2px] uppercase text-muted-foreground block mb-1.5">Телефон</label>
                      <input className={inputCls} placeholder="+998 (00) 000-00-00" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[2px] uppercase text-muted-foreground block mb-1.5">Процедура</label>
                    <select className={inputCls} value={form.service} onChange={e => setForm({...form, service: e.target.value})} required>
                      <option value="">Выберите процедуру</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[2px] uppercase text-muted-foreground block mb-1.5">Пожелания (необязательно)</label>
                    <textarea className={inputCls} rows={3} placeholder="Время, вопросы, особые пожелания..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  </div>
                  <Button type="submit" size="lg" className="gap-3 mt-2">
                    Отправить заявку <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div className="lg:col-span-2 flex flex-col gap-5" {...fade(0.2)}>
            {/* Liquid glass CTA */}
            <div className="relative h-32 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(106,154,184,0.15), rgba(180,212,232,0.2))' }}>
              <a href="tel:+998000000000" className="flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-light tracking-widest uppercase text-white transition-all hover:scale-105" style={{ background: "rgba(42,68,90,0.85)" }}><Phone className="w-4 h-4" /> Позвонить</a>
            </div>

            {/* Info card */}
            <div className="p-6 rounded-2xl flex-1" style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.85)' }}>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: '22px', color: '#2D3A4A', marginBottom: '20px' }}>
                Контакты
              </h3>
              <div className="space-y-4">
                <a href="tel:+998000000000" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(106,154,184,0.1)', border: '1px solid rgba(106,154,184,0.2)' }}>
                    <Phone className="w-3.5 h-3.5 text-[#6A9AB8]" />
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[2px] uppercase text-muted-foreground">Телефон</p>
                    <p className="text-sm text-[#2D3A4A] font-light group-hover:text-[#6A9AB8] transition-colors">+998 (00) 000-00-00</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/kalebeauty.uz/" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(106,154,184,0.1)', border: '1px solid rgba(106,154,184,0.2)' }}>
                    <Share2 className="w-3.5 h-3.5 text-[#6A9AB8]" />
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[2px] uppercase text-muted-foreground">Instagram</p>
                    <p className="text-sm text-[#2D3A4A] font-light group-hover:text-[#6A9AB8] transition-colors">@kalebeauty.uz</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(106,154,184,0.1)', border: '1px solid rgba(106,154,184,0.2)' }}>
                    <MapPin className="w-3.5 h-3.5 text-[#6A9AB8]" />
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[2px] uppercase text-muted-foreground">Адрес</p>
                    <p className="text-sm text-[#2D3A4A] font-light">Ташкент, Узбекистан</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-[10px] tracking-[2px] uppercase text-muted-foreground mb-2">Часы работы</p>
                <p className="text-sm text-[#2D3A4A] font-light">Пн–Сб: 09:00 – 20:00</p>
                <p className="text-sm text-[#2D3A4A] font-light">Воскресенье: по записи</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

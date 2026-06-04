import { Link } from "react-router-dom"
import { Share2, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6"
      style={{ background: 'rgba(238,244,250,0.6)' }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300, fontSize: '24px', color: '#2D3A4A', letterSpacing: '2px' }}>
            Ka<span style={{ color: '#6A9AB8' }}>.Le</span> beauty
          </span>
          <p className="mt-3 text-xs text-muted-foreground font-light leading-relaxed tracking-wide max-w-xs">
            Возраст — выбор. Мы помогаем выбрать молодость. Инновационные процедуры в Ташкенте.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground mb-4">Навигация</p>
          <ul className="space-y-2">
            {[['/', 'Главная'], ['/services', 'Услуги'], ['/about', 'О нас'], ['/booking', 'Запись']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-xs tracking-[2px] uppercase text-[#2D3A4A]/60 hover:text-[#6A9AB8] transition-colors font-light">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground mb-4">Контакты</p>
          <div className="space-y-3">
            <a href="https://www.instagram.com/kalebeauty.uz/" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-xs text-[#2D3A4A]/60 hover:text-[#6A9AB8] transition-colors font-light">
              <Share2 className="w-3.5 h-3.5" />
              @kalebeauty.uz
            </a>
            <div className="flex items-center gap-2 text-xs text-[#2D3A4A]/60 font-light">
              <MapPin className="w-3.5 h-3.5" />
              Ташкент, Узбекистан
            </div>
            <a href="tel:+998000000000"
              className="flex items-center gap-2 text-xs text-[#2D3A4A]/60 hover:text-[#6A9AB8] transition-colors font-light">
              <Phone className="w-3.5 h-3.5" />
              +998 (00) 000-00-00
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-border/40">
        <p className="text-[10px] text-muted-foreground/50 tracking-[2px] uppercase text-center">
          © 2024 KA.LE Beauty · Ташкент · Все права защищены
        </p>
      </div>
    </footer>
  )
}

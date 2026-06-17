import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Head Spa", "Плазмой", "Загаром", "Массажем", "Сиянием"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2200);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative flex flex-col h-[100vh] items-center justify-center overflow-hidden bg-[#EEF4FA]">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
      />
      {/* Soft overlay to keep text readable */}
      <div className="absolute inset-0" style={{ background: 'rgba(238,244,250,0.35)' }} />

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6">
          <div className="flex gap-6 py-32 lg:py-44 items-center justify-center flex-col">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button variant="secondary" size="sm" className="gap-3 text-xs rounded-full">
                Ташкент · Узбекистан <MoveRight className="w-3 h-3" />
              </Button>
            </motion.div>

            {/* Title block */}
            <div className="flex gap-3 flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="max-w-3xl tracking-tight text-center"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(44px, 8vw, 96px)',
                  lineHeight: 1.0,
                  color: '#2D3A4A',
                }}
              >
                <span>Красота начинается с</span>
                <span className="relative flex w-full justify-center overflow-hidden text-center mt-2"
                  style={{ height: 'clamp(54px, 9vw, 108px)' }}>
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute"
                      style={{ color: '#6A9AB8', fontWeight: 400 }}
                      initial={{ opacity: 0, y: "-100%" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : { y: titleNumber > index ? "-100%" : "100%", opacity: 0 }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg leading-relaxed tracking-wide text-muted-foreground max-w-xl text-center font-light"
              >
                Холодная плазма, Head SPA, эликсир молодости — процедуры нового поколения
                в сердце Ташкента. Красота без инъекций и скальпеля.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-row gap-3 flex-wrap justify-center"
            >
              <Button asChild size="lg" variant="outline" className="gap-3">
                <Link to="/booking">
                  Позвонить <PhoneCall className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="gap-3">
                <Link to="/booking">
                  Записаться <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };

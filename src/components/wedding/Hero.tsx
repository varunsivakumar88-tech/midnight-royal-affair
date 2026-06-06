import { motion } from "framer-motion";
import { ArrowDown, Calendar, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { ParticleField } from "./ParticleField";
import { Countdown } from "./Countdown";
import { MandalaBackdrop } from "./MandalaBackdrop";
import { wedding } from "@/lib/wedding-data";

function SplitChars({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-deep/80 via-midnight/60 to-midnight-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,16,42,0.85))]" />
      </div>

      <ParticleField density={50} petals={8} />

      <MandalaBackdrop className="-left-40 top-10" size={520} opacity={0.07} />
      <MandalaBackdrop className="-right-48 bottom-0" size={620} opacity={0.06} />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-gold-bright/80"
        >
          <span className="h-px w-10 bg-gold/60" />
          Together with our families
          <span className="h-px w-10 bg-gold/60" />
        </motion.div>

        <h1 className="font-display text-5xl leading-[1.05] text-ivory sm:text-7xl md:text-8xl">
          <SplitChars text={wedding.couple.groom} delay={0.2} className="text-gold-gradient" />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.7, type: "spring", stiffness: 120 }}
            className="mx-4 inline-block align-middle text-3xl text-rose-gold sm:mx-6 sm:text-5xl"
          >
            ♥
          </motion.span>
          <SplitChars text={wedding.couple.bride} delay={1.4} className="text-gold-gradient" />
        </h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-8 h-px w-64 gold-divider"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="font-script mt-6 max-w-2xl text-xl italic text-ivory/85 sm:text-2xl"
        >
          {wedding.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 1 }}
          className="mt-8 flex flex-col items-center gap-3 text-sm text-ivory/75 sm:flex-row sm:gap-8"
        >
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gold" />
            <span className="font-serif-display tracking-wide">{wedding.dateLabel}</span>
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-gold/60 sm:block" />
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            <span className="font-serif-display tracking-wide">{wedding.cityLabel}</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1.2 }}
          className="mt-12"
        >
          <Countdown target={wedding.date} />
        </motion.div>

        <motion.a
          href="#details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 1 }}
          className="group relative mt-12 overflow-hidden rounded-full px-12 py-4 text-xs uppercase tracking-[0.45em] text-midnight-deep"
          style={{
            background:
              "linear-gradient(135deg, #F5D27A 0%, #D4AF37 50%, #C9A2A0 100%)",
            boxShadow: "0 20px 50px -10px rgba(212,175,55,0.45)",
          }}
        >
          <span className="relative z-10 font-medium">Save the Date</span>
          <span className="absolute inset-0 -z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
        </motion.a>
      </div>

      <motion.a
        href="#details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-ivory/50 transition hover:text-gold-bright"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
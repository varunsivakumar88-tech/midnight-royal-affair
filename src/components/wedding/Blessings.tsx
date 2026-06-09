import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { MandalaBackdrop } from "./MandalaBackdrop";
import { blessings } from "@/lib/wedding-data";

export function Blessings() {
  return (
    <section id="blessings" className="relative overflow-hidden py-32">
      <MandalaBackdrop className="-left-60 top-1/3" size={760} opacity={0.05} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-gold-bright/80">
            ◆  Blessings  ◆
          </div>
          <h2 className="mt-4 font-serif-display text-5xl text-ivory sm:text-6xl">
            Words from <span className="font-script italic text-gold-gradient">loved ones</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory/65">
            The voices of those who have walked beside us — their hopes, their wishes, their love.
          </p>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {blessings.map((b, i) => (
            <GlassCard key={b.author} delay={i * 0.12} className="p-10">
              <Quote className="h-6 w-6 text-gold-bright/80" />
              <p className="font-script mt-5 text-2xl italic leading-relaxed text-ivory/90">
                "{b.quote}"
              </p>
              <div className="my-6 h-px w-12 gold-divider" />
              <div className="text-sm">
                <div className="font-serif-display text-ivory">{b.author}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-ivory/50">
                  {b.relation}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
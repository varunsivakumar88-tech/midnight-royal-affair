import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Sun, Music } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { MandalaBackdrop } from "./MandalaBackdrop";
import { wedding } from "@/lib/wedding-data";

const fnIcons: Record<string, LucideIcon> = { Mehendi: Sparkles, Haldi: Sun, Sangeet: Music };

function EventCard({
  kicker, title, date, time, venue, address, delay = 0,
}: {
  kicker: string; title: string; date: string; time: string; venue: string; address: string; delay?: number;
}) {
  return (
    <GlassCard delay={delay} className="p-10">
      <div className="text-[10px] uppercase tracking-[0.45em] text-gold-bright/80">{kicker}</div>
      <h3 className="mt-3 font-serif-display text-3xl text-ivory sm:text-4xl">{title}</h3>
      <div className="my-6 h-px w-16 gold-divider" />
      <div className="space-y-4 text-ivory/80">
        <Row icon={Calendar} text={date} />
        <Row icon={Clock} text={time} />
        <Row icon={MapPin} text={venue} sub={address} />
      </div>
    </GlassCard>
  );
}

function Row({ icon: Icon, text, sub }: { icon: LucideIcon; text: string; sub?: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
      <div>
        <div className="font-serif-display text-base text-ivory">{text}</div>
        {sub && <div className="mt-1 text-xs text-ivory/55">{sub}</div>}
      </div>
    </div>
  );
}

export function WeddingDetails() {
  return (
    <section id="details" className="relative overflow-hidden py-32">
      <MandalaBackdrop className="-left-60 top-20" size={700} opacity={0.05} />
      <MandalaBackdrop className="-right-72 bottom-10" size={800} opacity={0.04} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-gold-bright/80">
            ◆  The Celebrations  ◆
          </div>
          <h2 className="mt-4 font-serif-display text-5xl text-ivory sm:text-6xl">
            Save these <span className="font-script italic text-gold-gradient">moments</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory/65">
            Three days of music, colour and ceremony — under midnight skies and palace arches.
            We would be honoured by your presence at each.
          </p>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <EventCard
            kicker="The Vows"
            title={wedding.ceremony.title}
            date={wedding.ceremony.date}
            time={wedding.ceremony.time}
            venue={wedding.ceremony.venue}
            address={wedding.ceremony.address}
          />
          <EventCard
            kicker="The Celebration"
            title={wedding.reception.title}
            date={wedding.reception.date}
            time={wedding.reception.time}
            venue={wedding.reception.venue}
            address={wedding.reception.address}
            delay={0.15}
          />
        </div>

        <div className="mt-24 text-center">
          <div className="text-[10px] uppercase tracking-[0.5em] text-gold-bright/80">
            ◆  Traditional Functions  ◆
          </div>
          <h3 className="mt-4 font-serif-display text-3xl text-ivory sm:text-4xl">
            Rituals of <span className="font-script italic text-gold-gradient">joy</span>
          </h3>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {wedding.functions.map((f, i) => {
            const Icon = fnIcons[f.name] ?? Sparkles;
            return (
              <GlassCard key={f.name} delay={i * 0.12}>
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-xl tracking-[0.3em] text-ivory">{f.name.toUpperCase()}</h4>
                  <Icon className="h-5 w-5 text-gold-bright" />
                </div>
                <div className="my-4 h-px gold-divider" />
                <div className="space-y-2 text-sm text-ivory/75">
                  <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-gold/80" /> {f.date}</div>
                  <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-gold/80" /> {f.time}</div>
                  <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold/80" /> {f.venue}</div>
                </div>
                <p className="font-script mt-5 text-base italic text-ivory/60">"{f.note}"</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
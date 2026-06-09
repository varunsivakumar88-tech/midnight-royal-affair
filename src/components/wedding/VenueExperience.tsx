import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import palaceImg from "@/assets/venue-palace.jpg";
import leelaImg from "@/assets/venue-leela.jpg";
import { MandalaBackdrop } from "./MandalaBackdrop";
import { venues } from "@/lib/wedding-data";

const imgs: Record<string, string> = { palace: palaceImg, leela: leelaImg };

export function VenueExperience() {
  return (
    <section id="venues" className="relative overflow-hidden py-32">
      <MandalaBackdrop className="-right-72 top-40" size={780} opacity={0.05} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-gold-bright/80">
            ◆  The Venues  ◆
          </div>
          <h2 className="mt-4 font-serif-display text-5xl text-ivory sm:text-6xl">
            Palaces of <span className="font-script italic text-gold-gradient">light</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory/65">
            From a marble palace in the clouds to a floating jewel on Lake Pichola —
            two settings, each cinematic, each unforgettable.
          </p>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
        </motion.div>

        <div className="mt-20 space-y-32">
          {venues.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`grid items-center gap-12 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="group relative overflow-hidden rounded-2xl">
                <span className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-gold/30" />
                <span className="pointer-events-none absolute inset-x-0 -top-px z-10 h-px bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
                <motion.img
                  src={imgs[v.image]}
                  alt={v.name}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="h-[420px] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/10 to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ivory/85">
                  <MapPin className="h-3.5 w-3.5 text-gold-bright" /> {v.city}
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.45em] text-gold-bright/80">
                  ✦  {v.tagline}  ✦
                </div>
                <h3 className="mt-3 font-serif-display text-4xl text-ivory sm:text-5xl">
                  {v.name}
                </h3>
                <div className="my-6 h-px w-20 gold-divider" />
                <p className="text-ivory/75 leading-relaxed">{v.description}</p>
                <ul className="mt-8 space-y-3">
                  {v.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm text-ivory/80">
                      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                      <span className="font-serif-display tracking-wide">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
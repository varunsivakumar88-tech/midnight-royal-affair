import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import { galleryCaptions } from "@/lib/wedding-data";

const items = [
  { src: g1, span: "md:col-span-1 md:row-span-2", h: "h-[520px]" },
  { src: g2, span: "md:col-span-2", h: "h-[250px]" },
  { src: g3, span: "md:col-span-1 md:row-span-2", h: "h-[520px]" },
  { src: g4, span: "md:col-span-1", h: "h-[250px]" },
  { src: g5, span: "md:col-span-1", h: "h-[250px]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-gold-bright/80">
            ◆  Moments  ◆
          </div>
          <h2 className="mt-4 font-serif-display text-5xl text-ivory sm:text-6xl">
            A glimpse of the <span className="font-script italic text-gold-gradient">celebration</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory/65">
            Whispers of mehendi, marigolds and midnight skies — fragments of the
            world that awaits you.
          </p>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
        </motion.div>

        <div className="mt-16 grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-xl ${it.span ?? ""}`}
            >
              <span className="pointer-events-none absolute inset-0 z-20 rounded-xl ring-1 ring-inset ring-gold/25" />
              <img
                src={it.src}
                alt={galleryCaptions[i] ?? ""}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110 ${it.h}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep/90 via-midnight-deep/20 to-transparent opacity-90" />
              <figcaption className="absolute bottom-4 left-5 right-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold-bright/80">
                  ✦  Memory  ✦
                </div>
                <div className="mt-1 font-script text-xl italic text-ivory">
                  {galleryCaptions[i] ?? ""}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Monogram } from "./Monogram";
import { ParticleField } from "./ParticleField";
import { wedding } from "@/lib/wedding-data";

export function OpeningSequence() {
  const [open, setOpen] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    document.body.style.overflow = exit ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [exit]);

  const enter = () => {
    setExit(true);
    setTimeout(() => setOpen(true), 1400);
  };

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: exit ? 0 : 1,
            scale: exit ? 1.25 : 1,
            filter: exit ? "blur(20px)" : "blur(0px)",
          }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, #0a2255 0%, #071A3D 45%, #03102A 100%)",
          }}
        >
          <ParticleField density={70} petals={14} />

          {/* Vignette */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6))]" />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative z-10 mb-6 text-[10px] uppercase tracking-[0.5em] text-gold-bright/80"
          >
            ◆  An Invitation  ◆
          </motion.div>

          <Monogram size={260} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.2 }}
            className="relative z-10 mt-8 flex flex-col items-center"
          >
            <h1 className="font-script text-4xl italic text-ivory sm:text-5xl">
              {wedding.couple.groom}{" "}
              <span className="text-gold-gradient not-italic">&</span>{" "}
              {wedding.couple.bride}
            </h1>
            <div className="mt-2 h-px w-48 gold-divider" />
            <p className="mt-3 text-xs uppercase tracking-[0.45em] text-ivory/60">
              {wedding.dateLabel}
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 1 }}
            onClick={enter}
            className="group relative z-10 mt-14 overflow-hidden rounded-full border border-gold/50 px-10 py-4 text-xs uppercase tracking-[0.45em] text-ivory transition hover:text-midnight-deep"
          >
            <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-gold-bright via-gold to-rose-gold transition-transform duration-500 group-hover:translate-y-0" />
            Open Invitation
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="relative z-10 mt-6 text-[10px] uppercase tracking-[0.4em] text-ivory/40"
          >
            ✦  with the blessings of our families  ✦
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
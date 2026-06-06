import { motion } from "framer-motion";
import monogram from "@/assets/monogram-om.png";

export function Monogram({ size = 220, glow = true }: { size?: number; glow?: boolean }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {glow && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(245,210,122,0.45), rgba(212,175,55,0.15) 45%, transparent 70%)",
          }}
        />
      )}
      <motion.img
        src={monogram}
        alt="Oitis and Meave monogram"
        width={size}
        height={size}
        initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
      />
    </div>
  );
}
import mandala from "@/assets/mandala-1.png";

export function MandalaBackdrop({
  className = "",
  size = 600,
  opacity = 0.08,
  spin = true,
}: {
  className?: string;
  size?: number;
  opacity?: number;
  spin?: boolean;
}) {
  return (
    <img
      src={mandala}
      alt=""
      aria-hidden
      width={size}
      height={size}
      loading="lazy"
      className={`pointer-events-none absolute select-none ${spin ? "[animation:spin-slow_120s_linear_infinite]" : ""} ${className}`}
      style={{ width: size, height: size, opacity }}
    />
  );
}
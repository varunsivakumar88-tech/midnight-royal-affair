import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

const SRC = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1bffaa2174.mp3?filename=indian-flute-meditation-15414.mp3";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio(SRC);
    a.loop = true;
    a.volume = 0.35;
    ref.current = a;
    return () => { a.pause(); ref.current = null; };
  }, []);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play ambient music"}
      className="glass-card group fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full text-gold-bright transition hover:scale-105 hover:text-ivory"
    >
      {playing ? (
        <Music2 className="h-5 w-5 [animation:spin-slow_8s_linear_infinite]" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </button>
  );
}
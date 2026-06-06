import { createFileRoute } from "@tanstack/react-router";
import { OpeningSequence } from "@/components/wedding/OpeningSequence";
import { Hero } from "@/components/wedding/Hero";
import { WeddingDetails } from "@/components/wedding/WeddingDetails";
import { Nav } from "@/components/wedding/Nav";
import { Footer } from "@/components/wedding/Footer";
import { MusicToggle } from "@/components/wedding/MusicToggle";
import { useLenis } from "@/hooks/useLenis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oitis & Meave — A Celebration of Love, Tradition & Forever" },
      {
        name: "description",
        content:
          "An invitation to the wedding of Oitis & Meave — three days of music, ceremony and celebration under a midnight sky of gold.",
      },
      { property: "og:title", content: "Oitis & Meave — Wedding Invitation" },
      { property: "og:description", content: "A celebration of love, tradition & forever." },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <OpeningSequence />
      <Hero />
      <WeddingDetails />
      <Footer />
      <MusicToggle />
    </main>
  );
}

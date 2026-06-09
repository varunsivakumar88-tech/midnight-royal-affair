import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MandalaBackdrop } from "./MandalaBackdrop";
import { faqs } from "@/lib/wedding-data";

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-32">
      <MandalaBackdrop className="-right-60 bottom-0" size={680} opacity={0.05} />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-gold-bright/80">
            ◆  Questions  ◆
          </div>
          <h2 className="mt-4 font-serif-display text-5xl text-ivory sm:text-6xl">
            Everything you need to <span className="font-script italic text-gold-gradient">know</span>
          </h2>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="glass-card mt-14 rounded-2xl p-4 sm:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-gold/15 last:border-b-0"
              >
                <AccordionTrigger className="font-serif-display text-left text-lg text-ivory hover:no-underline data-[state=open]:text-gold-bright">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-base leading-relaxed text-ivory/75">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <p className="mt-10 text-center text-sm text-ivory/55">
          Still curious? Write to us at{" "}
          <a href="mailto:hello@oitisandmeave.com" className="text-gold-bright hover:underline">
            hello@oitisandmeave.com
          </a>
        </p>
      </div>
    </section>
  );
}
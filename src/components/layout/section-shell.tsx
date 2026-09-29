import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionShell({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-3xl font-semibold text-white md:text-4xl"
      >
        {title}
      </motion.h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";

interface Research {
  title: string;
  label: string;
  summary: string;
  details: string;
}

const items: Research[] = [
  {
    title: "Research Topic One",
    label: "▹ Problem",
    summary: "Brief summary of the research problem.",
    details: "More detailed explanation of your research, methodology, and findings.",
  },
  {
    title: "Research Topic Two",
    label: "▹ Experiment",
    summary: "Brief summary of the experiment.",
    details: "More detailed explanation of your experiment and results.",
  },
];

const ResearchSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="research" className="py-24 px-4">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-3xl font-bold mb-2">Research & Experiments</h2>
          <p className="text-muted-foreground text-sm mb-12">Intellectual exploration and conceptual experiments</p>
        </motion.div>
        <div className="space-y-6">
          {items.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border rounded-lg p-6 bg-card"
            >
              <p className="text-xs text-muted-foreground font-heading mb-2">~/research/</p>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{r.title}</h3>
              <h4 className="text-sm text-primary mb-1">{r.label}</h4>
              <p className="text-muted-foreground text-sm mb-3">{r.summary}</p>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="text-xs text-primary font-heading hover:underline"
              >
                {expanded === i ? "▲ Show Less" : "▼ Read More"}
              </button>
              {expanded === i && (
                <p className="text-muted-foreground text-sm mt-3">{r.details}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

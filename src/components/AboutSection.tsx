import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 px-4">
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl font-bold mb-2">About</h2>
        <p className="text-primary text-sm mb-8">Your curiosity statement here.</p>
        <p className="text-muted-foreground italic mb-8">
          A brief paragraph about yourself — what you do, what excites you, and what you're looking for.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-border rounded-lg p-6 bg-card">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Area 1</h3>
            <p className="text-muted-foreground text-sm">Describe your first area of interest or expertise.</p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Area 2</h3>
            <p className="text-muted-foreground text-sm">Describe your second area of interest or expertise.</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          A closing statement about your approach and philosophy.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

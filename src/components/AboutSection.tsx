import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 px-4">
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl font-bold mb-2">About</h2>
        <p className="text-primary text-sm mb-8">Building things that matter, one line at a time.</p>
        <p className="text-muted-foreground italic mb-8">
          I'm Kushagra — a software developer with a keen interest in Generative AI, Data Structures & Algorithms, and Full Stack Development. I love building practical solutions and exploring how emerging technologies can solve real-world problems.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-border rounded-lg p-6 bg-card">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Generative AI</h3>
            <p className="text-muted-foreground text-sm">Exploring large language models, prompt engineering, and AI-powered applications that push creative and technical boundaries.</p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Full Stack Development</h3>
            <p className="text-muted-foreground text-sm">Building end-to-end web applications with React, Node.js, and Express — from intuitive frontends to robust backends.</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          I believe in writing clean, efficient code and continuously learning. Always eager to collaborate and grow.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

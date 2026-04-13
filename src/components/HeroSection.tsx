import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-[0.2em] text-foreground mb-6">
        KUSHAGRA SRIVASTAVA
      </h1>
      <p className="text-primary text-lg md:text-xl font-medium mb-4 glow-primary">
        Software Developer · Gen AI · Full Stack
      </p>
      <p className="text-muted-foreground text-base max-w-xl mx-auto mb-10">
        Fresher | Open to opportunities | Passionate about Generative AI, DSA, and Full Stack Development.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="#projects"
          className="px-8 py-3 border border-primary text-primary font-heading text-sm tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          VIEW WORK
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-accent text-accent font-heading text-sm tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          GET IN TOUCH
        </a>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;

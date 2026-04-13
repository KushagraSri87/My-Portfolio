import { motion } from "framer-motion";

const IdeasSection = () => (
  <section id="ideas" className="py-24 px-4">
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl font-bold mb-2">Ideas & Interests</h2>
        <p className="text-muted-foreground text-sm mb-12">Concepts, curiosities, and questions worth exploring</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">Thoughts</h3>
          <ul className="space-y-3">
            <li className="text-foreground text-sm italic border-l-2 border-primary pl-4">AI will fundamentally change how we write and ship software.</li>
            <li className="text-foreground text-sm italic border-l-2 border-primary pl-4">Strong DSA foundations make you a better problem solver in every domain.</li>
            <li className="text-foreground text-sm italic border-l-2 border-primary pl-4">IoT and AI together can make buildings and cities truly intelligent.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">Intellectual Interests</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground">Generative AI</span>
            <span className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground">IoT & Smart Systems</span>
            <span className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground">Full Stack Development</span>
          </div>
          <p className="text-muted-foreground text-sm">
            I enjoy exploring how AI models work under the hood, tinkering with embedded systems, and solving algorithmic challenges.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default IdeasSection;

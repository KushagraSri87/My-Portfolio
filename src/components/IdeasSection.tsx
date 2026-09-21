import { motion } from "framer-motion";

const thoughts = [
  "Software isn't finished when it works on my machine. It's finished when it is deployed, reliable and easy to ship again.",
  "Automation and CI/CD turn deployments from a risky event into a routine.",
  "Clean architecture, like MVC, makes systems easier to secure, test and maintain.",
  "AI features are only as dependable as the backend, security and infrastructure around them.",
  "Strong DSA foundations make you a better problem solver in every domain.",
];

const interests = [
  "DevOps & Cloud Infrastructure",
  "Backend Engineering",
  "Full Stack Development",
  "Data Structures & Algorithms",
  "Open Source",
  "Generative AI",
  "IoT & Smart Systems",
  "Chess",
];

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
            {thoughts.map((t) => (
              <li key={t} className="text-foreground text-sm italic border-l-2 border-primary pl-4">{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">Intellectual Interests</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {interests.map((i) => (
              <span key={i} className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground">{i}</span>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            I enjoy understanding how applications run in production, from containers and pipelines to cloud deployments. Outside of that, I solve algorithmic problems, explore open-source projects, tinker with IoT systems and play chess.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default IdeasSection;

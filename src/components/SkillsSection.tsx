import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Tools & Frameworks",
    skills: ["Git & GitHub", "React", "Node.js", "Express.js"],
  },
  {
    title: "Concepts & Knowledge",
    skills: ["Data Structures", "Algorithms"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-4">
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl font-bold mb-2">Skills</h2>
        <p className="text-muted-foreground text-sm mb-12">Technical capabilities and areas of expertise</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {skillGroups.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">{g.title}</h3>
            <ul className="space-y-2">
              {g.skills.map((s) => (
                <li key={s} className="text-foreground text-sm border-b border-border pb-2">{s}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

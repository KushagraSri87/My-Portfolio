import { motion } from "framer-motion";

interface Project {
  status: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    status: "In Development",
    title: "Project One",
    description: "Short description of your project.",
    problem: "What problem does it solve?",
    approach: "How did you approach it?",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    status: "Completed",
    title: "Project Two",
    description: "Short description of your second project.",
    problem: "What problem does it solve?",
    approach: "How did you approach it?",
    technologies: ["Python", "TensorFlow", "OpenAI Gym"],
  },
  {
    status: "Completed",
    title: "Project Three",
    description: "Short description of your third project.",
    problem: "What problem does it solve?",
    approach: "How did you approach it?",
    technologies: ["React", "Express.js", "PostgreSQL"],
  },
];

const statusColor = (s: string) =>
  s === "In Development" ? "text-primary" : s === "Experimental" ? "text-accent" : "text-muted-foreground";

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4">
    <div className="container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl font-bold mb-2">Projects</h2>
        <p className="text-muted-foreground text-sm mb-12">Technical implementations and explorations</p>
      </motion.div>
      <div className="space-y-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-border rounded-lg p-6 bg-card hover:border-glow transition-shadow"
          >
            <span className={`text-xs font-heading uppercase tracking-wider ${statusColor(p.status)}`}>{p.status}</span>
            <h3 className="font-heading text-xl font-bold text-foreground mt-2 mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
            <div className="space-y-3 mb-4">
              <div>
                <h4 className="text-xs font-heading text-foreground uppercase tracking-wider mb-1">Problem</h4>
                <p className="text-muted-foreground text-sm">{p.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-heading text-foreground uppercase tracking-wider mb-1">Approach</h4>
                <p className="text-muted-foreground text-sm">{p.approach}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <span key={t} className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

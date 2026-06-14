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
    status: "Completed",
    title: "Airbnb Clone",
    description: "A full-stack Airbnb-inspired property listing platform built with Node.js, Express.js, MongoDB, and EJS for server-side rendered workflows.",
    problem: "Many listing platforms need full backend support for user authentication, secure CRUD workflows, image uploads, and location-aware property search.",
    approach: "Implemented authentication and authorization with Passport.js and Express Sessions; built property CRUD and image upload flows using Cloudinary; integrated MongoDB Atlas for database storage and Mapbox for location-based services; designed responsive server-rendered pages with EJS templates.",
    technologies: ["Node.js", "Express.js", "MongoDB", "MongoDB Atlas", "EJS", "Passport.js", "Express Sessions", "Cloudinary", "Mapbox", "HTML", "CSS", "JavaScript"],
  },
  {
    status: "Completed",
    title: "IoT-Based Smart Building Energy Optimization",
    description: "An IoT-based system designed to monitor and optimize energy consumption in buildings using real-time sensor data and automation.",
    problem: "Buildings waste significant energy due to manual control of appliances and lack of real-time monitoring, leading to unnecessary power consumption.",
    approach: "Used sensors (DHT11, LDR, PIR) to collect environmental data, processed by Arduino/NodeMCU to automatically control lights, fans, and AC based on real-time conditions like motion, temperature, and light intensity.",
    technologies: ["Arduino", "NodeMCU (ESP8266)", "DHT11", "LDR", "PIR", "Arduino IDE", "Firebase"],
  },
  {
    status: "Completed",
    title: "RFID-Based Event Management System",
    description: "An event registration portal that allows users to register for events with automated confirmation via email and SMS notifications.",
    problem: "Manual event registration is time-consuming, error-prone, and lacks instant confirmation for attendees.",
    approach: "Built a web form that collects user details (name, email, phone, address), stores submissions in Google Sheets, and triggers automated confirmation emails and SMS notifications upon registration.",
    technologies: ["Google Sheets", "Google Apps Script", "HTML", "JavaScript"],
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

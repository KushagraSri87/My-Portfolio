import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

interface Project {
  status: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    status: "Completed",
    title: "The Big Dipper AI",
    description: "A full-stack AI chat application built with the MERN stack and powered by Groq's GPT-OSS 120B model, giving users real-time responses with saved conversation history. Built in a 2-person team, where I owned the backend.",
    problem: "Chat apps that rely on an LLM API need secure user accounts, protected routes and persistent storage so each user's conversations stay private and available across sessions.",
    approach: "Built JWT authentication with bcrypt and protected API routes; designed the MongoDB schema for storing and syncing per-user conversation history; integrated the Groq LLM API for real-time replies; deployed a decoupled React frontend and Node/Express backend on Vercel with MongoDB Atlas. Tested by 50+ users.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Groq API", "JWT", "bcrypt", "MongoDB Atlas", "Vercel"],
    githubUrl: "https://github.com/Ishan0011/The-Big-Dipper-AI",
    liveUrl: "https://the-big-dipper-ai.vercel.app",
  },
  {
    status: "Completed",
    title: "Stayscape",
    description: "A full-stack property listing and booking platform built with Node.js, Express.js, MongoDB and EJS, following MVC architecture.",
    problem: "Property rental platforms need secure authentication, booking logic that prevents double-bookings, image uploads and online payments, all in a codebase that stays maintainable.",
    approach: "Structured the app with MVC (controllers, models, routes) and full CRUD on listings; added Passport.js session authentication and Joi server-side validation; built a booking system with server-side overlap checking, a guest 'My Trips' view and an owner bookings dashboard; integrated Cloudinary/Multer for image uploads, OpenCage/Leaflet for maps and Razorpay for payments.",
    technologies: ["Node.js", "Express.js", "MongoDB", "MongoDB Atlas", "EJS", "Passport.js", "Express Sessions", "Cloudinary", "Multer", "HTML", "CSS", "JavaScript", "Leaflet", "OpenCage", "Razorpay"],
    githubUrl: "https://github.com/KushagraSri87/StayScape",
    liveUrl: "", // add the StayScape live link here once it is deployed
  },
  {
    status: "Completed",
    title: "IoT-Based Smart Building Energy Optimization",
    description: "An IoT-based system designed to monitor and optimize energy consumption in buildings using real-time sensor data and automation.",
    problem: "Buildings waste significant energy due to manual control of appliances and lack of real-time monitoring, leading to unnecessary power consumption.",
    approach: "Used sensors (DHT11, LDR, PIR) to collect environmental data, processed by Arduino/NodeMCU to automatically control lights, fans, and AC based on real-time conditions like motion, temperature, and light intensity.",
    technologies: ["Arduino", "NodeMCU (ESP8266)", "DHT11", "LDR", "PIR", "Arduino IDE", "Firebase"],
    githubUrl: "https://github.com/KushagraSri87/IOT-based-Smart-buildings",
  },
  {
    status: "Completed",
    title: "RFID-Based Event Management System",
    description: "An event registration portal that allows users to register for events with automated confirmation via email and SMS notifications.",
    problem: "Manual event registration is time-consuming, error-prone, and lacks instant confirmation for attendees.",
    approach: "Built a web form that collects user details (name, email, phone, address), stores submissions in Google Sheets, and triggers automated confirmation emails and SMS notifications upon registration.",
    technologies: ["Google Sheets", "Google Apps Script", "HTML", "JavaScript"],
    githubUrl: "", // paste the RFID project's GitHub link here
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
            {(p.githubUrl || p.liveUrl) && (
              <div className="flex flex-wrap items-center gap-5 mt-5">
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <GithubIcon /> View on GitHub
                  </a>
                )}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} live demo`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

import { motion } from "framer-motion";

const cards = [
  {
    title: "Backend & Full Stack",
    text: "I build end-to-end applications with Node.js, Express and MongoDB, covering REST APIs, JWT and Passport.js authentication, and MVC architecture, as in Stayscape and The Big Dipper AI.",
  },
  {
    title: "DevOps & Cloud",
    text: "I deploy on Vercel, Render, Netlify and MongoDB Atlas, and I am building hands-on skills in Linux, Docker, Kubernetes, Jenkins and CI/CD to go with my development background.",
  },
  {
    title: "Teamwork & Git",
    text: "I work daily with Git and GitHub, including branching, pull requests and multi-contributor workflows. I built The Big Dipper AI in a 2-person team and took part in Smart India Hackathon.",
  },
  {
    title: "Problem Solving",
    text: "Solving 80+ problems on LeetCode has sharpened how I reason about data structures, algorithms and edge cases, and it shows in the clean, efficient code I write.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-4">
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl font-bold mb-2">About</h2>
        <p className="text-primary text-sm mb-8">Backend and full-stack developer growing into DevOps and cloud.</p>
        <p className="text-muted-foreground italic mb-8">
          I'm Kushagra, a B.Tech Computer Science student at BBD University, Lucknow (2027 batch, CGPA 8.3). I'm building a career in DevOps and Cloud Infrastructure on top of a solid backend and full-stack foundation, with three end-to-end applications shipped and deployed so far.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {cards.map((c) => (
            <div key={c.title} className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          I learn by building and shipping. I'm open to opportunities in DevOps, backend and full-stack roles, and always keen to collaborate and grow.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

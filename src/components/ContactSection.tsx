import { motion } from "framer-motion";
import { Mail, GitlabIcon as Github, LinkedinIcon as Linkedin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 px-4">
    <div className="container max-w-2xl text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-muted-foreground text-sm mb-12">Let's connect and explore opportunities together</p>
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-primary" size={20} />
            <a href="mailto:your@email.com" className="text-foreground hover:text-primary transition-colors">
              your@email.com
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;

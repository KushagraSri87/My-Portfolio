import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 px-4">
    <div className="container max-w-2xl text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-muted-foreground text-sm mb-12">Let's connect and explore opportunities together</p>
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-primary" size={20} />
            <a href="mailto:kushagra@email.com" className="text-foreground hover:text-primary transition-colors">
              kushagra@email.com
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/kushagra" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2" aria-label="GitHub">
              <ExternalLink size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/kushagra" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2" aria-label="LinkedIn">
              <ExternalLink size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;

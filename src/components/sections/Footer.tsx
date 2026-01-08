import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onGetStarted: () => void;
}

export const Footer = ({ onGetStarted }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="container-wide py-16 md:py-20 border-b border-primary-foreground/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Stop the <span className="gold-text">Firefighting</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg mb-8"
          >
            Get your free automation assessment and see how much time and money you could save.
          </motion.p>
          <motion.button
            onClick={onGetStarted}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full gold-gradient text-accent-foreground font-semibold text-lg shadow-lg glow-gold transition-all duration-300"
          >
            Start Your Free Assessment
          </motion.button>
        </div>
      </div>

      {/* Footer content */}
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-bold mb-2">Pharma Supply Chain Automation</h3>
            <p className="text-primary-foreground/60 text-sm">
              Transforming pharmaceutical operations with intelligent automation
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="mailto:sandi.srkoc@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Contact</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sandi-srkoc/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </motion.a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Pharma Supply Chain Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

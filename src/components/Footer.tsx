import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    // { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
    // { icon: FaGlobe, href: personalInfo.portfolio, label: "Portfolio" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-extrabold text-gradient-gold mb-2">
              NP
            </h3>
            <p className="text-sm text-primary-foreground/80">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent/10 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all hover-glow"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-glow animate-glow-pulse"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} {personalInfo.name}.
            {/* <Heart className="h-4 w-4 text-accent animate-glow-pulse fill-accent" /> and code. */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'framer-motion';
import novartisLogo from '@/assets/novartis-logo.svg';
import sandozLogo from '@/assets/sandoz-logo.svg';
import sandozLekLogo from '@/assets/sandoz-lek-logo.png';

export const LogoBanner = () => {
  const logos = [
    { src: novartisLogo, alt: "Novartis" },
    { src: sandozLogo, alt: "Sandoz" },
    { src: sandozLekLogo, alt: "Sandoz Lek" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-8 bg-secondary/30 overflow-hidden border-y border-border/50">
      <div className="container-wide mb-4">
        <p className="text-center text-sm text-muted-foreground">
          Experience from industry leaders
        </p>
      </div>
      
      <div className="relative">
        <motion.div
          className="flex items-center gap-16 md:gap-24"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-10 md:h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto object-contain max-w-[180px] md:max-w-[220px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

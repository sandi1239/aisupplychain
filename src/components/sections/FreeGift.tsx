import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gift, FileSpreadsheet, BookOpen, Video, ArrowRight, ExternalLink } from 'lucide-react';

export const FreeGift = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const giftIncludes = [
    { icon: FileSpreadsheet, text: "Complete VBA fundamentals & advanced techniques" },
    { icon: BookOpen, text: "Real-world Excel automation examples" },
    { icon: Video, text: "Step-by-step tutorials from beginner to expert" },
  ];

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-3xl" />
          
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-medium border border-accent/20 overflow-hidden">
            {/* Floating gift icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center"
            >
              <Gift className="w-12 h-12 text-accent" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  <Gift className="w-4 h-4" />
                  Free Gift
                </span>
                
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Thank You for Your Time
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you decide to work with me or not, I appreciate you taking the time to learn about 
                  what I do. As a token of gratitude, here's my complete 
                  <span className="font-semibold text-foreground"> Excel Automation Mastery </span> 
                  course—completely free.
                </p>

                <div className="space-y-3 mb-8">
                  {giftIncludes.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href="https://drive.google.com/drive/folders/1RU74CJ6M5f9Rkgf6rQLDuTBzacWFJuyc?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl gold-gradient text-accent-foreground font-semibold shadow-lg glow-gold transition-all duration-300 hover:shadow-xl"
                >
                  <Gift className="w-5 h-5" />
                  Get Your Free Course
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="hidden md:block"
              >
                <div className="relative">
                  {/* Mock course preview */}
                  <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 shadow-strong">
                    <div className="rounded-xl bg-white/10 backdrop-blur-sm p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <FileSpreadsheet className="w-8 h-8 text-accent" />
                        <div>
                          <h4 className="font-semibold text-primary-foreground">Excel Automation Mastery</h4>
                          <p className="text-xs text-primary-foreground/60">From Beginner to Expert</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {["VBA Fundamentals", "SAP Data Integration", "Dashboard Creation", "Advanced Automation"].map((module, i) => (
                          <div key={module} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-xs text-accent">
                              {i + 1}
                            </div>
                            {module}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs text-primary-foreground/60">Value: $497</span>
                        <span className="text-accent font-bold">FREE</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-accent/20 -z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

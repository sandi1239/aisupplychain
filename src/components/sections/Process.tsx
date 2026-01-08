import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Wrench, BarChart3, Repeat } from 'lucide-react';

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Discovery Call",
      description: "We discuss your specific pain points, data sources, and priority areas. No commitments—just understanding.",
      duration: "30 min",
    },
    {
      icon: Wrench,
      step: "02",
      title: "5-Week Free Trial",
      description: "I build and deploy a working automation using your real SAP exports. You see results before you pay anything.",
      duration: "5 weeks",
    },
    {
      icon: BarChart3,
      step: "03",
      title: "Measure Impact",
      description: "Track hours saved, stockouts prevented, and operational improvements. Quantify the ROI together.",
      duration: "7-14 days",
    },
    {
      icon: Repeat,
      step: "04",
      title: "Ongoing Support",
      description: "Continue with monthly service that includes updates, new features, and continuous improvement.",
      duration: "Monthly",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, <span className="gold-text">Risk-Free</span> Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No long sales cycles, no IT approvals needed, no software to install. 
            Just real results using your existing systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Step number */}
                <div className="relative z-10 mb-6">
                  <div className="w-12 h-12 rounded-full bg-card border-2 border-accent flex items-center justify-center mx-auto lg:mx-0">
                    <span className="font-bold text-accent">{step.step}</span>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium">
                    ⏱ {step.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantee box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-6 md:p-8 border border-accent/20 text-center">
            <div className="text-2xl mb-2">🛡️</div>
            <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
              Risk-Reversal Guarantee
            </h4>
            <p className="text-muted-foreground">
              If the solution doesn't meet expectations, you get additional free weeks until it does. 
              <span className="font-medium text-foreground"> Your satisfaction is guaranteed.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

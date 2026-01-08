import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Clock, DollarSign, Brain } from 'lucide-react';

export const PainPoints = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Critical Stockouts",
      description: "A single stockout can cost $500K-$2M in lost revenue and regulatory penalties",
      stat: "33%",
      statLabel: "of facilities experience stockouts",
    },
    {
      icon: Clock,
      title: "Manual Data Entry",
      description: "Supply chain planners waste 50+ hours per week on manual SAP/Excel work",
      stat: "50+",
      statLabel: "hours wasted weekly",
    },
    {
      icon: DollarSign,
      title: "Hidden Labor Costs",
      description: "At $50-75/hour loaded cost, manual work wastes $130K-$195K annually per site",
      stat: "$195K",
      statLabel: "wasted per year",
    },
    {
      icon: Brain,
      title: "Spreadsheet Errors",
      description: "90% of spreadsheets contain errors, risking billion-dollar mistakes",
      stat: "90%",
      statLabel: "of spreadsheets have errors",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Is Your Supply Chain <span className="text-destructive">Bleeding Money?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pharmaceutical supply chains lose millions annually to preventable problems. 
            Here's what's likely costing you right now.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="stat-card group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <point.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {point.description}
              </p>
              <div className="pt-4 border-t border-border">
                <motion.div 
                  className="text-3xl font-bold text-destructive"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {point.stat}
                </motion.div>
                <div className="text-xs text-muted-foreground">{point.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

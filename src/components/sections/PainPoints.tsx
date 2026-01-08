import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Custom animated graphics for each pain point
const StockoutGraphic = ({ isInView }: { isInView: boolean }) => (
  <div className="w-16 h-16 relative">
    <svg viewBox="0 0 64 64" className="w-full h-full">
      {/* Declining bar chart */}
      <motion.rect
        x="4" y="20" width="10" height="40" rx="2"
        className="fill-destructive/30"
        initial={{ height: 0, y: 60 }}
        animate={isInView ? { height: 40, y: 20 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
      <motion.rect
        x="18" y="30" width="10" height="30" rx="2"
        className="fill-destructive/50"
        initial={{ height: 0, y: 60 }}
        animate={isInView ? { height: 30, y: 30 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      <motion.rect
        x="32" y="42" width="10" height="18" rx="2"
        className="fill-destructive/70"
        initial={{ height: 0, y: 60 }}
        animate={isInView ? { height: 18, y: 42 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      />
      <motion.rect
        x="46" y="54" width="10" height="6" rx="2"
        className="fill-destructive"
        initial={{ height: 0, y: 60 }}
        animate={isInView ? { height: 6, y: 54 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      {/* Warning indicator */}
      <motion.circle
        cx="51" cy="20" r="8"
        className="fill-destructive"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: [0, 1.2, 1] } : {}}
        transition={{ delay: 0.6, duration: 0.4 }}
      />
      <motion.text
        x="51" y="24" textAnchor="middle" className="fill-white text-xs font-bold"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >
        !
      </motion.text>
    </svg>
  </div>
);

const ManualDataGraphic = ({ isInView }: { isInView: boolean }) => (
  <div className="w-16 h-16 relative">
    <svg viewBox="0 0 64 64" className="w-full h-full">
      {/* Clock with spinning hands */}
      <motion.circle
        cx="32" cy="32" r="26"
        className="stroke-destructive/30 fill-none"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.8 }}
      />
      <motion.circle
        cx="32" cy="32" r="20"
        className="stroke-destructive/20 fill-destructive/5"
        strokeWidth="2"
      />
      {/* Hour hand */}
      <motion.line
        x1="32" y1="32" x2="32" y2="20"
        className="stroke-destructive"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ rotate: 0 }}
        animate={isInView ? { rotate: 360 } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "32px 32px" }}
      />
      {/* Minute hand */}
      <motion.line
        x1="32" y1="32" x2="32" y2="16"
        className="stroke-destructive/70"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ rotate: 0 }}
        animate={isInView ? { rotate: 360 } : {}}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "32px 32px" }}
      />
      {/* Center dot */}
      <circle cx="32" cy="32" r="3" className="fill-destructive" />
      {/* "50+" badge */}
      <motion.rect
        x="42" y="2" width="20" height="14" rx="4"
        className="fill-destructive"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.5, type: "spring" }}
      />
      <motion.text
        x="52" y="12" textAnchor="middle" className="fill-white text-[8px] font-bold"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        50h
      </motion.text>
    </svg>
  </div>
);

const HiddenCostsGraphic = ({ isInView }: { isInView: boolean }) => (
  <div className="w-16 h-16 relative">
    <svg viewBox="0 0 64 64" className="w-full h-full">
      {/* Stacked coins/money burning away */}
      <motion.ellipse
        cx="32" cy="52" rx="20" ry="6"
        className="fill-destructive/20"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.3 }}
      />
      <motion.ellipse
        cx="32" cy="44" rx="18" ry="5"
        className="fill-destructive/30"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.3 }}
      />
      <motion.ellipse
        cx="32" cy="36" rx="16" ry="4"
        className="fill-destructive/50"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.3 }}
      />
      <motion.ellipse
        cx="32" cy="28" rx="14" ry="4"
        className="fill-destructive/70"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.3 }}
      />
      {/* Dollar sign */}
      <motion.text
        x="32" y="20" textAnchor="middle" className="fill-destructive text-lg font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
      >
        $
      </motion.text>
      {/* Downward arrow */}
      <motion.path
        d="M50 20 L56 28 L53 28 L53 38 L47 38 L47 28 L44 28 Z"
        className="fill-destructive"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: [0, 3, 0] } : {}}
        transition={{ delay: 0.6, y: { duration: 1, repeat: Infinity } }}
      />
    </svg>
  </div>
);

const SpreadsheetErrorsGraphic = ({ isInView }: { isInView: boolean }) => (
  <div className="w-16 h-16 relative">
    <svg viewBox="0 0 64 64" className="w-full h-full">
      {/* Spreadsheet grid */}
      <motion.rect
        x="8" y="8" width="48" height="48" rx="4"
        className="fill-destructive/10 stroke-destructive/30"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      />
      {/* Grid lines */}
      <motion.line x1="8" y1="24" x2="56" y2="24" className="stroke-destructive/20" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.2 }} />
      <motion.line x1="8" y1="40" x2="56" y2="40" className="stroke-destructive/20" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.25 }} />
      <motion.line x1="24" y1="8" x2="24" y2="56" className="stroke-destructive/20" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.3 }} />
      <motion.line x1="40" y1="8" x2="40" y2="56" className="stroke-destructive/20" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.35 }} />
      
      {/* Error X marks */}
      <motion.g
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <line x1="28" y1="28" x2="36" y2="36" className="stroke-destructive" strokeWidth="2" strokeLinecap="round" />
        <line x1="36" y1="28" x2="28" y2="36" className="stroke-destructive" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      <motion.g
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <line x1="44" y1="12" x2="52" y2="20" className="stroke-destructive" strokeWidth="2" strokeLinecap="round" />
        <line x1="52" y1="12" x2="44" y2="20" className="stroke-destructive" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      <motion.g
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.7, type: "spring" }}
      >
        <line x1="12" y1="44" x2="20" y2="52" className="stroke-destructive" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="44" x2="12" y2="52" className="stroke-destructive" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      
      {/* 90% badge */}
      <motion.circle
        cx="52" cy="52" r="10"
        className="fill-destructive"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: [0, 1.2, 1] } : {}}
        transition={{ delay: 0.8, duration: 0.4 }}
      />
      <motion.text
        x="52" y="55" textAnchor="middle" className="fill-white text-[7px] font-bold"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 }}
      >
        90%
      </motion.text>
    </svg>
  </div>
);

export const PainPoints = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const painPoints = [
    {
      graphic: StockoutGraphic,
      title: "Critical Stockouts",
      description: "A single stockout can cost $500K-$2M in lost revenue and regulatory penalties",
      stat: "33%",
      statLabel: "of facilities experience stockouts",
    },
    {
      graphic: ManualDataGraphic,
      title: "Manual Data Entry",
      description: "Supply chain planners waste 50+ hours per week on manual SAP/Excel work",
      stat: "50+",
      statLabel: "hours wasted weekly",
    },
    {
      graphic: HiddenCostsGraphic,
      title: "Hidden Labor Costs",
      description: "At $50-75/hour loaded cost, manual work wastes $130K-$195K annually per site",
      stat: "$195K",
      statLabel: "wasted per year",
    },
    {
      graphic: SpreadsheetErrorsGraphic,
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
              <div className="mb-4">
                <point.graphic isInView={isInView} />
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

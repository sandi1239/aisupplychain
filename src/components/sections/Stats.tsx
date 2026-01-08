import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Clock, TrendingDown, Heart, Sparkles } from 'lucide-react';

export const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Clock,
      value: 50,
      suffix: "+",
      label: "Hours Saved Per Week",
      description: "Eliminate manual SAP/Excel data extraction and processing",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: TrendingDown,
      value: 85,
      suffix: "%",
      label: "Reduction in Redundant Work",
      description: "Automate repetitive tasks and focus on strategic decisions",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Heart,
      value: 70,
      suffix: "%",
      label: "Less Operational Stress",
      description: "Proactive alerts replace reactive firefighting",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
    },
    {
      icon: Sparkles,
      value: 3,
      suffix: "x",
      label: "Better Work-Life Balance",
      description: "Leave on time knowing your supply chain is monitored",
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
  ];

  return (
    <section ref={ref} className="section-padding hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Real Results
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Transform Your <span className="gold-text">Daily Operations</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Based on real automation implementations at pharmaceutical manufacturing sites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <motion.div 
                className="glass-card rounded-2xl p-6 h-full"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`w-14 h-14 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </motion.div>
                
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                
                <h3 className="font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

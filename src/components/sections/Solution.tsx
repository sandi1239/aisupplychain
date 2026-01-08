import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Eye, Shield, LineChart } from 'lucide-react';

export const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Eye,
      title: "Real-Time DOC Dashboard",
      description: "Complete Days of Coverage visibility across all SKUs. No more opening SAP APO one by one.",
    },
    {
      icon: Shield,
      title: "Stockout Prevention",
      description: "Predict stockouts 4-8 weeks in advance with automated alerts. Prevent disruptions before they happen.",
    },
    {
      icon: LineChart,
      title: "Supply Simulations",
      description: "Instantly simulate supply scenarios and see the impact. Make data-driven decisions in seconds.",
    },
    {
      icon: Zap,
      title: "Automated MRP Coverage",
      description: "Complete process order overview, consumption calculations, and gap identification—at a glance.",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              The Solution
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Real-Time Stockout Prevention & 
              <span className="gold-text"> DOC Intelligence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A continuously updated, automated system that monitors your entire inventory, 
              predicts problems before they happen, and frees up your team to focus on strategic work.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              {/* Mock dashboard visualization */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary/80 p-6">
                <div className="h-full rounded-xl bg-card/10 backdrop-blur-sm border border-white/10 p-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <span className="text-primary-foreground/80 text-sm font-medium">Live Dashboard</span>
                    </div>
                    <div className="text-primary-foreground/60 text-xs">Updated: Just now</div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "SKUs Monitored", value: "2,847" },
                      { label: "Alerts Active", value: "3" },
                      { label: "Hours Saved", value: "52" },
                    ].map((stat, index) => (
                      <motion.div 
                        key={stat.label} 
                        className="rounded-lg bg-white/10 p-3 text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <motion.div 
                          className="text-lg font-bold text-primary-foreground"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs text-primary-foreground/60">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart mockup */}
                  <div className="flex-1 rounded-lg bg-white/5 p-3">
                    <div className="flex items-end justify-around h-24 gap-1">
                      {[65, 45, 80, 55, 90, 70, 85, 40, 75, 60, 95, 50].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={isInView ? { height: `${height}%` } : {}}
                          transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                          className="flex-1 rounded-t bg-accent/60"
                        />
                      ))}
                    </div>
                    <div className="text-center text-xs text-primary-foreground/50 mt-2">
                      Days of Coverage Trend
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-medium p-4 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Stockout Prevented</div>
                  <div className="text-xs text-muted-foreground">$1.2M saved</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

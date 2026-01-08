import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { 
  BarChart3, 
  FileSpreadsheet, 
  Cog, 
  CalendarClock,
  TrendingUp,
  Package,
  AlertCircle,
  Gauge
} from 'lucide-react';

export const PastWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: BarChart3,
      title: "Days of Coverage Dashboard",
      description: "Automated DOC overview for all SKUs instead of opening SAP APO one by one. Supply quantity simulation capability.",
      impact: "Real-time visibility",
    },
    {
      icon: FileSpreadsheet,
      title: "MRP Coverage Plan",
      description: "Complete dashboard with process order scheduling, consumption calculations, current inventory, open orders, and gap identification.",
      impact: "50 hrs/week saved",
    },
    {
      icon: AlertCircle,
      title: "Stock-Out Projections",
      description: "Predictive analytics based on demand/supply data. Low shelf life, expiry risk, and write-off projections.",
      impact: "Weeks of advance warning",
    },
    {
      icon: CalendarClock,
      title: "Operational Planning File",
      description: "Optimal changeovers, BOM coverage, DOC, planned shelf life—all automated for fine scheduling.",
      impact: "Better scheduling",
    },
    {
      icon: TrendingUp,
      title: "Capacity Analytics",
      description: "Demonstrated capacity, run times, and actual performance reports with fine-tuning recommendations.",
      impact: "Optimized throughput",
    },
    {
      icon: Package,
      title: "Safety Stock Analytics",
      description: "Data-driven safety stock calculations and product-per-line allocation simulations.",
      impact: "Right inventory levels",
    },
  ];

  const metrics = [
    { value: 50, suffix: "+", label: "Hours Saved Weekly", icon: Cog },
    { value: 2847, suffix: "", label: "SKUs Monitored", icon: Package },
    { value: 12, suffix: ":1", label: "Minimum ROI", icon: TrendingUp },
    { value: 14, suffix: " days", label: "To First Insights", icon: Gauge },
  ];

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Proven Track Record
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Automations That <span className="gold-text">Actually Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real solutions built and tested in pharmaceutical manufacturing environments
          </p>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10"
            >
              <metric.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                <AnimatedCounter end={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="group bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <project.icon className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <motion.div 
                className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                ✓ {project.impact}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

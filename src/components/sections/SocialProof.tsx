import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Heart, MessageCircle } from 'lucide-react';
import avatarImg from '@/assets/avatar.jpg';
import novartisLogo from '@/assets/novartis-logo.svg';
import sandozLogo from '@/assets/sandoz-logo.svg';
import sandozLekLogo from '@/assets/sandoz-lek-logo.png';

export const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote: "This automation saved our team 50+ hours per week. We went from firefighting to strategic planning.",
      author: "Supply Chain Director",
      company: "Major Pharma Manufacturing Site",
      rating: 5,
      avatar: "SC",
      timeAgo: "2 days ago",
      likes: 24,
      comments: 5,
    },
    {
      quote: "The stockout predictions have been incredibly accurate. We prevented three critical shortages in the first quarter alone.",
      author: "Operations Manager",
      company: "Contract Manufacturing Organization",
      rating: 5,
      avatar: "OM",
      timeAgo: "1 week ago",
      likes: 18,
      comments: 3,
    },
    {
      quote: "Finally, someone who understands pharma supply chain. The ROI was visible within the first month.",
      author: "VP of Operations",
      company: "Mid-Sized Pharmaceutical Company",
      rating: 5,
      avatar: "VP",
      timeAgo: "3 days ago",
      likes: 31,
      comments: 8,
    },
    {
      quote: "Our inventory accuracy went from 85% to 99.2% in just 3 months. Game changer for compliance audits.",
      author: "Quality Assurance Lead",
      company: "Biotech Startup",
      rating: 5,
      avatar: "QA",
      timeAgo: "5 days ago",
      likes: 42,
      comments: 12,
    },
    {
      quote: "The dashboard visibility alone justified the investment. No more hunting through spreadsheets.",
      author: "Planning Manager",
      company: "Generic Drug Manufacturer",
      rating: 5,
      avatar: "PM",
      timeAgo: "1 day ago",
      likes: 15,
      comments: 2,
    },
    {
      quote: "Reduced our lead time variability by 40%. Customers are noticing the improvement.",
      author: "Customer Service Director",
      company: "Pharmaceutical Distributor",
      rating: 5,
      avatar: "CS",
      timeAgo: "4 days ago",
      likes: 27,
      comments: 6,
    },
    {
      quote: "Integration with our SAP system was seamless. Expected months of headaches, got days of setup.",
      author: "IT Manager",
      company: "API Manufacturer",
      rating: 5,
      avatar: "IT",
      timeAgo: "2 weeks ago",
      likes: 33,
      comments: 9,
    },
    {
      quote: "The automated alerts caught a supplier issue before it became a crisis. Worth every penny.",
      author: "Procurement Director",
      company: "Hospital Supply Chain",
      rating: 5,
      avatar: "PD",
      timeAgo: "6 days ago",
      likes: 21,
      comments: 4,
    },
    {
      quote: "Our team morale improved dramatically. Less manual work means more strategic thinking.",
      author: "HR Business Partner",
      company: "Global Pharma Company",
      rating: 5,
      avatar: "HR",
      timeAgo: "3 days ago",
      likes: 19,
      comments: 7,
    },
    {
      quote: "Compliance reporting that used to take 2 days now takes 2 hours. Auditors are impressed.",
      author: "Regulatory Affairs Manager",
      company: "Clinical Trial Supplier",
      rating: 5,
      avatar: "RA",
      timeAgo: "1 week ago",
      likes: 38,
      comments: 11,
    },
    {
      quote: "The demand forecasting accuracy improved by 35%. We're finally ahead of the curve.",
      author: "Demand Planner",
      company: "OTC Manufacturer",
      rating: 5,
      avatar: "DP",
      timeAgo: "4 days ago",
      likes: 29,
      comments: 5,
    },
    {
      quote: "Cut our safety stock by 25% without a single stockout. That's real working capital freed up.",
      author: "Finance Controller",
      company: "Specialty Pharma",
      rating: 5,
      avatar: "FC",
      timeAgo: "2 days ago",
      likes: 44,
      comments: 13,
    },
    {
      quote: "The training was excellent. Our team was up and running in less than a week.",
      author: "Learning & Development",
      company: "Vaccine Producer",
      rating: 5,
      avatar: "LD",
      timeAgo: "5 days ago",
      likes: 16,
      comments: 3,
    },
    {
      quote: "Real-time visibility across 12 warehouses. Finally, one source of truth.",
      author: "Logistics Director",
      company: "Cold Chain Specialist",
      rating: 5,
      avatar: "LG",
      timeAgo: "1 day ago",
      likes: 35,
      comments: 8,
    },
    {
      quote: "The cost savings paid for the implementation in the first quarter. Incredible ROI.",
      author: "CFO",
      company: "Regional Pharma Distributor",
      rating: 5,
      avatar: "CF",
      timeAgo: "3 days ago",
      likes: 52,
      comments: 14,
    },
    {
      quote: "Support team is exceptional. Any issue resolved within hours, not days.",
      author: "Operations Analyst",
      company: "Contract Packager",
      rating: 5,
      avatar: "OA",
      timeAgo: "6 days ago",
      likes: 23,
      comments: 6,
    },
    {
      quote: "We've eliminated 90% of our Excel-based processes. The error rate dropped to near zero.",
      author: "Process Excellence Lead",
      company: "Injectables Manufacturer",
      rating: 5,
      avatar: "PE",
      timeAgo: "4 days ago",
      likes: 41,
      comments: 10,
    },
    {
      quote: "Best investment we've made in supply chain technology in 10 years. No exaggeration.",
      author: "CEO",
      company: "Emerging Biotech",
      rating: 5,
      avatar: "CE",
      timeAgo: "2 days ago",
      likes: 67,
      comments: 18,
    },
  ];

  const logos = [
    { src: novartisLogo, alt: "Novartis" },
    { src: sandozLogo, alt: "Sandoz" },
    { src: sandozLekLogo, alt: "Sandoz Lek" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

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
            Social Proof
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="gold-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from pharmaceutical professionals who've transformed their operations
          </p>
        </motion.div>

        {/* Skool-style Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="bg-card rounded-xl overflow-hidden shadow-soft border border-border"
            >
              {/* Card Header - Profile */}
              <div className="p-4 pb-3 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.timeAgo}</div>
                  </div>
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="px-4 pt-3 flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 + i * 0.05, type: "spring" }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              
              {/* Content */}
              <div className="p-4 pt-2">
                <p className="text-foreground text-sm leading-relaxed mb-2">
                  {testimonial.quote}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
              
              {/* Card Footer - Engagement */}
              <div className="px-4 py-3 border-t border-border/50 flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-red-500 transition-colors group">
                  <Heart className="w-4 h-4 group-hover:fill-red-500" />
                  <span className="text-xs font-medium">{testimonial.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs font-medium">{testimonial.comments}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About / Credibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-medium border border-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative mb-6">
                <img 
                  src={avatarImg} 
                  alt="Sandi - Pharmaceutical Supply Chain Expert" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-accent shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  15+ Years
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Sandi</h3>
              <p className="text-primary font-medium mb-4">Pharmaceutical Supply Chain Expert</p>
              <div className="flex flex-wrap gap-2">
                {["SAP Expert", "Power BI", "Supply Planning", "Process Automation"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over <span className="text-foreground font-semibold">15 years at Novartis/Sandoz</span>, 
                I've lived through the daily frustrations of pharmaceutical supply chain operations. 
                From managing global supply networks to implementing enterprise-wide automation, 
                I understand both the technical and practical challenges you face.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Now, I help pharmaceutical companies implement the same automation solutions 
                that saved my teams <span className="text-foreground font-semibold">thousands of hours annually</span>. 
                My approach combines deep industry knowledge with practical, proven solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Logo Banner */}
      <div className="mt-16 overflow-hidden border-t border-border/50 pt-8">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Experience from industry leaders
        </p>
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

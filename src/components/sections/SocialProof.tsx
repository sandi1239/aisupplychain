import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star, Building2 } from 'lucide-react';
import avatarImg from '@/assets/avatar.jpg';

export const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote: "This automation saved our team 50+ hours per week. We went from firefighting to strategic planning.",
      author: "Supply Chain Director",
      company: "Major Pharma Manufacturing Site",
      rating: 5,
    },
    {
      quote: "The stockout predictions have been incredibly accurate. We prevented three critical shortages in the first quarter alone.",
      author: "Operations Manager",
      company: "Contract Manufacturing Organization",
      rating: 5,
    },
    {
      quote: "Finally, someone who understands pharma supply chain. The ROI was visible within the first month.",
      author: "VP of Operations",
      company: "Mid-Sized Pharmaceutical Company",
      rating: 5,
    },
  ];

  const trustedBy = [
    "Novartis", "Sandoz", "Lek d.d.", "Global Pharma Partners"
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
            Social Proof
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="gold-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from pharmaceutical professionals who've transformed their operations
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
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
                  className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">11+</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Sandi</h3>
              <p className="text-muted-foreground text-center md:text-left">
                Supply Chain Analyst at Sandoz Pharma / Novartis
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                11+ Years of Pharma Supply Chain Expertise
              </h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I've spent over a decade at Lek d.d. Lendava (Novartis/Sandoz) solving the exact problems 
                you're facing. My automations save real time and prevent real stockouts—because they were 
                built from the inside, for real pharmaceutical operations.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Excel/VBA Expert', 'SAP Integration', 'AI Automation', 'Supply Chain Planning'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">Experience from industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustedBy.map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

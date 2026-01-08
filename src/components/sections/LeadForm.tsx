import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, Check, User, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  interest: z.enum(["offer", "other"]),
  otherDetails: z.string().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormProps {
  formRef?: React.RefObject<HTMLDivElement>;
}

export const LeadForm = ({ formRef }: LeadFormProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;

  const validateStep = () => {
    setErrors({});
    
    if (step === 1) {
      if (!formData.name || formData.name.length < 2) {
        setErrors({ name: "Please enter your name (at least 2 characters)" });
        return false;
      }
    } else if (step === 2) {
      const emailResult = z.string().email().safeParse(formData.email);
      if (!emailResult.success) {
        setErrors({ email: "Please enter a valid email address" });
        return false;
      }
    } else if (step === 3) {
      if (!formData.interest) {
        setErrors({ interest: "Please select an option" });
        return false;
      }
    }
    
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < totalSteps) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('leads').insert({
        name: formData.name!,
        email: formData.email!,
        interest: formData.interest!,
      });

      if (error) throw error;
      
      toast.success('Assessment request submitted successfully!');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  if (isSubmitted) {
    return (
      <section ref={formRef} className="section-padding bg-primary">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-strong text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You, {formData.name}!
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              I'll review your information and get back to you within 24-48 hours 
              to discuss how we can transform your supply chain operations.
            </p>
            <p className="text-sm text-muted-foreground">
              Check your inbox at <strong>{formData.email}</strong> for next steps.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={formRef} className="section-padding hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Get Started
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Ready to <span className="gold-text">Transform</span> Your Operations?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Answer 3 quick questions and I'll personally assess how automation can help your site.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 shadow-strong">
            {/* Progress bar */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                    ${s < step ? 'bg-accent text-accent-foreground' : s === step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
                  `}>
                    {s < step ? <Check className="w-4 h-4" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-1 mx-2 rounded-full transition-colors ${s < step ? 'bg-accent' : 'bg-muted'}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Form steps */}
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">What's your name?</h3>
                        <p className="text-sm text-muted-foreground">Let's get acquainted</p>
                      </div>
                    </div>
                    
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name || ''}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-14 text-lg"
                      autoFocus
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-2">{errors.name}</p>
                    )}
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">What's your email?</h3>
                        <p className="text-sm text-muted-foreground">I'll send your assessment here</p>
                      </div>
                    </div>
                    
                    <Input
                      type="email"
                      placeholder="Enter your work email"
                      value={formData.email || ''}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-14 text-lg"
                      autoFocus
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-2">{errors.email}</p>
                    )}
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">What interests you?</h3>
                        <p className="text-sm text-muted-foreground">Help me understand your needs</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, interest: 'offer' })}
                        className={`
                          w-full p-4 rounded-xl border-2 text-left transition-all
                          ${formData.interest === 'offer' 
                            ? 'border-accent bg-accent/5' 
                            : 'border-border hover:border-accent/50'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`
                            w-5 h-5 rounded-full border-2 flex items-center justify-center
                            ${formData.interest === 'offer' ? 'border-accent bg-accent' : 'border-muted-foreground'}
                          `}>
                            {formData.interest === 'offer' && <Check className="w-3 h-3 text-accent-foreground" />}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">Yes, I'm interested in the automation offer</div>
                            <div className="text-sm text-muted-foreground">Tell me more about the DOC Dashboard</div>
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, interest: 'other' })}
                        className={`
                          w-full p-4 rounded-xl border-2 text-left transition-all
                          ${formData.interest === 'other' 
                            ? 'border-accent bg-accent/5' 
                            : 'border-border hover:border-accent/50'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`
                            w-5 h-5 rounded-full border-2 flex items-center justify-center
                            ${formData.interest === 'other' ? 'border-accent bg-accent' : 'border-muted-foreground'}
                          `}>
                            {formData.interest === 'other' && <Check className="w-3 h-3 text-accent-foreground" />}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">I have something else in mind</div>
                            <div className="text-sm text-muted-foreground">Custom automation or consulting needs</div>
                          </div>
                        </div>
                      </button>
                    </div>
                    {errors.interest && (
                      <p className="text-destructive text-sm mt-2">{errors.interest}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                type="button"
                variant="ghost"
                onClick={handleBack}
                disabled={step === 1}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              <Button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className="gap-2 gold-gradient text-accent-foreground hover:opacity-90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : step === totalSteps ? (
                  <>
                    Submit
                    <Check className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </div>

          <p className="text-center text-primary-foreground/50 text-sm mt-6">
            🔒 Your information is secure and will never be shared
          </p>
        </motion.div>
      </div>
    </section>
  );
};

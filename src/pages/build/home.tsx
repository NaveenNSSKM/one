
import { GlassCard } from "@/components/ui/glass-card";
import { MonoLabel } from "@/components/ui/mono-label";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight, Zap, Target, BarChart3, Users, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "300+", label: "GTM teams trust us" },
  { value: "3x", label: "Average pipeline growth" },
  { value: "150+", label: "Data providers" },
  { value: "94%", label: "Customer satisfaction" },
];

const features = [
  {
    icon: Target,
    title: "Precision Targeting",
    description: "AI-powered lead scoring and intent data to find your perfect customers before they find you.",
  },
  {
    icon: Zap,
    title: "Autonomous Execution",
    description: "AI agents that qualify, enrich, and route leads 24/7 without human intervention.",
  },
  {
    icon: BarChart3,
    title: "Revenue Intelligence",
    description: "Real-time dashboards and forecasting that give you complete visibility into your pipeline.",
  },
  {
    icon: Users,
    title: "Managed Services",
    description: "Expert SDRs backed by our technology stack to book qualified meetings on your behalf.",
  },
];

const testimonials = [
  {
    quote: "Intelous has been a game changer for our outbound. We've 3x'd our pipeline in 6 months.",
    author: "Sarah Chen",
    role: "VP Sales",
    company: "TechStart",
  },
  {
    quote: "The AI agents are incredible. They handle 80% of our lead qualification automatically.",
    author: "Marcus Wright",
    role: "CRO",
    company: "ScaleUp Inc",
  },
];

const productTiers = [
  {
    name: "Core",
    price: "$2,500",
    period: "/month",
    description: "For teams starting their ABM journey",
    features: ["AI-Powered Lead Scoring", "Real-time Intent Data", "CRM Integration", "Basic Reporting"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$7,500",
    period: "/month",
    description: "For scaling revenue teams",
    features: ["Everything in Core", "Dedicated SDR Pod", "BANT Qualification", "Meeting Booking", "Custom Playbooks"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: ["Everything in Pro", "Custom AI Training", "White-Glove Onboarding", "Executive Reporting", "Dedicated Success Manager"],
    highlighted: false,
  },
];

export function BuildHome() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink/10 border border-pink/20 rounded-full text-sm text-pink mb-8">
              <Zap className="w-4 h-4" />
              <span>Building the future of GTM</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              From concept to <span className="text-pink">market dominance</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Intelous Labs partners with ambitious ventures to build the technical infrastructure that powers the next generation of business.
            </p>

            <div className="flex flex-wrap gap-4">
              <AnimatedButton size="lg" className="bg-pink hover:bg-pink/90" data-testid="button-start-build">
                Start Building
                <ArrowRight className="w-4 h-4 ml-2" />
              </AnimatedButton>
              <AnimatedButton variant="secondary" size="lg" data-testid="button-contact-labs">
                Contact Labs
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="CAPABILITIES"
            title="We build what others can't"
            description="Deep technical expertise meets rapid execution."
            centered
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {features.map((feature) => (
              <GlassCard key={feature.title} variant="subtle" className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-pink/10 border border-pink/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BuildHome;

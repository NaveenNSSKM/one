import { GlassCard } from "@/components/ui/glass-card";
import { MonoLabel } from "@/components/ui/mono-label";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { ArrowRight, CheckCircle2, Users, Target, Brain, Layers } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Fractional GTM Management",
    description: "Strategic oversight that doesn't sleep. We act as your internal RevOps and Marketing department.",
    features: ["Weekly strategy calls", "Pipeline reviews", "Campaign optimization"],
  },
  {
    icon: Target,
    title: "BANT-Qualified Lead Gen",
    description: "We verify Budget, Authority, Need, and Timeline before any meeting hits your calendar.",
    features: ["Deep qualification", "ICP matching", "Meeting booking"],
  },
  {
    icon: Brain,
    title: "AI-Powered Sentiment Analysis",
    description: "Classify human intent—Positive, Neutral, or Negative—to trigger automated workflows.",
    features: ["Real-time classification", "Automated routing", "Response prioritization"],
  },
  {
    icon: Layers,
    title: "Account-Based Orchestration",
    description: "Omnichannel dominance. Coordinate Email, LinkedIn, and SMS based on real-time intent.",
    features: ["Multi-channel sequences", "Intent-based triggers", "Personalization at scale"],
  },
];

const pricingTiers = [
  {
    name: "Starter Pod",
    meetings: "5-10",
    price: "$3,500",
    period: "/month",
    features: ["1 SDR Assigned", "Basic ICP Targeting", "Weekly Reporting", "CRM Integration"],
  },
  {
    name: "Growth Pod",
    meetings: "15-25",
    price: "$7,500",
    period: "/month",
    features: ["2 SDRs Assigned", "Advanced ICP + Intent", "Daily Standups", "Custom Sequences", "Dedicated Account Manager"],
    popular: true,
  },
  {
    name: "Enterprise Pod",
    meetings: "40+",
    price: "Custom",
    period: "",
    features: ["Dedicated Team", "Full ABM Orchestration", "Executive Reporting", "White-Glove Service", "Custom Integrations"],
  },
];

export function ScaleServices() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <MonoLabel color="blue" className="mb-6 block">SERVICES</MonoLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Human expertise meets{" "}
              <span className="text-blue">autonomous speed</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We replace the friction of traditional agencies and tool-sprawl with Productized Capacity. 
              Strategic oversight meets agentic execution.
            </p>
            <AnimatedButton size="lg" data-testid="button-view-pricing">
              View pricing
              <ArrowRight className="w-4 h-4 ml-2" />
            </AnimatedButton>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="CAPABILITIES"
            title="The complete GTM stack"
            description="Everything you need to build predictable pipeline, delivered as a service."
            labelColor="blue"
            size="lg"
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {services.map((service) => (
              <GlassCard key={service.title} variant="subtle" className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-blue" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="PRICING"
            title="SDR Pod Pricing"
            description="Predictable costs, predictable meetings. Choose your growth velocity."
            centered
            labelColor="blue"
            size="lg"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {pricingTiers.map((tier) => (
              <GlassCard 
                key={tier.name} 
                variant={tier.popular ? "elevated" : "default"}
                className={tier.popular ? "border-blue/50 ring-1 ring-blue/20" : ""}
              >
                <div className="p-8 h-full flex flex-col">
                  {tier.popular && (
                    <div className="text-xs font-medium text-blue mb-4">MOST POPULAR</div>
                  )}
                  <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{tier.meetings} meetings/month</div>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-semibold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <AnimatedButton 
                    variant={tier.popular ? "primary" : "secondary"} 
                    className={tier.popular ? "bg-blue text-white hover:bg-blue/90" : ""}
                    data-testid={`button-select-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Get started
                  </AnimatedButton>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <MonoLabel color="blue" className="mb-6 block">READY TO SCALE?</MonoLabel>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Let's build your pipeline together
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Book a call to discuss your GTM goals and see how we can help.
          </p>
          <AnimatedButton size="lg" className="bg-blue text-white hover:bg-blue/90" data-testid="button-book-call">
            Book a strategy call
            <ArrowRight className="w-4 h-4 ml-2" />
          </AnimatedButton>
        </div>
      </section>
    </div>
  );
}

export default ScaleServices;

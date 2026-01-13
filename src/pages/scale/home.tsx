
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

export function ScaleHome() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 border border-blue/20 rounded-full text-sm text-blue mb-8">
              <Zap className="w-4 h-4" />
              <span>Trusted by 300+ GTM teams</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Go to market with unique data — and the ability to{" "}
              <span className="text-blue">act on it</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Bring AI agents, enrichment, and intent data together and turn insights into relevant, timely action.
            </p>

            <div className="flex flex-wrap gap-4">
              <AnimatedButton size="lg" data-testid="button-start-free">
                Start building for free
                <ArrowRight className="w-4 h-4 ml-2" />
              </AnimatedButton>
              <AnimatedButton variant="secondary" size="lg" data-testid="button-get-demo">
                Get a demo
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-blue mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="PLATFORM"
            title="Every GTM data point imaginable, in one place"
            description="Understand your total market, your customers, and the gap between them. Then act on it."
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {features.map((feature) => (
              <GlassCard key={feature.title} variant="subtle" className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue" />
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

      <section className="py-24 lg:py-32 px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="PRICING"
            title="Choose your growth path"
            description="Flexible plans that scale with your revenue goals."
            centered
            size="lg"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {productTiers.map((tier) => (
              <GlassCard
                key={tier.name}
                variant={tier.highlighted ? "elevated" : "default"}
                className={tier.highlighted ? "border-blue/50 ring-1 ring-blue/20" : ""}
              >
                <div className="p-8 h-full flex flex-col">
                  {tier.highlighted && (
                    <div className="text-xs font-medium text-blue mb-4">MOST POPULAR</div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-semibold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <AnimatedButton
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full"
                    data-testid={`button-select-${tier.name.toLowerCase()}`}
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
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="TESTIMONIALS"
            title="Loved by GTM teams everywhere"
            centered
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {testimonials.map((testimonial, i) => (
              <GlassCard key={i} variant="subtle" className="p-8">
                <p className="text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center">
                    <span className="text-blue font-semibold">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <MonoLabel className="mb-6 block">READY TO SCALE?</MonoLabel>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Start your GTM transformation today
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join 300+ teams already using Intelous to accelerate their revenue growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton size="lg" data-testid="button-cta-start">
              Start building for free
              <ArrowRight className="w-4 h-4 ml-2" />
            </AnimatedButton>
            <AnimatedButton variant="secondary" size="lg" data-testid="button-cta-demo">
              Talk to sales
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScaleHome;

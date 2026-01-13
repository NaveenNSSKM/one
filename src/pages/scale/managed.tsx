import { GlassCard } from "@/components/ui/glass-card";
import { MonoLabel } from "@/components/ui/mono-label";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { BladeCard } from "@/components/ui/blade-card";
import { TechBadge } from "@/components/ui/tech-badge";

const commandCenterLogs = [
  "[09:14:22] LEAD_ENRICHED: DataFlow Systems | Score: 87",
  "[09:14:45] SEQUENCE_TRIGGERED: Email #1 Sent",
  "[09:15:02] INTENT_SIGNAL: Pricing Page Visit",
  "[09:15:18] AI_CLASSIFICATION: Response = POSITIVE",
  "[09:15:33] MEETING_BOOKED: Thu 2:30 PM EST",
  "[09:16:01] CRM_SYNC: Opportunity Created",
  "[09:16:22] ALERT: New Hot Lead Detected",
  "[09:16:45] SEQUENCE_TRIGGERED: LinkedIn Touch",
];

const metrics = [
  { label: "Active Leads", value: "2,847", change: "+12%" },
  { label: "Pipeline Value", value: "$1.2M", change: "+8%" },
  { label: "Meetings This Week", value: "23", change: "+15%" },
  { label: "Avg Response Time", value: "4.2h", change: "-22%" },
];

const services = [
  {
    id: "GTM-01",
    title: "ICP Mapping & Targeting",
    description: "We define your ideal customer profile using firmographic, technographic, and intent signals.",
    specs: "200M+ Entities | Real-time Updates",
  },
  {
    id: "GTM-02",
    title: "Outbound Sequence Design",
    description: "Multi-channel sequences optimized for conversion. Email, LinkedIn, and phone integrated.",
    specs: "12-Touch Sequences | A/B Testing",
  },
  {
    id: "GTM-03",
    title: "Lead Qualification & BANT",
    description: "Every lead verified for Budget, Authority, Need, and Timeline before it reaches you.",
    specs: "94% Qualification Accuracy",
  },
  {
    id: "GTM-04",
    title: "Meeting Booking & Handoff",
    description: "Qualified meetings scheduled directly on your calendar with full context briefing.",
    specs: "24h Response SLA",
  },
];

const dataCards = [
  { stat: "200M+", label: "Enriched Entities", description: "Global B2B database with real-time updates" },
  { stat: "47", label: "Intent Signals", description: "Behavioral triggers across the web" },
  { stat: "94%", label: "Data Accuracy", description: "Verified contact information" },
];

const pods = [
  {
    tier: "GROWTH",
    capacity: "15-25 meetings/mo",
    team: ["1 Account Manager", "2 SDRs", "AI Orchestration"],
    price: "$7,500",
  },
  {
    tier: "SCALE",
    capacity: "30-50 meetings/mo",
    team: ["1 Account Manager", "4 SDRs", "AI Orchestration", "Weekly Strategy"],
    price: "$15,000",
    featured: true,
  },
  {
    tier: "ENTERPRISE",
    capacity: "Custom",
    team: ["Dedicated Team", "Full ABM Stack", "Executive Reporting", "24/7 Support"],
    price: "Custom",
  },
];

export function ScaleManaged() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 0, 128, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 128, 0.02) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <MonoLabel color="blue" className="mb-4 block">MANAGED GTM COMMAND CENTER</MonoLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Your Revenue Engine,<br />Fully Managed.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            We don't just provide tools—we run your entire go-to-market operation. 
            From lead generation to qualified meetings on your calendar.
          </p>
          <AnimatedButton variant="secondary" data-testid="button-get-started">
            [ GET STARTED ]
          </AnimatedButton>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="overflow-hidden">
            <div className="grid lg:grid-cols-3">
              <div className="lg:col-span-2 p-6 border-r border-border">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 font-mono border-b border-border pb-3">
                  <span>LIVE ACTIVITY LOG</span>
                  <span className="flex items-center gap-2">
                    <StatusIndicator status="active" />
                    STREAMING
                  </span>
                </div>
                <div className="h-64 overflow-hidden font-mono text-sm">
                  <div className="animate-scroll-up space-y-2">
                    {[...commandCenterLogs, ...commandCenterLogs].map((log, i) => (
                      <div key={i} className="text-pink opacity-80">
                        <span className="text-muted-foreground">{log.split("]")[0]}]</span>
                        <span>{log.split("]")[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="bg-card/50 border border-border p-4 rounded-md">
                    <div className="text-xs text-muted-foreground uppercase mb-1">{metric.label}</div>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold font-mono">{metric.value}</span>
                      <span className="text-pink text-sm font-mono">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="SERVICE PILLARS"
            title="End-to-End GTM Execution"
          />
          
          <div className="space-y-3">
            {services.map((service) => (
              <BladeCard key={service.id} accentColor="blue">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <StatusIndicator status="active" />
                    <MonoLabel color="default">{service.id}</MonoLabel>
                    <h3 className="font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">{service.description}</p>
                </div>
                <div className="font-mono text-xs text-blue hidden lg:block">
                  {service.specs}
                </div>
              </BladeCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="DATA ENGINE"
            title="Intelligence at Scale"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {dataCards.map((card) => (
              <GlassCard key={card.label}>
                <div className="p-8">
                  <span className="text-4xl font-bold font-mono text-foreground block mb-2">
                    {card.stat}
                  </span>
                  <h3 className="font-semibold mb-2">{card.label}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="MANAGED PODS"
            title="Choose Your Team"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {pods.map((pod) => (
              <GlassCard
                key={pod.tier}
                className={pod.featured ? "border-pink" : ""}
              >
                <div className="relative">
                  <div className={`absolute top-0 left-0 w-full h-0.5 ${pod.featured ? "bg-pink shadow-[0_0_10px_hsl(var(--pink))]" : "bg-secondary"}`} />
                  <div className="p-8">
                    <MonoLabel color={pod.featured ? "pink" : "blue"} className="mb-2 block">
                      {pod.tier}
                    </MonoLabel>
                    <p className="text-muted-foreground text-sm mb-6">{pod.capacity}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {pod.team.map((member, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <StatusIndicator status="active" pulse={false} />
                          {member}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-border pt-6">
                      <span className="text-2xl font-bold font-mono">
                        {pod.price}
                        {pod.price !== "Custom" && <span className="text-sm text-muted-foreground">/mo</span>}
                      </span>
                    </div>
                    
                    <AnimatedButton
                      variant={pod.featured ? "secondary" : "outline"}
                      className="w-full mt-6"
                      data-testid={`button-select-${pod.tier.toLowerCase()}`}
                    >
                      SELECT POD
                    </AnimatedButton>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <MonoLabel className="mb-4 block">READY TO SCALE?</MonoLabel>
          <h2 className="text-3xl font-bold mb-6">Let's Build Your Revenue Machine</h2>
          <p className="text-muted-foreground mb-8">
            Book a strategy call to see how Intelous can transform your GTM motion.
          </p>
          <AnimatedButton size="lg" data-testid="button-book-strategy-call">
            [ BOOK STRATEGY CALL ]
          </AnimatedButton>
        </div>
      </section>
    </div>
  );
}

export default ScaleManaged;

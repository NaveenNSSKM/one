import { GlassCard } from "@/components/ui/glass-card";
import { MonoLabel } from "@/components/ui/mono-label";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { FileText, Video, Download, ExternalLink, BookOpen, Headphones } from "lucide-react";

const resourceCategories = [
  {
    title: "Guides & Playbooks",
    icon: BookOpen,
    items: [
      { title: "The ABM Playbook 2025", type: "PDF", description: "Complete guide to account-based marketing" },
      { title: "GTM Strategy Framework", type: "PDF", description: "Build your go-to-market engine from scratch" },
      { title: "Intent Data Masterclass", type: "PDF", description: "Leverage buying signals at scale" },
    ],
  },
  {
    title: "On-Demand Webinars",
    icon: Video,
    items: [
      { title: "AI-Powered Pipeline Generation", type: "VIDEO", description: "How top teams 3x their pipeline" },
      { title: "The Death of Cold Outbound", type: "VIDEO", description: "Warm every conversation with intent" },
      { title: "Building Revenue Machines", type: "VIDEO", description: "From startup to scale with ABM" },
    ],
  },
  {
    title: "Case Studies",
    icon: FileText,
    items: [
      { title: "TechCorp: 400% Pipeline Growth", type: "CASE STUDY", description: "Enterprise ABM transformation" },
      { title: "StartupXYZ: Series B in 6 Months", type: "CASE STUDY", description: "Rapid growth through intent data" },
      { title: "FinServ Co: 85% Close Rate", type: "CASE STUDY", description: "Precision targeting for financial services" },
    ],
  },
];

const featuredResource = {
  title: "The Sovereign GTM Blueprint",
  subtitle: "2025 Edition",
  description: "Our comprehensive guide to building an autonomous revenue engine. Learn how AI agents, intent data, and precision targeting combine to create unstoppable growth.",
  stats: [
    { label: "Pages", value: "142" },
    { label: "Frameworks", value: "12" },
    { label: "Templates", value: "8" },
  ],
};

const podcasts = [
  { title: "Revenue Machines", episode: "EP 47", guest: "Sarah Chen, VP Sales @ TechGiant" },
  { title: "Revenue Machines", episode: "EP 46", guest: "Marcus Wright, CRO @ ScaleUp" },
  { title: "Revenue Machines", episode: "EP 45", guest: "Jennifer Park, CMO @ FastGrowth" },
];

export function ScaleResources() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <MonoLabel className="mb-4 block">KNOWLEDGE CENTER</MonoLabel>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Resources to <span className="text-blue">Scale</span> Your GTM
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Playbooks, guides, and insights from the frontlines of B2B growth. 
            Everything you need to build and optimize your revenue engine.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border bg-gradient-to-b from-blue/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="p-0 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-12">
                <TechBadge variant="blue" className="mb-4">FEATURED DOWNLOAD</TechBadge>
                <h2 className="text-3xl font-bold mb-2">{featuredResource.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredResource.subtitle}</p>
                <p className="text-muted-foreground mb-8">{featuredResource.description}</p>
                
                <div className="flex gap-8 mb-8">
                  {featuredResource.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-blue">{stat.value}</div>
                      <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue text-white font-semibold transition-all hover:shadow-[0_0_20px_hsl(var(--blue)/0.4)]"
                  data-testid="button-download-blueprint"
                >
                  <Download className="w-4 h-4" />
                  Download Free
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-blue/10 to-transparent p-12 flex items-center justify-center border-l border-border">
                <div className="w-48 h-64 bg-gradient-to-br from-[#1a1a1a] to-black border border-blue/30 shadow-[0_0_40px_hsl(var(--blue)/0.2)] flex items-center justify-center">
                  <span className="font-mono text-blue text-xs">GTM_BLUEPRINT.pdf</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {resourceCategories.map((category) => (
            <div key={category.title} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <category.icon className="w-5 h-5 text-blue" />
                <h2 className="text-xl font-bold">{category.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <GlassCard key={item.title} className="p-6 group cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <TechBadge variant="default">{item.type}</TechBadge>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Headphones className="w-5 h-5 text-pink" />
            <h2 className="text-xl font-bold">Revenue Machines Podcast</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {podcasts.map((episode, i) => (
              <GlassCard key={i} className="p-6 group cursor-pointer hover:border-pink/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pink/10 border border-pink/30 flex items-center justify-center group-hover:bg-pink/20 transition-colors">
                    <span className="font-mono text-xs text-pink">{episode.episode}</span>
                  </div>
                  <div>
                    <MonoLabel color="pink" className="text-xs">{episode.title}</MonoLabel>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{episode.guest}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <MonoLabel className="mb-4 block">STAY UPDATED</MonoLabel>
          <h2 className="text-2xl font-bold mb-4">Get Weekly GTM Insights</h2>
          <p className="text-muted-foreground mb-8">
            Join 5,000+ revenue leaders getting actionable insights delivered every Tuesday.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-secondary border border-border font-mono text-sm focus:outline-none focus:border-blue"
              data-testid="input-newsletter-email"
            />
            <button 
              className="px-6 py-3 bg-blue text-white font-semibold"
              data-testid="button-subscribe"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScaleResources;

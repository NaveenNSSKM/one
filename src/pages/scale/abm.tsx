import { GlassCard } from "@/components/ui/glass-card";
import { MonoLabel } from "@/components/ui/mono-label";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { TechBadge } from "@/components/ui/tech-badge";

const agentNodes = [
  { id: "AGENT-01", name: "Lead Enrichment", status: "active" as const },
  { id: "AGENT-02", name: "Intent Scoring", status: "active" as const },
  { id: "AGENT-03", name: "Sequence Orchestration", status: "active" as const },
  { id: "AGENT-04", name: "Response Classification", status: "active" as const },
];

const terminalOutput = [
  "> INIT: Sentiment Analysis Engine v2.1",
  "> LOADING: Neural Network Weights...",
  "> STATUS: Ready for Classification",
  "> INPUT: 'That sounds interesting, let's connect next week'",
  "> PROCESSING...",
  "> OUTPUT: POSITIVE | Confidence: 94%",
  "> ACTION: Route to Meeting Scheduler",
];

const sentimentExamples = [
  {
    type: "traditional",
    messages: [
      { text: "Thanks for reaching out!", tag: null },
      { text: "We're not interested at this time.", tag: null },
      { text: "Please remove me from your list.", tag: null },
    ],
  },
  {
    type: "intelous",
    messages: [
      { text: "Thanks for reaching out!", tag: "NEUTRAL", tagType: "warning" as const },
      { text: "We're not interested at this time.", tag: "NEGATIVE", tagType: "danger" as const },
      { text: "That sounds interesting, let's connect!", tag: "POSITIVE", tagType: "success" as const },
    ],
  },
];

const accountsData = [
  { company: "Acme Corp", industry: "SaaS", score: 92, intent: "HOT", lastSignal: "Pricing Page Visit" },
  { company: "TechStart Inc", industry: "FinTech", score: 87, intent: "HOT", lastSignal: "Demo Request" },
  { company: "DataFlow Systems", industry: "Analytics", score: 74, intent: "WARM", lastSignal: "Blog Engagement" },
  { company: "CloudNine", industry: "Infrastructure", score: 68, intent: "WARM", lastSignal: "LinkedIn Activity" },
];

export function ScaleABM() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <MonoLabel className="mb-4 block">INTELOUS OS v3.0</MonoLabel>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                The Sovereign<br />
                <span className="text-blue">Command Center.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                A unified intelligence platform that orchestrates your entire GTM motion. 
                AI agents working in concert to identify, qualify, and convert your ideal customers.
              </p>
              <AnimatedButton data-testid="button-request-demo">
                [ REQUEST DEMO ]
              </AnimatedButton>
            </div>
            
            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-[#444] to-black shadow-[0_0_60px_rgba(59,130,246,0.2)] animate-pulse-glow" />
              <div className="absolute w-64 h-64 rounded-full border border-blue/30 animate-spin" style={{ animationDuration: "10s" }}>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pink shadow-[0_0_10px_hsl(var(--pink))]" />
              </div>
              <div className="absolute w-80 h-80 rounded-full border border-dashed border-border" style={{ animation: "spin 20s linear infinite reverse" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="AGENTIC MESH"
            title="AI Agents at Your Command"
          />
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              {agentNodes.map((agent) => (
                <GlassCard key={agent.id} className="cursor-pointer">
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <StatusIndicator status={agent.status} />
                      <div>
                        <MonoLabel color="default" className="block">{agent.id}</MonoLabel>
                        <span className="font-semibold">{agent.name}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-pink">ONLINE</span>
                  </div>
                </GlassCard>
              ))}
            </div>
            
            <div className="bg-black border border-border p-6 font-mono text-sm">
              <div className="text-muted-foreground mb-4">
                <span className="text-blue">intelous@core</span>:~$
              </div>
              <div className="space-y-2 text-blue">
                {terminalOutput.map((line, i) => (
                  <div key={i} className={line.includes("OUTPUT") ? "text-pink" : ""}>
                    {line}
                    {i === terminalOutput.length - 1 && (
                      <span className="inline-block w-2 h-4 bg-blue ml-1 animate-blink" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="SENTIMENT BRAIN"
            title="Understanding Human Intent"
          />
          
          <div className="grid lg:grid-cols-2 gap-0.5 bg-border border border-border mt-12">
            <div className="bg-background p-10">
              <MonoLabel color="default" className="mb-6 block">TRADITIONAL APPROACH</MonoLabel>
              <div className="space-y-4">
                {sentimentExamples[0].messages.map((msg, i) => (
                  <div key={i} className="bg-secondary/50 p-4 rounded-md text-sm">
                    "{msg.text}"
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                All responses look the same. No actionable intelligence.
              </p>
            </div>
            
            <div className="bg-background p-10">
              <MonoLabel className="mb-6 block">INTELOUS CLASSIFICATION</MonoLabel>
              <div className="space-y-4">
                {sentimentExamples[1].messages.map((msg, i) => (
                  <div key={i} className="bg-pink/5 border-l-4 border-l-pink p-4 rounded-md text-sm flex items-center justify-between">
                    <span>"{msg.text}"</span>
                    {'tagType' in msg && msg.tag && (
                      <span className={`font-mono text-xs px-2 py-1 border rounded ${
                        msg.tagType === "success" ? "text-pink border-pink" :
                        msg.tagType === "danger" ? "text-red-500 border-red-500" :
                        "text-yellow-500 border-yellow-500"
                      }`}>
                        {msg.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                Automated routing based on real sentiment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="relative overflow-visible">
            <div className="absolute top-4 right-4 font-mono text-xs text-pink border border-pink px-3 py-1 shadow-[0_0_10px_rgba(255,0,128,0.2)]">
              GDPR COMPLIANT
            </div>
            <div className="p-12 text-center">
              <MonoLabel className="mb-4 block">THE CLEAN ROOM</MonoLabel>
              <h3 className="text-2xl font-bold mb-4">Data Sovereignty Guaranteed</h3>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Your data never leaves your control. Our Clean Room architecture ensures 
                complete privacy while delivering enterprise-grade intelligence.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="ACCOUNT INTENT"
            title="Real-Time Target Account Scoring"
          />
          
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm mt-8">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-4 px-4 text-muted-foreground font-normal">ACCOUNT</th>
                  <th className="py-4 px-4 text-muted-foreground font-normal">INDUSTRY</th>
                  <th className="py-4 px-4 text-muted-foreground font-normal">SCORE</th>
                  <th className="py-4 px-4 text-muted-foreground font-normal">INTENT</th>
                  <th className="py-4 px-4 text-muted-foreground font-normal">LAST SIGNAL</th>
                </tr>
              </thead>
              <tbody>
                {accountsData.map((account) => (
                  <tr key={account.company} className="border-b border-border/50 hover:bg-card/50">
                    <td className="py-4 px-4 font-semibold">{account.company}</td>
                    <td className="py-4 px-4 text-muted-foreground">{account.industry}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue rounded-full"
                            style={{ width: `${account.score}%` }}
                          />
                        </div>
                        <span className="text-blue">{account.score}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={account.intent === "HOT" ? "text-pink" : "text-blue"}>
                        {account.intent}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{account.lastSignal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-pink bg-black overflow-hidden">
        <div className="flex items-center gap-4 animate-scroll-up" style={{ animationDuration: "30s", animationDirection: "normal" }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 font-mono text-xs text-pink whitespace-nowrap">
              <span>ACME_CORP: PRICING_PAGE_VISIT</span>
              <span>TECHSTART: DEMO_REQUESTED</span>
              <span>DATAFLOW: CASE_STUDY_DOWNLOAD</span>
              <span>CLOUDNINE: LINKEDIN_ENGAGEMENT</span>
              <span>GROWTHCO: EMAIL_OPENED</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ScaleABM;

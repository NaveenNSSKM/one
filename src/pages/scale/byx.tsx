import { GlassCard } from "@/components/ui/glass-card";
import { MonoLabel } from "@/components/ui/mono-label";
import { SectionHeader } from "@/components/ui/section-header";

const cinematicStack = [
  {
    title: "3D Venture Showcases",
    description: "Immersive, 3D product walkthroughs that replace boring slide decks. Make your software feel tangible.",
  },
  {
    title: "Holographic Ads",
    description: "High-impact visuals designed for the Attention Economy. Stop the scroll with assets designed to be shared.",
  },
];

export function ScaleBYX() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <section className="min-h-[90vh] flex items-center justify-center text-center relative overflow-hidden px-6">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#222] to-[#050505] opacity-50"
          style={{
            backgroundImage: `repeating-linear-gradient(transparent, transparent 10px, rgba(255, 0, 127, 0.03) 10px, rgba(255, 0, 127, 0.03) 11px)`,
            transform: "rotate(45deg)",
            animation: "moveUp 20s linear infinite",
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <MonoLabel color="pink" className="mb-6 block">CINEMATIC AUTHORITY</MonoLabel>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none mb-6 cursor-default hover:text-pink hover:animate-pulse transition-colors">
            In a Noisy World,<br />You Need to Scream.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Most B2B ventures look like generic templates. BYX Studio crafts cinematic authority 
            that signals premium status and commands immediate trust.
          </p>
          <button
            className="inline-block px-8 py-4 border-2 border-pink text-pink font-semibold uppercase tracking-wider transition-all hover:bg-pink hover:text-black hover:shadow-[0_0_25px_hsl(var(--pink))]"
            data-testid="button-explore-showreel"
          >
            Explore Showreel
          </button>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 border-t border-b border-border">
        <div className="p-16 flex flex-col justify-center bg-[#080808] border-r border-border hover:bg-[#0a0a0a] transition-colors">
          <MonoLabel color="default" className="mb-6 block">01 THE LOGIC (INTELOUS)</MonoLabel>
          <h3 className="text-3xl font-bold mb-4">Precision Targeting</h3>
          <p className="text-muted-foreground mb-8">We identify the exact accounts ready to buy.</p>
          <div className="font-mono text-sm text-blue bg-black/50 p-4 border border-border">
            &gt; TARGET: SERIES_A<br />
            &gt; INTENT: HIGH<br />
            &gt; STATUS: LOCKED
          </div>
        </div>
        
        <div className="p-16 flex flex-col justify-center bg-[#050505] relative overflow-hidden hover:bg-gradient-to-r hover:from-pink/5 hover:to-transparent transition-all">
          <MonoLabel color="pink" className="mb-6 block">02 THE MAGIC (BYX)</MonoLabel>
          <h3 className="text-3xl font-bold mb-4">Cinematic Impact</h3>
          <p className="text-muted-foreground mb-8">We ensure they cannot look away.</p>
          <div
            className="w-full h-48 bg-gradient-to-r from-pink to-pink/20 blur-[60px] opacity-30 hover:opacity-60 hover:blur-[30px] transition-all"
          />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black uppercase mb-6">The Cinematic Stack</h2>
          
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {cinematicStack.map((item) => (
              <div
                key={item.title}
                className="h-96 bg-[#111] border border-border relative overflow-hidden group transition-all hover:border-pink hover:shadow-[0_0_20px_rgba(255,0,127,0.3)]"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#222] to-[#111] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <h3 className="text-2xl font-black uppercase mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
            We built <span className="text-pink">Intelous</span> to find your perfect buyers.
            <br />
            We built <span className="text-pink">BYX</span> to make them pay attention.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 text-center bg-gradient-to-b from-[#050505] to-[#141414]">
        <MonoLabel color="pink" className="mb-4 block">MAKE YOUR MARK</MonoLabel>
        <h2 className="text-3xl font-bold mb-8">Ready to Command Attention?</h2>
        <button
          className="inline-block px-10 py-4 bg-pink text-black font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,0,127,0.4)]"
          data-testid="button-start-project"
        >
          START YOUR PROJECT
        </button>
      </section>
    </div>
  );
}

export default ScaleBYX;

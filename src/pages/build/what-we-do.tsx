"use client";

import Head from 'next/head';
import { GlassCard } from "@/components/ui/glass-card";
import { MonoLabel } from "@/components/ui/mono-label";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { ArrowRight, Globe, Palette, Zap, Server, Cpu, Radio } from "lucide-react";

const digitalCore = [
    {
        icon: Globe,
        title: "Web & App Systems",
        description: "High-performance, AI-native platforms built using modern frameworks for non-linear scaling.",
        tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
    },
    {
        icon: Palette,
        title: "Product Design",
        description: "Interfaces that prioritize user intent over decoration. We design for clarity, speed, and conversion.",
        tech: ["Figma", "Design Systems", "User Research"],
    },
    {
        icon: Zap,
        title: "MVP Development",
        description: "High-speed prototyping. Move from Strategic PRD to a deployed product in the first 4 weeks.",
        tech: ["Rapid Prototyping", "User Testing", "Iteration"],
    },
];

const deepEngineering = [
    {
        icon: Server,
        title: "Cloud & DevOps",
        description: "Scalable infrastructure that grows with you. From startup to enterprise scale.",
        tech: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
        icon: Cpu,
        title: "AI & Machine Learning",
        description: "Custom LLM pipelines, RAG systems, and intelligent automation tailored to your business.",
        tech: ["Python", "LangChain", "GPT-4", "Vector DBs"],
    },
    {
        icon: Radio,
        title: "Hardware & IoT",
        description: "Connected device ecosystems with secure, scalable backends. From prototype to production.",
        tech: ["Embedded C", "PCB Design", "MQTT", "Edge Computing"],
    },
];

const caseStudies = [
    {
        client: "FinTech Startup",
        result: "MVP to $2M ARR in 8 months",
        description: "Built a complete payment processing platform from scratch, including compliance and security.",
    },
    {
        client: "Healthcare AI",
        result: "FDA-cleared in 6 months",
        description: "Developed diagnostic AI system with full regulatory documentation and clinical validation.",
    },
    {
        client: "IoT Platform",
        result: "10,000+ devices deployed",
        description: "Designed and manufactured custom hardware with cloud infrastructure for real-time monitoring.",
    },
];

export function BuildWhatWeDo() {
    return (
        <>
            <Head>
                <title>Intelous Labs | Capability Matrix</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <style dangerouslySetInnerHTML={{
                __html: `
    /* --- GLOBAL VARIABLES (Dark Mode Overrides) --- */
    :root {
        --bg-foundation: #050505;
        --color-accent: #ec4899;    /* Hot Pink */
        --color-text: #ffffff;
        --color-text-muted: #a1a1aa;
        --color-border: rgba(255, 255, 255, 0.1); 
    }

    .what-we-do-page {
        background-color: var(--bg-foundation);
        color: var(--color-text);
        background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 20px 20px;
        min-height: 100vh;
        width: 100%;
        overflow-x: hidden;
    }

    /* Force overrides for re-used components */
    .what-we-do-page .text-muted-foreground { color: #a1a1aa !important; }
    .what-we-do-page .bg-card { background-color: #0A0A0A !important; }
    `}} />

            <div className="what-we-do-page">
                <div className="min-h-screen">
                    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="max-w-3xl">
                                <MonoLabel color="pink" className="mb-6 block">WHAT WE DO</MonoLabel>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                                    End-to-end{" "}
                                    <span className="text-pink">technical execution</span>
                                </h1>
                                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                    From strategic vision to production deployment. We build the technology that powers ambitious ventures.
                                </p>
                                <AnimatedButton size="lg" className="bg-pink text-white hover:bg-pink/90" data-testid="button-start-project">
                                    Start a project
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </AnimatedButton>
                            </div>
                        </div>
                    </section>

                    <section className="py-24 lg:py-32 px-6">
                        <div className="max-w-6xl mx-auto">
                            <SectionHeader
                                label="DIGITAL CORE"
                                title="Software that scales"
                                description="Modern, maintainable code that you'll own forever. No vendor lock-in."
                                labelColor="pink"
                                size="lg"
                            />

                            <div className="grid md:grid-cols-3 gap-6 mt-16">
                                {digitalCore.map((item) => (
                                    <GlassCard key={item.title} variant="subtle" className="p-8">
                                        <div className="w-12 h-12 rounded-xl bg-pink/10 border border-pink/20 flex items-center justify-center mb-6">
                                            <item.icon className="w-6 h-6 text-pink" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tech.map((t) => (
                                                <TechBadge key={t} variant="green">{t}</TechBadge>
                                            ))}
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-24 lg:py-32 px-6 bg-gradient-to-b from-card/30 to-transparent">
                        <div className="max-w-6xl mx-auto">
                            <SectionHeader
                                label="DEEP ENGINEERING"
                                title="Beyond the surface"
                                description="Infrastructure, AI, and hardware—the technology moats that matter."
                                labelColor="pink"
                                size="lg"
                            />

                            <div className="grid md:grid-cols-3 gap-6 mt-16">
                                {deepEngineering.map((item) => (
                                    <GlassCard key={item.title} variant="subtle" className="p-8">
                                        <div className="w-12 h-12 rounded-xl bg-pink/10 border border-pink/20 flex items-center justify-center mb-6">
                                            <item.icon className="w-6 h-6 text-pink" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tech.map((t) => (
                                                <TechBadge key={t}>{t}</TechBadge>
                                            ))}
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-24 lg:py-32 px-6">
                        <div className="max-w-6xl mx-auto">
                            <SectionHeader
                                label="CASE STUDIES"
                                title="Results that speak"
                                description="A selection of projects we're proud of."
                                labelColor="pink"
                                size="lg"
                            />

                            <div className="grid md:grid-cols-3 gap-6 mt-16">
                                {caseStudies.map((study) => (
                                    <GlassCard key={study.client} variant="elevated" className="p-8">
                                        <div className="text-sm text-muted-foreground mb-2">{study.client}</div>
                                        <div className="text-2xl font-semibold text-pink mb-4">{study.result}</div>
                                        <p className="text-muted-foreground">{study.description}</p>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-24 lg:py-32 px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <MonoLabel color="pink" className="mb-6 block">LET'S BUILD</MonoLabel>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                                Ready to start your project?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10">
                                Tell us about your vision. We'll show you how we can bring it to life.
                            </p>
                            <AnimatedButton size="lg" className="bg-pink text-white hover:bg-pink/90" data-testid="button-contact">
                                Get in touch
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </AnimatedButton>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default BuildWhatWeDo;

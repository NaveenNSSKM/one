"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { MonoLabel } from "@/components/ui/mono-label";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Paintbrush, Rocket, CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "From MVP to scale. React, Node, Python, Go—we ship production-ready code that grows with you.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Custom LLM pipelines, RAG systems, and intelligent automation tailored to your business.",
  },
  {
    icon: Paintbrush,
    title: "Product Design",
    description: "User research, interface design, and design systems that users love and engineers can build.",
  },
  {
    icon: Rocket,
    title: "Go-to-Market",
    description: "From launch strategy to first customers. We help you find product-market fit faster.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Strategic Discovery",
    description: "We map your vision into a technical blueprint. No fluff—just executable specs and clear milestones.",
    duration: "Week 1-2",
  },
  {
    number: "02",
    title: "Build Sprint",
    description: "Full-stack development with daily updates. We build the infrastructure you'll own forever.",
    duration: "Week 3-6",
  },
  {
    number: "03",
    title: "Launch & Iterate",
    description: "Deploy to production and begin collecting real user feedback to guide iteration.",
    duration: "Week 7-8",
  },
  {
    number: "04",
    title: "Growth Handoff",
    description: "First qualified meetings, revenue activation, and knowledge transfer to your team.",
    duration: "Week 9-10",
  },
];

const stats = [
  { value: "50+", label: "Projects shipped" },
  { value: "92%", label: "On-time delivery" },
  { value: "10", label: "Week avg. timeline" },
  { value: "$2M+", label: "Raised by clients" },
];

export function BuildHome() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
    :root {
        --bg-foundation: #050505;
        --color-accent: #ec4899;
        --color-text: #ffffff;
    }
    .build-home-page {
        background-color: var(--bg-foundation);
        color: var(--color-text);
        background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 20px 20px;
        min-height: 100vh;
        width: 100%;
        overflow-x: hidden;
    }
    .build-home-page .text-muted-foreground { color: #a1a1aa !important; }
    .build-home-page .bg-card { background-color: #0A0A0A !important; }
    `}} />
      <div className="build-home-page">
        <div className="min-h-screen">
          <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink/10 border border-pink/20 rounded-full text-sm text-pink mb-8">
                  <Code2 className="w-4 h-4" />
                  <span>Technical execution partners</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                  We don't just build products. We build{" "}
                  <span className="text-pink">companies</span>.
                </h1>

                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                  From strategic PRD to your first 20 customers—we architect, build, and launch your vision in 10 weeks.
                </p>

                <div className="flex flex-wrap gap-4">
                  <AnimatedButton size="lg" variant="secondary" className="bg-pink text-white hover:bg-pink/90 shadow-[0_0_20px_rgba(255,0,128,0.2)]" data-testid="button-start-project">
                    Start your project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </AnimatedButton>
                  <Link href="/what-we-do">
                    <AnimatedButton variant="secondary" size="lg" data-testid="button-view-work">
                      View our work
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 border-y border-border/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-semibold text-pink mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 lg:py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <SectionHeader
                label="CAPABILITIES"
                title="Everything you need to launch"
                description="A full-stack team in your corner, without the overhead of hiring."
                labelColor="pink"
                size="lg"
              />

              <div className="grid md:grid-cols-2 gap-6 mt-16">
                {capabilities.map((item) => (
                  <GlassCard key={item.title} variant="subtle" className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-pink/10 border border-pink/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-pink" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
                label="PROCESS"
                title="The 10-week sprint"
                description="A proven framework that takes you from idea to market."
                labelColor="pink"
                size="lg"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {processSteps.map((step) => (
                  <div key={step.number} className="relative">
                    <div className="text-6xl font-bold text-pink/10 mb-4">{step.number}</div>
                    <div className="text-xs text-pink font-medium mb-2">{step.duration}</div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 lg:py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <SectionHeader
                    label="WHY LABS"
                    title="More than an agency. Your technical co-founder."
                    labelColor="pink"
                    size="default"
                    className="mb-8"
                  />

                  <ul className="space-y-4">
                    {[
                      "Equity-aligned partnerships available",
                      "Full ownership of all code and IP",
                      "Direct access to senior engineers",
                      "Weekly demos and transparent progress",
                      "Post-launch support and iteration",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-pink mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <GlassCard variant="elevated" className="p-10">
                  <MonoLabel color="pink" className="mb-4 block">LIMITED CAPACITY</MonoLabel>
                  <h3 className="text-2xl font-semibold mb-4">Apply for partnership</h3>
                  <p className="text-muted-foreground mb-8">
                    We take on 2 new projects per quarter to ensure dedicated attention to every partner.
                  </p>
                  <AnimatedButton className="w-full bg-pink text-white hover:bg-pink/90" data-testid="button-apply-partnership">
                    Apply now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </AnimatedButton>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Usually responds within 24 hours
                  </p>
                </GlassCard>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default BuildHome;

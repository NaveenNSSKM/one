import React, { useEffect } from 'react';
import Head from 'next/head';
import { GlassCard } from "@/components/ui/glass-card";
import { MonoLabel } from "@/components/ui/mono-label";
import { TechBadge } from "@/components/ui/tech-badge";
import { Clock, ArrowRight } from "lucide-react";

const featuredArticle = {
    title: "Building Scalable Systems: From Zero to Production",
    excerpt: "A deep dive into the architectural decisions that enable startups to scale from MVP to millions of users without rewriting everything.",
    author: "Engineering Team",
    date: "Jan 10, 2026",
    readTime: "12 min read",
    tags: ["Architecture", "Scaling", "Backend"],
};

const articles = [
    {
        title: "The Case for TypeScript in 2026",
        excerpt: "Why we chose TypeScript for all our projects and how it's transformed our development velocity.",
        author: "Dev Team",
        date: "Jan 8, 2026",
        readTime: "8 min read",
        tags: ["TypeScript", "Frontend"],
    },
    {
        title: "AI-Assisted Development: Beyond Copilot",
        excerpt: "How we're integrating AI tools throughout our development workflow to ship faster without sacrificing quality.",
        author: "AI Research",
        date: "Jan 5, 2026",
        readTime: "10 min read",
        tags: ["AI", "Productivity"],
    },
    {
        title: "PostgreSQL Performance Patterns",
        excerpt: "Query optimization techniques and indexing strategies that helped us achieve sub-10ms response times.",
        author: "Database Team",
        date: "Jan 2, 2026",
        readTime: "15 min read",
        tags: ["Database", "Performance"],
    },
    {
        title: "Design Systems That Actually Work",
        excerpt: "Lessons learned building and maintaining design systems across multiple products and teams.",
        author: "Design Engineering",
        date: "Dec 28, 2025",
        readTime: "9 min read",
        tags: ["Design", "Frontend"],
    },
    {
        title: "Real-Time Collaboration Architecture",
        excerpt: "How we built a real-time collaboration system using WebSockets and CRDTs for conflict-free editing.",
        author: "Platform Team",
        date: "Dec 22, 2025",
        readTime: "14 min read",
        tags: ["Real-Time", "Architecture"],
    },
    {
        title: "From Monolith to Microservices",
        excerpt: "The pragmatic approach we took to break apart our monolith without disrupting the business.",
        author: "Engineering Team",
        date: "Dec 18, 2025",
        readTime: "11 min read",
        tags: ["Microservices", "Backend"],
    },
];

const categories = ["All", "Architecture", "Frontend", "Backend", "AI", "Design"];

export function BuildArticles() {
    return (
        <>
            <Head>
                <title>Intelous Labs | Engineering Insights</title>
            </Head>
            <style dangerouslySetInnerHTML={{
                __html: `
        /* Override Tailwind variables for this page specifically to ensure Dark Theme */
        .build-articles-page {
            --background: 0 0% 2%;    /* #050505 */
            --foreground: 0 0% 100%;  /* #ffffff */
            --card: 0 0% 4%;          /* #0A0A0A */
            --card-foreground: 0 0% 100%;
            --popover: 0 0% 4%;
            --popover-foreground: 0 0% 100%;
            --primary: 327 96% 61%;   /* Pink #f93b96 approx */
            --primary-foreground: 0 0% 100%;
            --secondary: 0 0% 9%;
            --secondary-foreground: 0 0% 100%;
            --muted: 0 0% 15%;
            --muted-foreground: 0 0% 63%; /* #a1a1aa */
            --accent: 327 96% 61%;
            --accent-foreground: 0 0% 100%;
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 0% 98%;
            --border: 0 0% 14.9%;
            --input: 0 0% 14.9%;
            --ring: 327 96% 61%;

            /* Custom Vars for this page */
            --bg-foundation: #050505;
        }

        .build-articles-page {
            background-color: hsl(var(--background));
            color: hsl(var(--foreground));
            background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            min-height: 100vh;
        }

        /* Force Pink Hover on GlassCards on this page */
        .build-articles-page .hover\\:border-blue\\/50:hover {
            border-color: rgba(236, 72, 153, 0.5) !important; /* Pink-500/50 */
        }
        .build-articles-page .hover\\:shadow-\\[0_8px_40px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]:hover {
            box-shadow: 0 8px 40px rgba(236, 72, 153, 0.08) !important;
        }
      `}} />

            <div className="build-articles-page">
                <div className="min-h-screen">
                    <section className="pt-32 pb-16 px-6">
                        <div className="max-w-7xl mx-auto">
                            <MonoLabel color="pink" className="mb-4 block">ENGINEERING INSIGHTS</MonoLabel>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                Articles from the <span className="text-pink">Labs</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl">
                                Technical deep-dives, lessons learned, and insights from building
                                products at the cutting edge of technology.
                            </p>
                        </div>
                    </section>

                    <section className="py-8 px-6 border-y border-border">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-wrap gap-3">
                                {categories.map((cat, i) => (
                                    <button
                                        key={cat}
                                        className={`px-4 py-2 font-mono text-xs border transition-all ${i === 0
                                                ? "bg-pink text-white border-pink"
                                                : "border-border text-muted-foreground hover:border-pink hover:text-pink"
                                            }`}
                                        data-testid={`button-category-${cat.toLowerCase()}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-16 px-6">
                        <div className="max-w-7xl mx-auto">
                            <GlassCard className="p-0 overflow-hidden mb-12">
                                <div className="grid lg:grid-cols-2">
                                    <div className="bg-gradient-to-br from-pink/10 to-transparent p-8 lg:p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
                                        <div className="w-full max-w-xs aspect-video bg-[#0a0a0a] border border-pink/30 flex items-center justify-center">
                                            <span className="font-mono text-pink text-xs">FEATURED_POST.md</span>
                                        </div>
                                    </div>

                                    <div className="p-8 lg:p-12">
                                        <TechBadge variant="green" className="mb-4">FEATURED</TechBadge>
                                        <h2 className="text-2xl font-bold mb-4 hover:text-pink cursor-pointer transition-colors">
                                            {featuredArticle.title}
                                        </h2>
                                        <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {featuredArticle.tags.map((tag) => (
                                                <TechBadge key={tag} variant="default">{tag}</TechBadge>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                                            <div className="flex items-center gap-4">
                                                <span>{featuredArticle.author}</span>
                                                <span>{featuredArticle.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{featuredArticle.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {articles.map((article) => (
                                    <GlassCard key={article.title} className="p-6 group cursor-pointer">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {article.tags.map((tag) => (
                                                <TechBadge key={tag} variant="default" className="text-xs">{tag}</TechBadge>
                                            ))}
                                        </div>

                                        <h3 className="text-lg font-semibold mb-3 group-hover:text-pink transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{article.excerpt}</p>

                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <span>{article.date}</span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm text-pink opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span>Read more</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-16 px-6 border-t border-border text-center">
                        <div className="max-w-2xl mx-auto">
                            <MonoLabel color="pink" className="mb-4 block">SUBSCRIBE</MonoLabel>
                            <h2 className="text-2xl font-bold mb-4">Get Engineering Updates</h2>
                            <p className="text-muted-foreground mb-8">
                                New articles, tutorials, and insights delivered to your inbox. No spam, unsubscribe anytime.
                            </p>
                            <div className="flex gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 px-4 py-3 bg-secondary border border-border font-mono text-sm focus:outline-none focus:border-pink"
                                    data-testid="input-subscribe-email"
                                />
                                <button
                                    className="px-6 py-3 bg-pink text-white font-semibold"
                                    data-testid="button-subscribe-articles"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default BuildArticles;

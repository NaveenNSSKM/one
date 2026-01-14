"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';

export function BuildWhoWeAre() {
    useEffect(() => {
        const handleScroll = () => {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            const bar = document.getElementById("progressBar");
            if (bar) bar.style.width = scrolled + "%";
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head>
                <title>Intelous Labs | The Architects</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
            </Head>
            <style dangerouslySetInnerHTML={{
                __html: `
        /* --- GLOBAL VARIABLES (DARK THEME) --- */
        :root {
            --bg-foundation: #050505;   /* Near Black */
            --bg-card: #0A0A0A;         /* Slightly lighter for cards */
            --color-accent: #3b82f6;    /* Bright Blue for labels */
            --color-pink: #ec4899;      /* Hot Pink for CTA / Highlights */
            --color-text: #ffffff;      /* White */
            --color-text-muted: #a1a1aa; /* Gray */
            --color-border: rgba(255, 255, 255, 0.1); 
            
            --font-head: 'Inter', sans-serif;
            --font-mono: 'IBM Plex Mono', monospace;
            
            --spacing-unit: 24px;
        }

        /* Scoping to .who-we-are-page */
        .who-we-are-page * { box-sizing: border-box; }

        .who-we-are-page {
            background-color: var(--bg-foundation);
            color: var(--color-text);
            font-family: var(--font-head);
            line-height: 1.4;
            overflow-x: hidden;
            margin: 0; 
            padding: 0;
            width: 100%;
        }

        /* --- TYPOGRAPHY --- */
        .who-we-are-page h1, .who-we-are-page h2, .who-we-are-page h3 { 
            letter-spacing: -0.03em; 
            font-weight: 700; 
            color: var(--color-text);
        }
        
        .mono-label {
            font-family: var(--font-mono);
            color: var(--color-accent);
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: block;
            margin-bottom: 12px;
            font-weight: 600;
        }

        /* --- SCROLL PROGRESS BAR --- */
        .progress-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: rgba(255, 255, 255, 0.05);
            z-index: 9999;
        }
        
        .progress-bar {
            height: 100%;
            background: var(--color-text);
            width: 0%;
            transition: width 0.1s ease;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing-unit);
        }

        /* --- HERO SECTION --- */
        .section-hero {
            padding: 160px 0 100px 0;
            border-bottom: 1px solid var(--color-border);
        }

        .hero-head {
            font-size: 4.5rem;
            line-height: 1.1;
            margin-bottom: 32px;
        }

        .hero-sub {
            font-size: 1.25rem;
            color: var(--color-text-muted);
            max-width: 700px;
            line-height: 1.6;
        }

        /* --- TEAM GRID --- */
        .section-team {
            padding: 120px 0;
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-top: 60px;
        }

        .team-card {
            background: transparent;
            border: none;
        }

        .team-img-wrap {
            width: 100%;
            height: 400px;
            background-color: #222;
            background-size: cover;
            background-position: center;
            filter: grayscale(100%);
            transition: all 0.4s ease;
            cursor: pointer;
            margin-bottom: 20px;
        }

        .team-card:hover .team-img-wrap {
            filter: grayscale(0%);
        }

        .team-role {
            font-family: var(--font-mono);
            color: var(--color-accent);
            font-size: 0.7rem;
            margin-bottom: 8px;
            text-transform: uppercase;
        }

        .team-name {
            font-size: 1.25rem;
            font-weight: 700;
        }

        /* --- BENTO / OPERATION --- */
        .section-bento {
            padding: 100px 0;
            border-top: 1px solid var(--color-border);
            border-bottom: 1px solid var(--color-border);
        }

        .bento-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            margin-top: 60px;
        }

        .bento-card {
            background: var(--bg-card);
            border: 1px solid var(--color-border);
            padding: 48px;
            transition: border-color 0.3s ease;
        }
        
        .bento-card:hover { border-color: var(--color-text-muted); }

        .bento-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 16px 0;
            color: white;
        }

        .bento-text {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.6;
        }

        /* --- FULL STACK LIST (Dark Mode) --- */
        .section-stack {
            padding: 120px 0;
        }

        .stack-list {
            margin-top: 60px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px 40px;
        }

        .stack-item {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 40px;
        }

        .stack-num {
            font-family: var(--font-mono);
            color: var(--color-pink);
            font-size: 1.2rem;
            font-weight: 600;
        }

        .stack-content h3 {
            font-size: 1.25rem;
            margin-bottom: 8px;
        }

        .stack-content p {
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }

        /* --- FINAL CTA (PINK) --- */
        .section-cta {
            padding: 140px 0;
            text-align: center;
            background: var(--color-pink);
            color: white;
        }
        
        .section-cta h2 { color: white; margin-bottom: 40px; font-size: 2.5rem; }
        
        .btn-white {
            display: inline-block;
            background: white;
            color: var(--color-pink);
            padding: 18px 40px;
            font-family: var(--font-mono);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-decoration: none;
            font-size: 0.9rem;
            transition: transform 0.2s;
        }
        
        .btn-white:hover { transform: scale(1.02); }

        /* --- RESPONSIVE --- */
        @media (max-width: 900px) {
            .hero-head { font-size: 3rem; }
            .team-grid { grid-template-columns: repeat(2, 1fr); }
            .bento-grid { grid-template-columns: 1fr; }
            .stack-list { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 600px) {
            .team-grid { grid-template-columns: 1fr; }
        }
      `}} />

            <div className="who-we-are-page">
                <div className="progress-container">
                    <div className="progress-bar" id="progressBar"></div>
                </div>

                <section className="section-hero">
                    <div className="container">
                        <span className="mono-label">// THE ARCHITECTS</span>
                        <h1 className="hero-head">We are the Architects<br />of Your Sovereignty.</h1>
                        <p className="hero-sub">
                            Intelous Labs isn't an agency; we are your Technical Co-founder. We close the Execution Gap by building your code, managing your authority, and staffing your future—all in a relentless 10-week sprint.
                        </p>
                    </div>
                </section>

                <section className="section-team">
                    <div className="container">
                        <span className="mono-label">// THE HUMAN MOAT</span>
                        <h2>Principals & Architects.</h2>

                        <div className="team-grid">
                            <div className="team-card">
                                <div className="team-img-wrap" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80&sat=-100')" }}></div>
                                <div className="team-role">FOUNDER / STRATEGY</div>
                                <div className="team-name">The Architect</div>
                            </div>

                            <div className="team-card">
                                <div className="team-img-wrap" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80&sat=-100')" }}></div>
                                <div className="team-role">TECHNICAL PRINCIPAL</div>
                                <div className="team-name">The Lead</div>
                            </div>

                            <div className="team-card">
                                <div className="team-img-wrap" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80&sat=-100')" }}></div>
                                <div className="team-role">CREATIVE LEAD</div>
                                <div className="team-name">The Visionary</div>
                            </div>

                            <div className="team-card">
                                <div className="team-img-wrap" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80&sat=-100')" }}></div>
                                <div className="team-role">OPERATIONS / STAFFING</div>
                                <div className="team-name">The Bridge</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-bento">
                    <div className="container">
                        <span className="mono-label">// THE END-TO-END PROPOSITION</span>
                        <h2 style={{ marginBottom: '40px' }}>How We Operate</h2>

                        <div className="bento-grid">
                            <div className="bento-card">
                                <span className="mono-label">CORE ENGINE</span>
                                <h3 className="bento-title">The 10-Week Sprint</h3>
                                <p className="bento-text">From a Strategic PRD to your first 20 qualified leads. We don't just advise; we build the ship while we're sailing it.</p>
                            </div>

                            <div className="bento-card">
                                <span className="mono-label">PHASE: TRANSFER</span>
                                <h3 className="bento-title">Technical Staffing & Transfer</h3>
                                <p className="bento-text">The final phase of the BOT model. Once the infrastructure is humming, we recruit and train your permanent marketing and tech teams to ensure sovereignty.</p>
                            </div>

                            <div className="bento-card">
                                <span className="mono-label">AWARENESS</span>
                                <h3 className="bento-title">Managed Founder Authority</h3>
                                <p className="bento-text">Your code needs a face. We manage your Social Media and Video Production.</p>
                            </div>

                            <div className="bento-card">
                                <span className="mono-label">REVENUE</span>
                                <h3 className="bento-title">Managed GTM + Meetings</h3>
                                <p className="bento-text">Powered by Intelous.ai. We deliver the meetings required to fund the future.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-stack">
                    <div className="container">
                        <span className="mono-label">// DETAILED SERVICE LOGS</span>
                        <h2>The Full Stack</h2>

                        <div className="stack-list">
                            <div className="stack-item">
                                <div className="stack-num">01</div>
                                <div className="stack-content">
                                    <h3>Strategic PRD Development</h3>
                                    <p>Technical blueprints that translate vision into executable specs.</p>
                                </div>
                            </div>
                            <div className="stack-item">
                                <div className="stack-num">02</div>
                                <div className="stack-content">
                                    <h3>Full-Stack Engineering</h3>
                                    <p>React, Node, Python, Rust—production code that scales.</p>
                                </div>
                            </div>
                            <div className="stack-item">
                                <div className="stack-num">03</div>
                                <div className="stack-content">
                                    <h3>AI/ML Integration</h3>
                                    <p>Custom LLMs, RAG systems, and intelligent automation.</p>
                                </div>
                            </div>
                            <div className="stack-item">
                                <div className="stack-num">04</div>
                                <div className="stack-content">
                                    <h3>DevOps & Infrastructure</h3>
                                    <p>AWS, Docker, CI/CD pipelines built for velocity.</p>
                                </div>
                            </div>
                            <div className="stack-item">
                                <div className="stack-num">05</div>
                                <div className="stack-content">
                                    <h3>Founder Content Engine</h3>
                                    <p>Video production and social media management.</p>
                                </div>
                            </div>
                            <div className="stack-item">
                                <div className="stack-num">06</div>
                                <div className="stack-content">
                                    <h3>Team Building & Transfer</h3>
                                    <p>Recruitment from your permanent technical team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-cta">
                    <div className="container">
                        <span className="mono-label" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>// JOIN THE CULT</span>
                        <h2>Ready to Close Your Execution Gap?</h2>
                        <a href="#" className="btn-white">START THE CONVERSATION</a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default BuildWhoWeAre;

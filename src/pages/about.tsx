import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.css";

export default function About(): React.ReactElement {
    return (
        <Layout title="About LearnHub" description="About the LearnHub platform and our mission">
            <header className={styles.heroBanner} style={{ minHeight: "40vh", paddingBottom: "1rem" }}>
                <div className={styles.heroContentWrapper}>
                    <div className={styles.heroLeft}>
                        <div className={styles.heroBadge}>🚀 Welcome to LearnHub</div>
                        <h1 className={styles.heroTitle} style={{ fontSize: "2.4rem" }}>
                            Your Launchpad for a Thriving Tech Career
                        </h1>
                        <p className={styles.heroCerts} style={{ color: "#2563eb" }}>
                            Empowering the next generation of creators—through hands-on learning, real projects, and a global community.
                        </p>
                    </div>
                </div>
            </header>

            <main>
                <section className={styles.coursesSection} style={{ paddingTop: 0 }}>
                    <div className={styles.coursesContainer}>
                        <div className={styles.coursesHeader}>
                            <h2 className={styles.coursesTitle}>🌱 Our Mission</h2>
                            <p className={styles.coursesSubtitle} style={{ fontSize: "1.15rem" }}>
                                <b>Empower the next generation of creators and problem solvers through interactive, practical, and industry-focused technical education.</b>
                                <br />We believe in learning that leads to <i>real outcomes</i>—not just watching, but building, connecting, and growing.
                            </p>
                        </div>

                        <div className={styles.coursesHeader} style={{ marginTop: "2.5rem" }}>
                            <h2 className={styles.coursesTitle}>🧭 What Sets Us Apart?</h2>
                        </div>
                        <div className={styles.coursesGrid}>
                            <div className={styles.courseCard}>
                                <div className={`${styles.courseIconWrapper} ${styles.courseBlue}`}>
                                    <span role="img" aria-label="lightning" style={{ fontSize: "2rem" }}>⚡</span>
                                </div>
                                <h3 className={styles.courseTitle}>Zero Fluff. One Roadmap.</h3>
                                <p className={styles.courseDescription}>
                                    No more hunting for scattered resources. Follow our curated paths and roadmap in Web Development, DSA, and AI. Get the skills that matter, mapped clearly from day one.
                                </p>
                            </div>
                            <div className={styles.courseCard}>
                                <div className={`${styles.courseIconWrapper} ${styles.coursePurple}`}>
                                    <span role="img" aria-label="wrench" style={{ fontSize: "2rem" }}>🛠️</span>
                                </div>
                                <h3 className={styles.courseTitle}>Hands-on Learning</h3>
                                <p className={styles.courseDescription}>
                                    Practice coding every step of the way. Build real-world projects, tackle coding challenges, and see your skills translate into deployable apps and portfolios.
                                </p>
                            </div>
                            <div className={styles.courseCard}>
                                <div className={`${styles.courseIconWrapper} ${styles.courseGreen}`}>
                                    <span role="img" aria-label="brain" style={{ fontSize: "2rem" }}>🧠</span>
                                </div>
                                <h3 className={styles.courseTitle}>Modern AI &amp; Tech</h3>
                                <p className={styles.courseDescription}>
                                    Explore bleeding-edge technologies—from generative AI and prompt engineering to blockchain and full-stack frameworks. Stay relevant, always.
                                </p>
                            </div>
                            <div className={styles.courseCard}>
                                <div className={`${styles.courseIconWrapper} ${styles.courseOrange}`}>
                                    <span role="img" aria-label="rocket" style={{ fontSize: "2rem" }}>🚀</span>
                                </div>
                                <h3 className={styles.courseTitle}>Career-Ready Credentials</h3>
                                <p className={styles.courseDescription}>
                                    Stand out with certificates recognized by tech leaders. Build a portfolio, solve 150+ DSA challenges, and showcase your projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.cardsSection}>
                    <div className={styles.cardsHeader} style={{ maxWidth: 900, margin: '0 auto 2rem auto' }}>
                        <h2 className={styles.cardsHeading}>💡 Features At A Glance ✨</h2>
                        <p className={styles.cardsSubheading}>Everything you need to go from beginner to industry-ready professional 🚀.</p>
                    </div>
                    <div className={styles.coursesGrid} style={{ maxWidth: 900, margin: '0 auto' }}>
                        {[
                            {
                                title: 'Interactive Labs 🧪',
                                desc: 'Practice coding, experiment, and get instant feedback in real time ⚡.',
                            },
                            {
                                title: 'Step-by-Step Tutorials 📚',
                                desc: 'Learn at your own pace with expert-crafted guides and challenges 🛠️.',
                            },
                            {
                                title: 'VS Code + LeetCode Style 🖥️',
                                desc: 'Master essential patterns through code-first, problem-solving exercises 🔍.',
                            },
                            {
                                title: 'Smart Progress Tracking 📊',
                                desc: 'Visualize your growth and celebrate milestones as you level up 🎯.',
                            },
                        ].map(({ title, desc }) => (
                            <div key={title} className={styles.courseCard}>
                                <h3 className={styles.courseTitle}>{title}</h3>
                                <p className={styles.courseDescription}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.cardsSection}>
                    <div className={styles.cardsHeader} style={{ maxWidth: 900, margin: '0 auto 2rem auto' }}>
                        <h2 className={styles.cardsHeading}>🌍 Join Our Community 🤝</h2>
                        <p className={styles.cardsSubheading}>
                            Learning is better together. Connect, code, and celebrate your wins as part of the LearnHub movement! 🎉
                        </p>
                    </div>
                    <div className={styles.coursesGrid} style={{ maxWidth: 900, margin: '0 auto' }}>
                        {[
                            {
                                title: 'Discord 💬',
                                desc: 'Collaborate, find teammates, ask anything, and code with friends and mentors in our global Discord server 🌐.',
                                buttonText: 'Join Discord',
                                buttonHref: 'https://discord.gg/YmSKSDfH',
                                buttonClass: 'button--primary',
                            },
                            {
                                title: 'Docs & Tutorials 📖',
                                desc: 'Browse deep-dive guides and documentation, and build your knowledge step by step 🧠.',
                                buttonText: 'View Docs',
                                buttonHref: '/docs/intro',
                                buttonClass: 'button--secondary',
                            },
                            {
                                title: 'Blog 📝',
                                desc: 'Read the latest news, platform updates, and industry insights made for learners 🌟.',
                                buttonText: 'Go to Blog',
                                buttonHref: '/blog',
                                buttonClass: 'button--primary',
                            },
                            {
                                title: 'Open Source 🔗',
                                desc: 'Contribute to LearnHub, build your GitHub portfolio, and help shape the future of tech education 🚀.',
                                buttonText: 'GitHub',
                                buttonHref: 'https://github.com/souvikpramanikgit/LearnHub',
                                buttonClass: 'button--secondary',
                            },
                        ].map(({ title, desc, buttonText, buttonHref, buttonClass }) => (
                            <div key={title} className={styles.courseCard}>
                                <h3 className={styles.courseTitle}>{title}</h3>
                                <p className={styles.courseDescription}>{desc}</p>
                                <a
                                    href={buttonHref}
                                    target={buttonHref.startsWith('http') ? '_blank' : undefined}
                                    rel={buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className={`button ${buttonClass}`}
                                    style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                                >
                                    {buttonText}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>


                <section style={{ textAlign: 'center', padding: '3rem 1rem 4rem 1rem' }}>
                    <h2 className={styles.coursesTitle} style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                        📈 Your Journey Starts Here 🎯
                    </h2>
                    <p
                        style={{
                            fontSize: '1.15rem',
                            maxWidth: 750,
                            margin: '0 auto 2rem auto',
                            color: 'var(--ifm-heading-color)',
                            lineHeight: 1.5,
                        }}
                    >
                        Skip the fluff, embrace real practice, and join a movement of builders, coders, and creators. 🛠️
                        <br />
                        At LearnHub, <b>your success is our curriculum</b>. Ready to launch your tech career in 30 days? 🚀
                    </p>
                    <a className="button button--primary button--lg" href="/docs/intro" style={{ marginBottom: '1rem' }}>
                        Start Learning – Free! 🎉
                    </a>
                    <div style={{ color: '#32d8b4', fontWeight: 700, letterSpacing: 1, fontSize: '1rem' }}>
                        LearnHub — Code. Connect. Grow. 🌟
                    </div>
                </section>
            </main>
        </Layout>
    );
}

import React, { useState } from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import styles from './styles.module.css';

interface Feature {
  details: string;
  icon: React.FC<any>;
  title: string;
  description: string;
  gradientClass: string;
}

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Learning',
    description: 'Hands-on coding exercises and real-world projects.',
    details: `LearnHub provides structured and interactive coding journeys.
You get hands-on practice with challenges, real-world mini-projects,
quizzes, playgrounds, and guided coding paths — helping you learn by doing,
not by memorizing.`,
    gradientClass: styles.featureGradientBlue,
  },
  {
    icon: Users,
    title: 'Expert Community',
    description: 'Connect with industry professionals and learners.',
    details: `Join a thriving tech community with mentors, experienced developers,
open-source contributors, and learners from around the world.
Share knowledge, ask questions, participate in discussions, and grow together.`,
    gradientClass: styles.featureGradientPurple,
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Earn certificates recognized by top tech companies.',
    details: `LearnHub offers certificate programs that reflect your real skills.
These certificates are project-based and respected by recruiters,
helping you stand out during internships and job applications.`,
    gradientClass: styles.featureGradientGreen,
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Track and improve your technical skills.',
    details: `Measure your progress with learning streaks, skill analytics,
performance insights, and personalized recommendations.
LearnHub helps you improve step-by-step and prepares you for real job-ready skills.`,
    gradientClass: styles.featureGradientOrange,
  },
];


export default function HomepageFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <section className={styles.featuresSection} id="features-section">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose LearnHub?</h2>
          <p className={styles.subtitle}>
            Experience a new way of learning with our innovative platform designed for modern developers
          </p>
        </div>

        {/* Feature Cards */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={styles.featureCard}
                onClick={() => setSelectedFeature(feature)}
                style={{ cursor: 'pointer' }}
              >
                <div className={`${styles.featureIconWrapper} ${feature.gradientClass}`}>
                  <Icon className={styles.featureIcon} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedFeature && (
        <div className={styles.modalOverlay} onClick={() => setSelectedFeature(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
          >
            <h3 className={styles.modalTitle}>{selectedFeature.title}</h3>

            <p className={styles.modalDescription}>
              {selectedFeature.details || selectedFeature.description}
            </p>

            <button
              onClick={() => setSelectedFeature(null)}
              className={styles.modalCloseButton}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

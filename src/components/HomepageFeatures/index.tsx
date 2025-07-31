import React from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import styles from './styles.module.css';

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Learning',
    description: 'Hands-on coding exercises and real-world projects that reinforce your learning.',
    gradientClass: styles.featureGradientBlue,
  },
  {
    icon: Users,
    title: 'Expert Community',
    description: 'Connect with industry professionals and fellow learners in our vibrant community.',
    gradientClass: styles.featureGradientPurple,
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Earn certificates recognized by top tech companies and boost your career.',
    gradientClass: styles.featureGradientGreen,
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Track your progress and see measurable improvements in your technical skills.',
    gradientClass: styles.featureGradientOrange,
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection} id="features-section">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Why Choose LearnHub?
          </h2>
          <p className={styles.subtitle}>
            Experience a new way of learning with our innovative platform designed for modern developers
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon || BookOpen; // BookOpen as fallback icon
            return (
              <div
                key={index}
                className={styles.featureCard}
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
    </section>
  );
}

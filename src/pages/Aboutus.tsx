import React from "react";
import "./aboutus.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="highlight2">LearnHub</span>  your
          all-in-one platform to <b>learn</b>, <b>practice</b>, and{" "}
          <b>grow</b> in the world of technology. From structured tutorials
          to placement preparation, we’ve got you covered.
        </p>
      </section>

      {/* What We Offer */}
      <section className="section">
        <h2>What We Offer</h2>
        <div className="grid">
          <div className="card">
            <h3>Tutorial Hub</h3>
            <p>
              Step-by-step tutorials in <b>Web Development</b>,{" "}
              <b>Generative AI</b>, <b>DSA</b>, <b>Machine Learning</b>,{" "}
              <b>Blockchain</b>, and more.  
              Each subject comes with a <b>clear roadmap</b>, from
              beginner to advanced, so you never feel lost while learning.
            </p>
          </div>
          <div className="card">
            <h3>Notes Section</h3>
            <p>
              Well-structured, <b>chapter-wise notes</b> for quick revision
              and easy reference across all major domains.  
              Whether you’re preparing for an exam, interview, or project,
              our notes are your perfect quick-start guide.
            </p>
          </div>
          <div className="card">
            <h3>Tech Blog</h3>
            <p>
              Stay inspired with <b>in-depth articles</b> on technology,
              personal growth, and industry insights.  
              Learn from real-world case studies, coding tips, and developer
              journeys that prepare you for <b>real projects</b>.
            </p>
          </div>
          <div className="card">
            <h3>Tech News</h3>
            <p>
              Get the <b>latest updates</b> on AI, Web, Cloud, and Blockchain.  
              Be the first to know about industry shifts, new tools,
              and breakthrough technologies shaping the future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
      <h2 className="c2">Why Choose Us?</h2> 
        <ul className="list">
          <li>✅ Placement-focused learning approach</li>
          <li>✅ Multi-domain expertise in one platform</li>
          <li>✅ Chapter-wise notes and clear roadmaps</li>
          <li>✅ Regular updates to match industry trends</li>
          <li>✅ Supportive tech community</li>
        </ul>
      </section>

      {/* Mission */}
      <section className="section">
        <h3>Our Mission</h3>
        <p>
          To make learning <span className="highlight">simple</span>,{" "}
          <span className="highlight">structured</span>, and{" "}
          <span className="highlight">career-driven</span>, empowering
          students and professionals to excel in placements and stay ahead
          in the <b>tech race</b>.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Join Our Journey</h2>
        <p>
          Whether you’re writing your <b>first line of code</b> or building
          a career in <b>AI</b>, <span className="highlight">LearnHub</span>{" "}
          is your trusted guide.
        </p>
        <button className="cta-btn">Start Learning</button>
      </section>
    </div>
  );
};

export default AboutUs;

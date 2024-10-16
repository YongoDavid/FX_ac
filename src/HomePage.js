import React, { useState } from "react";
import "./HomePage.css"; // Updated CSS file

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="homepage">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">
          <a href="#">XYZ Academy</a>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="sign-in-btn">Sign In</button>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master Forex Trading with Our Academy</h1>
          <p>Join our community of successful traders and learn how to navigate the forex market with confidence.</p>
          <button className="cta-btn">Start Your Journey</button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview">
        <h2>About Our Academy</h2>
        <p>
          At XYZ Forex Academy, we provide comprehensive training to help individuals
          excel in forex trading. Whether you're a beginner or an experienced trader,
          our structured courses, expert mentors, and market insights will guide you
          towards consistent profitability.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Expert Instructors:</strong> Learn from seasoned professionals with
            years of experience in forex trading.
          </li>
          <li>
            <strong>Proven Strategies:</strong> We teach practical strategies that have
            been tested and proven to work in real-world market conditions.
          </li>
          <li>
            <strong>Comprehensive Courses:</strong> From basics to advanced trading
            techniques, we cover everything you need to become a successful trader.
          </li>
          <li>
            <strong>Community Support:</strong> Engage with fellow traders and mentors in
            our interactive forums and live sessions.
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial">
          <p>
            "I started as a complete beginner, and now I’m consistently making profitable
            trades. The instructors at XYZ Forex Academy are the best!"
          </p>
          <span>- John Doe</span>
        </div>
        <div className="testimonial">
          <p>
            "The strategies I learned have completely changed the way I approach trading.
            I couldn’t have done it without the academy’s support."
          </p>
          <span>- Jane Smith</span>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Start Trading?</h2>
        <p>
          Join our community and gain the skills you need to navigate the forex market
          with confidence.
        </p>
        <button className="cta-btn">Enroll Now</button>
      </section>
    </div>
  );
};

export default HomePage;

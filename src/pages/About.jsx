import React from 'react';
import styles from '../App.module.css';

const About = () => {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>About Our Platform</h1>
      
      <div className={styles.aboutContent}>
        <p>
          InternHub bridges the gap between talented students and leading companies 
          through our innovative internship matching platform.
        </p>
        
        <h3 style={{ margin: "1.5rem 0 0.5rem", color: "#4361ee" }}>
          Why Choose Us?
        </h3>
        
        <ul className={styles.featureList}>
          <li>AI-powered internship matching</li>
          <li>Detailed company profiles</li>
          <li>Application progress tracking</li>
          <li>Career development resources</li>
        </ul>
        
        <div style={{ marginTop: "2rem", padding: "1rem", background: "#f8f9fa", borderRadius: "8px" }}>
          <p>
            <strong>Founded in 2023</strong>, we've already helped over 1,000 students 
            find their dream internships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

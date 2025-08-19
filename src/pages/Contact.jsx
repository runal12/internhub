import React from 'react';
import styles from '../App.module.css';

const Contact = () => {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Contact Information</h1>
      
      <div className={styles.contactGrid}>
        {/* Email Card */}
        <div className={styles.contactCard}>
          <div className={styles.contactIcon}>📧</div>
          <h3 className={styles.contactCardTitle}>Email</h3>
          <p className={styles.contactDetails}>support@internhub.com</p>
          <p className={styles.contactSubtext}>Typically responds within 24 hours</p>
        </div>
        
        {/* Phone Card */}
        <div className={styles.contactCard}>
          <div className={styles.contactIcon}>📱</div>
          <h3 className={styles.contactCardTitle}>Phone</h3>
          <p className={styles.contactDetails}>(123) 456-7890</p>
          <p className={styles.contactSubtext}>Mon-Fri, 9AM-5PM PST</p>
        </div>
        
        {/* Office Card */}
        <div className={styles.contactCard}>
          <div className={styles.contactIcon}>🏢</div>
          <h3 className={styles.contactCardTitle}>Headquarters</h3>
          <p className={styles.contactDetails}>123 Tech Lane</p>
          <p className={styles.contactDetails}>San Francisco, CA 94107</p>
          <p className={styles.contactSubtext}>By appointment only</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

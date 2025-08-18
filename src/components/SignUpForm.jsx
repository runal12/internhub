import { useState } from 'react';
import styles from './SignUpForm.module.css';

const SignUpForm = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name required';
    if (!formData.email.trim()) newErrors.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) newErrors.password = 'Password required';
    else if (formData.password.length < 6) {
      newErrors.password = 'Must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSignUp(formData);
      setSuccessMessage('Account created successfully');
      setFormData({ fullName: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        <div className={styles.header}>
          <h2>Join Our Internship Program</h2>
          <p>Start your career journey today</p>
        </div>

        {successMessage && (
          <div className={styles.successBanner} role="status" aria-live="polite">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className={errors.fullName ? styles.inputError : ''}
              placeholder="John Doe"
            />
            {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={errors.email ? styles.inputError : ''}
              placeholder="john@example.com"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className={errors.password ? styles.inputError : ''}
              placeholder="••••••"
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}
          </div>

          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

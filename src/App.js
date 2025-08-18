import { useState } from 'react';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import SignUpForm from './components/SignUpForm';
import About from './pages/About';
import Contact from './pages/Contact';
import styles from './App.module.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [users, setUsers] = useState([]);

  return (
    <div className={styles.app}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className={styles.pageContainer}>
        {currentPage === 'home' && (
          <>
            <section className={styles.hero}>
              <h1>Internship Portal</h1>
              <p>Find your dream internship</p>
            </section>
            <div className={styles.cardGrid}>
              {users.map((user) => (
                <UserCard key={user.email} name={user.name} email={user.email} />
              ))}
            </div>
          </>
        )}

        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'signup' && (
          <SignUpForm
            onSignUp={(newUser) =>
              setUsers([
                ...users,
                { name: newUser.fullName, email: newUser.email },
              ])
            }
          />
        )}
      </main>
    </div>
  );
}

export default App;

// src/components/Landing/Landing.jsx
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <>
      <main>
        <p>Helping others can help us feel a sense of belonging, make new friends, and connect with our communities.</p>
        <p>Local Heroes is here to help people help themselves by helping others.</p>
        <p>Ask for help, offer help... either way, you’re a local hero!</p>
        <div className={styles.landingPageButtons}>
          <a href="/signup" className="btn btn-link" role="button">Sign Up</a>
          <a href="/signin" className="btn btn-link" role="button">Sign In</a>
        </div>
      </main>
    </>
  );
};

export default Landing;

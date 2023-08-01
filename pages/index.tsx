import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const HomePage: React.FC = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationStep((prevStep) => (prevStep + 1) % 5);
    }, 2500); // Reducimos el tiempo de espera a 3 segundos (3000 milisegundos)

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className={styles.container}>
      {animationStep !== 0 && (
        <div className={styles.questionContainerOne} style={{ bottom: animationStep === 1 ? '0' : '81%', opacity: animationStep === 1 ? '1' : '0' }}>
          Which of the below statements about electricity is not true?
        </div>
      )}
      {animationStep !== 0 && (
        <>
          <div className={styles.questionContainer} style={{ bottom: animationStep === 2 ? '0' : '68%', opacity: animationStep === 2 ? '1' : '0' }}>
            <label className={styles.radioButtonLabel}>
              <input type="radio" name="question" className={styles.radioButton} />
              Electricity is measured in units called watts
            </label>
          </div>
          <div className={styles.questionContainer} style={{ bottom: animationStep === 3 ? '0' : '30%', opacity: animationStep === 3 ? '1' : '0' }}>
            <label className={styles.radioButtonLabel}>
              <input type="radio" name="question" className={styles.radioButton} />
              Electricity flows at the speed of light
            </label>
          </div>
          <div className={`${styles.questionContainer} ${styles.questionContainer4}`} style={{ bottom: animationStep === 4 ? '0' : '10%', opacity: animationStep === 4 ? '1' : '0' }}>
            <div className={`${styles.radioButtonContainer} ${animationStep === 4 ? styles.radioButton4Selected : ''}`} />
            <label className={styles.radioButtonLabel}>
              Electricity is a primary energy source
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;

import React from 'react';
import GradientBackground from '../components/GradientBackground';

const Gradient = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden h-center items-center justify-center">
      <GradientBackground >
         <p>Interactive Gradient Background</p>
      </GradientBackground>
    </div>
  );
};

export default Gradient;

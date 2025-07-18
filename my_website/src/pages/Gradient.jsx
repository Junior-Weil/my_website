import React from 'react';
import GradientBackground from '../components/GradientBackground';

const Gradient = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <GradientBackground >
         <p>Interactive Gradient Background</p>
      </GradientBackground>
    </div>
  );
};

export default Gradient;

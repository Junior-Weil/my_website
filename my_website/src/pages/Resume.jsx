import React from 'react';
import GradientMarqueeText from '../components/AnimatedGradientText';

const resume = () => {
  return (
    <div className="w-screen justify-center">
      <div className="p-10 w-3/4 min-h-screen bg-white flex flex-col items-center justify-center">
        <GradientMarqueeText
          text="My Resume"
          gradientColors={["#1F1C2C", "#928DAB", "#1F1C2C"]}
          className="text-5xl font-extrabold tracking-tight p-10"
        />
        <iframe
          src={`${import.meta.env.BASE_URL}/Resume.pdf`}
          title="Resume PDF"
          className="w-full max-w-5xl h-[90vh] border rounded-lg shadow-lg"
        />
        <a
          href={`${import.meta.env.BASE_URL}/Resume.pdf`}
          download
          className="mt-6 text-blue-600 hover:underline text-lg"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default resume;

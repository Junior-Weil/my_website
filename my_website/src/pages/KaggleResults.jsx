import React from "react";

const Kaggle = () => {
  return (
    <div className="p-10 bg-white w-full min-h-screen flex flex-col items-center justify-start">
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <GradientMarqueeText
          text="Kaggle Home Credit Results"
          gradientColors={["#1F1C2C", "#928DAB", "#1F1C2C"]}
          className="text-5xl font-extrabold tracking-tight"
        />
        
      </div>
    </div>
  )
}

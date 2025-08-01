import React from "react";
import GradientMarqueeText from "../components/AnimatedGradientText";

const sectionClass =
  "bg-white/80 rounded-xl shadow-lg p-8 mb-8 w-full max-w-3xl flex flex-col items-center";
const headingClass = "text-3xl md:text-4xl font-bold mb-4 text-gray-900";
const paragraphClass = "text-lg md:text-xl text-gray-700 mb-4 leading-relaxed";
const listClass = "list-disc pl-6 text-gray-700 mb-4";
const imageClass =
  "my-6 rounded-lg shadow-md border border-gray-200 w-full max-w-md";

const Kaggle = () => {
  return (
    <div className="min-h-screen w-full bg-slate-200 from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center py-12 px-4">
      <div className="flex flex-row items-center justify-center mb-12 w-full">
        <GradientMarqueeText
          text="Kaggle Competition: Predicting Client Loan Default Risk"
          gradientColors={["#1F1C2C", "#928DAB", "#1F1C2C"]}
          className="text-5xl font-extrabold tracking-tight drop-shadow-lg"
        />
      </div>

      <div className={sectionClass}>
        <h2 className={headingClass}>Problem Statement</h2>
        <p className={paragraphClass}>
          The goal of the competition, hosted by Home Credit on Kaggle, was to accurately predict which clients are likely to default on their loans. Achieving reliable, stable predictions over time is crucial for financial institutions to manage risk effectively and ensure fair access to credit for individuals with limited or no credit history.
          <br />
          <br />
          Financial institutions face significant challenges when evaluating the risk of lending to customers without extensive financial histories. Traditional credit assessment methods can unfairly deny credit to individuals capable of repaying loans. Thus, creating predictive models that balance performance and stability over time can significantly impact financial inclusion and economic opportunities for many.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={headingClass}>Our Approach and Results</h2>
        <p className={paragraphClass}>
          Our solution aimed not only for high predictive performance but also emphasized long-term stability in predictions, critical for real-world implementation.
        </p>
        <div className="w-full flex flex-col items-center">
          <h4 className="text-xl font-semibold mb-2 text-gray-800">
            Model Performance Metrics:
          </h4>
          <img src="/kaggleImages/AUC.png" alt="AUC Curve" className={imageClass} />
          <ul className={listClass}>
            <li>
              <span className="font-semibold">AUC (Area Under Curve):</span> Achieved an impressive ~0.90 AUC, indicating excellent predictive capability.
            </li>
          </ul>
          <img src="/kaggleImages/Learning_Curve.png" alt="Learning Curve" className={imageClass} />
          <ul className={listClass}>
            <li>
              <span className="font-semibold">Log Loss:</span> Reduced effectively over iterations, converging to around 0.38, demonstrating robust probability calibration and confidence in predictions.
            </li>
          </ul>
          <img src="/kaggleImages/FPR-FNR.png" alt="FPR-FNR Curve" className={imageClass} />
          <ul className={listClass}>
            <li>
              <span className="font-semibold">FPR-FNR Curve:</span> The False Positive Rate (FPR) and False Negative Rate (FNR) curves demonstrated a balanced trade-off, enabling informed threshold adjustments to suit different operational requirements.
            </li>
          </ul>
        </div>
      </div>

      <div className={sectionClass}>
        <h2 className={headingClass}>Feature Importance Analysis (SHAP values)</h2>
        <img src="/kaggleImages/Shap_Bar.png" alt="SHAP Bar" className={imageClass} />
        <img src="/kaggleImages/Shap_Features.png" alt="SHAP Features" className={imageClass} />
        <p className={paragraphClass}>
          Our SHAP analysis revealed key features influencing loan defaults:
        </p>
        <ul className={listClass}>
          <li>
            <span className="font-semibold">High Impact Features:</span> Loan amount (credamount_770A), annuity payments (annuity_780A), mobile phone account counts (mobilephncnt_593L), and disbursed credit amount (disbursedcredamount_1113A). These significantly affected predictions, with larger loan and annuity amounts strongly correlating with higher default risk.
          </li>
        </ul>
      </div>

      <div className={sectionClass}>
        <h2 className={headingClass}>Confusion Matrix</h2>
        <img src="/kaggleImages/Confusion_Matrix.png" alt="Confusion Matrix" className={imageClass} />
        <ul className={listClass}>
          <li>True Positives: 176,366</li>
          <li>True Negatives: 167,341</li>
          <li>False Positives: 36,480</li>
          <li>False Negatives: 26,446</li>
        </ul>
        <p className={paragraphClass}>
          The confusion matrix highlighted a strong ability to identify actual default cases correctly while maintaining a manageable level of incorrect predictions.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={headingClass}>Class Imbalance Handling</h2>
        <img src="/kaggleImages/pos_neg_ration.png" alt="Class Imbalance" className={imageClass} />
        <p className={paragraphClass}>
          Our dataset exhibited a significant class imbalance (~96.86% non-default, 3.14% default). Effective strategies were implemented to manage this imbalance, resulting in robust model performance despite skewed class distribution.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={headingClass}>Stability Over Time</h2>
        <p className={paragraphClass}>
          We placed substantial emphasis on model stability, an essential factor evaluated explicitly in this competition. Our predictions maintained consistency across evaluation periods, minimizing performance drop-offs and achieving stable metrics, critical for deployment in real-world scenarios.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={headingClass}>Learnings and Insights</h2>
        <p className={paragraphClass}>
          Participating in this competition provided valuable insights into:
        </p>
        <ul className={listClass}>
          <li>Advanced methods for ensuring long-term prediction stability.</li>
          <li>Techniques for effectively handling class imbalance, crucial for real-world credit scoring.</li>
          <li>Importance of interpretability (e.g., SHAP values) in explaining model predictions to stakeholders, improving transparency and trust.</li>
          <li>Practical applications of balancing model precision, recall, and stability to maximize operational performance in finance.</li>
        </ul>
      </div>

      <div className={sectionClass}>
        <h2 className={headingClass}>Final Thoughts</h2>
        <p className={paragraphClass}>
          This competition underscored the critical role that stable and interpretable predictive models play in financial decision-making, especially for underserved populations. Our strong predictive performance, coupled with reliable stability, demonstrated our model's readiness for real-world application, helping to improve financial accessibility and decision-making reliability for consumer finance providers.
        </p>
      </div>
    </div>
  );
};

export default Kaggle;

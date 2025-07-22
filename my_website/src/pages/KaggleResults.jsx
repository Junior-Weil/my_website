import React from "react";
import GradientMarqueeText from "../components/AnimatedGradientText";

const Kaggle = () => {
  return (
    <div className="p-10 bg-white w-full min-h-screen flex flex-col items-center justify-start">
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <GradientMarqueeText
          text="Kaggle Competition: Predicting Client Loan Default Risk"
          gradientColors={["#1F1C2C", "#928DAB", "#1F1C2C"]}
          className="text-5xl font-extrabold tracking-tight"
        />
      </div>

      <div className="max-w-3xl text-center text-gray-800">
        <h2 className="text-4xl">
          Problem Statement
        </h2>
        <p className="text-xl leading-relaxed">
          The goal of the competition, hosted by Home Credit on Kaggle, was to accurately predict which clients are likely to default on their loans. Achieving reliable, stable predictions over time is crucial for financial institutions to manage risk effectively and ensure fair access to credit for individuals with limited or no credit history.

          Financial institutions face significant challenges when evaluating the risk of lending to customers without extensive financial histories. Traditional credit assessment methods can unfairly deny credit to individuals capable of repaying loans. Thus, creating predictive models that balance performance and stability over time can significantly impact financial inclusion and economic opportunities for many.
        </p>


        <h2 className="text-4xl">
          Our Approach and Results
        </h2>
        <p className="text-xl leading-relaxed">
          Our solution aimed not only for high predictive performance but also emphasized long-term stability in predictions, critical for real-world implementation.
        </p>

        <ul>
          <h4>
            Model Performance Metrics:
          </h4>
          <img src="/../public/kaggleImages/AUC.png" className="gap-y-10" />
          <li>
            AUC (Area Under Curve): Achieved an impressive ~0.90 AUC, indicating excellent predictive capability.
          </li>
          <img src="/../public/kaggleImages/Learning_Curve.png" className="gap-y-10" />
          <li>
            Log Loss: Reduced effectively over iterations, converging to around 0.38, demonstrating robust probability calibration and confidence in predictions.
          </li>
          <img src="/../public/kaggleImages/FPR-FNR.png" className="gap-y-10" />
          <li>
            FPR-FNR Curve: The False Positive Rate (FPR) and False Negative Rate (FNR) curves demonstrated a balanced trade-off, enabling informed threshold adjustments to suit different operational requirements.
          </li>
        </ul>


        <h2 className="text-4xl">
          Feature Importance Analysis (SHAP values):
        </h2>
        <p>
          Our SHAP analysis revealed key features influencing loan defaults:
        </p>
        <ul>
          <li>
            High Impact Features: Loan amount (credamount_770A), annuity payments (annuity_780A), mobile phone account counts (mobilephncnt_593L), and disbursed credit amount (disbursedcredamount_1113A). These significantly affected predictions, with larger loan and annuity amounts strongly correlating with higher default risk.
          </li>
        </ul>


        <h2 className="text-4xl">
          Confusion Matrix:
        </h2>
        <img src="/../public/kaggleImages/Confusion_Matrix.png" className="gap-y-10" />
        <ul>
          <li>
            True Positives: 176,366
          </li>
          <li>
            True Negatives: 167,341
          </li>
          <li>
            False Positives: 36,480
          </li>
          <li>
            False Negatives: 26,446
          </li>
        </ul>
        <p>
          The confusion matrix highlighted a strong ability to identify actual default cases correctly while maintaining a manageable level of incorrect predictions.
        </p>


        <h2 className="text-4xl">
          Class Imbalance Handling:
        </h2>
        <img src="/../public/kaggleImages/Shap_Bar.png" className="gap-y-10" />
        <img src="/../public/kaggleImages/Shap_Features.png" className="gap-y-10" />
        <p>
          Our dataset exhibited a significant class imbalance (~96.86% non-default, 3.14% default). Effective strategies were implemented to manage this imbalance, resulting in robust model performance despite skewed class distribution.
        </p>


        <h2 className="text-4xl">
          Stability Over Time:
        </h2>
        <p>
          We placed substantial emphasis on model stability, an essential factor evaluated explicitly in this competition. Our predictions maintained consistency across evaluation periods, minimizing performance drop-offs and achieving stable metrics, critical for deployment in real-world scenarios.
        </p>


        <h2 className="text-4xl">
          Learnings and Insights:
        </h2>
        <p>
          Participating in this competition provided valuable insights into:
        </p>
        <ul>
          <li>
            Advanced methods for ensuring long-term prediction stability.
          </li>
          <li>
            Techniques for effectively handling class imbalance, crucial for real-world credit scoring.
          </li>
          <li>
            Importance of interpretability (e.g., SHAP values) in explaining model predictions to stakeholders, improving transparency and trust.
          </li>
          <li>
            Practical applications of balancing model precision, recall, and stability to maximize operational performance in finance.
          </li>
        </ul>


        <h2 className="text-4xl">
          Final Thoughts:
        </h2>
        <p>
          This competition underscored the critical role that stable and interpretable predictive models play in financial decision-making, especially for underserved populations. Our strong predictive performance, coupled with reliable stability, demonstrated our model's readiness for real-world application, helping to improve financial accessibility and decision-making reliability for consumer finance providers.
        </p>


      </div>
    </div>
  );
};

export default Kaggle;

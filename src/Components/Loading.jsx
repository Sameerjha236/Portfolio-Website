import React, { useState, useEffect } from "react";
const Loading = () => {
  const [randomQuestion, setRandomQuestion] = useState("");
  useEffect(() => {
    const companyQuestions = [
      "What is the mission statement of your company?",
      "How long has your company been in business?",
      "What are the core values of your company?",
      "What sets your company apart from competitors?",
      "Can you briefly describe the products or services your company offers?",
    ];

    const randomIndex = Math.floor(Math.random() * companyQuestions.length);
    const selectedQuestion = companyQuestions[randomIndex];

    setRandomQuestion(selectedQuestion);
  }, []);

  return (
    <div className="Loading">
      <h3>{randomQuestion}</h3>
    </div>
  );
};

export default Loading;

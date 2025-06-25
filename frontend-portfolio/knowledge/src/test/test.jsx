import { useState } from "react";

const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
    },
    {
      id: 2,
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "Toni Morrison"],
    },
    {
      id: 3,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
    },
  ];
  
  
   

const Test = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
  
    const handleOptionSelect = (index, option) => {
      setSelectedAnswers((prev) => ({ ...prev, [index]: option }));
    };
  
    const handleNext = () => {
      if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
    };
  
    const handlePrev = () => {
      if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };
    
    return ( 
       
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4">
        <div className="bg-white text-zinc-900 rounded-2xl shadow-2xl p-8 w-full max-w-xl transition-all duration-300">
          <h2 className="text-xl font-semibold mb-6">
            Question {currentIndex + 1} of {questions.length}
          </h2>
          <h1 className="text-2xl font-bold mb-4">{questions[currentIndex].question}</h1>
          <div className="space-y-4">
            {questions[currentIndex].options.map((option, i) => (
              <button
                key={i}
                className={`w-full text-left px-4 py-3 rounded-xl border transition hover:bg-blue-100 ${
                  selectedAnswers[currentIndex] === option
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => handleOptionSelect(currentIndex, option)}
              >
                {option}
              </button>
            ))}
          </div>
  
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            {currentIndex < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => alert("Test submitted!")}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    );
}
 
export default Test;






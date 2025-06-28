import { useState } from "react";
import { questions } from "../test/questions";

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionSelect = (index, option) => {
    setSelectedAnswers((prev) => ({ ...prev, [index]: option }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4">
      <div className="bg-white text-zinc-900 rounded-2xl shadow-2xl p-8 w-full max-w-xl transition-all duration-300">
        {score === null ? (
          <>
            <h2 className="text-xl font-semibold mb-6">
              Question {currentIndex + 1} of {questions.length}
            </h2>
            <h1 className="text-2xl font-bold mb-4">
              {questions[currentIndex].question}
            </h1>
            <div className="space-y-4">
              {questions[currentIndex].options.map((option, i) => {
                let className =
                  "w-full text-left px-4 py-3 rounded-xl border transition flex justify-between gap-4";
                const selected = selectedAnswers[currentIndex];
                const correct = questions[currentIndex].answer;
                const total = 0

                questions.forEach((question,index)=>{
                    if(selectedAnswers[index] === question.answer){
                         total += question.initialScore
                    }

                    setScore(total)
                  })
                if (selected !== option) {
                  className += " bg-gray-100 hover:bg-blue-600";
                } 
               
                else if (selected === correct) {
                  className += " bg-green-600 text-white";
                } else {
                  className += " bg-red-600 text-white";
                }

                return (
                  <button
                    key={i}
                    className={className}
                    onClick={() => handleOptionSelect(currentIndex, option)}
                  >
                    <div className="option">{option}</div>
                  </button>
                );
              })}
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
                  onClick={alert("submitted")}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Submit
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Test Completed 🎉</h1>
            <p className="text-lg">
              Your score is <span className="font-bold">{score}</span> out of{" "}
              <span className="font-bold">{questions.length * 2}</span>
            </p>
            <button
              onClick={() => {
                // Reset test if needed
                setCurrentIndex(0);
                setSelectedAnswers({});
                setScore(null);
              }}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retake Test
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;

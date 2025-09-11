import React from "react";
import { FilePlus, Briefcase, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
        id: 1,
        icon: <FilePlus className="w-8 h-8 text-green-700" />,
        title: "Add Jobs",
        description: "Post your job openings and reach the right candidates quickly.",
      },
      
    {
      id: 2,
      icon: <Briefcase className="w-8 h-8 text-green-700" />,
      title: "Find Jobs",
      description: "Browse tailored opportunities that match your expertise.",
    },
    {
      id: 3,
      icon: <CheckCircle2 className="w-8 h-8 text-green-700" />,
      title: "Get Hired",
      description: "Connect with employers and begin your next role effortlessly.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-xl lg:container m-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          How It <span className="text-green-700">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

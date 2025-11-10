import introSliceOne from "../../Images/v_1_-removebg-preview.png";

const DeviceSpecs = () => {
  const leftSpecs = [
    {
      title: "Pure Flavor",
      description:
        "Postless design preserves every drop with zero compromise.",
    },
    {
      title: "Custom Ceramics",
      description:
        "Formulated for Muha concentrates, delivering big clouds and bold taste.",
    },
    {
      title: "Sleek & Durable",
      description: "Single-body design built for style and longevity.",
    },
  ];

  const rightSpecs = [
    {
      title: "Smart Control",
      description:
        "Internal chipset sets the perfect temp for smooth hits every time.",
    },
    {
      title: "LED Display",
      description:
        "Minimalist interface designed for ease without distractions.",
    },
    {
      title: "Recharge Anywhere",
      description: "USB-C charging keeps you ready on the go.",
    },
  ];

  return (
    <section className="relative py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col space-y-8 text-center lg:text-left">
          {leftSpecs.map((spec, index) => (
            <div key={index} className="device-spec-info">
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {spec.title}
              </h5>
              <div className="w-16 h-1 bg-amber-500 mx-auto lg:mx-0 mb-3 rounded-full"></div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={introSliceOne}
            alt="Device Display"
            className="w-[300px] md:w-[400px] lg:w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col space-y-8 text-center lg:text-left">
          {rightSpecs.map((spec, index) => (
            <div key={index} className="device-spec-info">
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {spec.title}
              </h5>
              <div className="w-16 h-1 bg-amber-500 mx-auto lg:mx-0 mb-3 rounded-full"></div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceSpecs;

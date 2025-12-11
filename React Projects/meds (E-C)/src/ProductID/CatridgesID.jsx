import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { cartridgeData } from "../constant/index";

const CatridgesID = () => {
  const { id } = useParams();
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    if (id) {
      const allCartridges = [
        ...cartridgeData.meltedDiamonds,
        ...cartridgeData.distillate
      ];

      const data = allCartridges.find((item) => String(item.id) === String(id));
      setCurrentData(data);
    }
  }, [id]);

  if (!currentData) {
    return (
      <section className="w-full py-20 text-center text-gray-700 dark:text-white">
        <h2>Product not found</h2>
      </section>
    );
  }

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-12 md:py-20 bg-white dark:bg-[#0d1117] text-gray-900 dark:text-white transition-all duration-300 mt-6 lg:mt-2">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg mb-10">
          <img
            src={currentData.image}
            alt={currentData.name}
            className="w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{currentData.name}</h1>
          <p className="text-lg">{currentData.type}</p>
        </div>
      </div>
    </section>
  );
};

export default CatridgesID;
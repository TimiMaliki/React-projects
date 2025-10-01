import React from "react";
import Card from "./Card";

const List = ({places}) => {
 
  return (
    <div className="container  mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Find What Attracts You</h2>
      <div className="mb-4">
        <label htmlFor="type" className="block text-black mb-1">
          Type
        </label>
        <select
          id="type"
          className="w-full border border-white/50 bg-black text-white cursor-pointer rounded-md px-3 py-2 focus:ring focus:ring-red-500 focus:border-red-700"
        >
          <option value="restaurants text-black">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
      </div>

      {/* Rating Select */}
      <div className="mb-6">
        <label htmlFor="rating" className="block text-gray-black mb-1">
          Rating
        </label>
        <select
          id="rating"
          className="w-full border border-white/50 bg-black text-white cursor-pointer rounded-md px-3 py-2 focus:ring focus:ring-red-500 focus:border-red-700"
        >
          <option value="">All</option>
          <option value="3">Above 3.0</option>
          <option value="4">Above 4.0</option>
          <option value="4.5">Above 4.5</option>
        </select>
      </div>

      {/* Places list */}
      <div className="grid grid-cols-1 gap-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
  {places?.map((place, index) => (
    <div key={index} className="col-span-1 p-4">
      <Card place={place}/>
    </div>
  ))}
</div>


    </div>
  );
};

export default List;

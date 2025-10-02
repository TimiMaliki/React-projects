import React, { useEffect, useState, createRef } from "react";
import Card from "./Card";

const List = ({ places, onChildClick, isLoading }) => {
  const [scrollRefs, setScrollRefs] = useState([]);

  // Create refs for each place
  useEffect(() => {
    setScrollRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  // Scroll into view when a child (marker) is clicked
  useEffect(() => {
    if (onChildClick !== null && scrollRefs[onChildClick]) {
      scrollRefs[onChildClick].current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [onChildClick, scrollRefs]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Find What Attracts You</h2>

      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          {/* Type filter */}
          <div className="mb-4">
            <label htmlFor="type" className="block text-black mb-1">
              Type
            </label>
            <select
              id="type"
              className="w-full border border-white/50 bg-black text-white cursor-pointer rounded-md px-3 py-2 focus:ring focus:ring-red-500 focus:border-red-700"
            >
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
          </div>

          {/* Rating filter */}
          <div className="mb-6">
            <label htmlFor="rating" className="block text-black mb-1">
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
            {places?.map((place, i) => (
              <div
                key={i}
                ref={scrollRefs[i]} // 👈 attach ref
                className="col-span-1 p-4"
              >
                <Card place={place} selected={Number(onChildClick) === i} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default List;

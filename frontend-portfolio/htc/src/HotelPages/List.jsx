import React, { useEffect, useState, createRef } from "react";
import Card from "./Card";

const List = ({ places = [], onChildClick, isLoading, type, setType, rating, setRating }) => {
  const [scrollRefs, setScrollRefs] = useState([]);

  useEffect(() => {
    setScrollRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  useEffect(() => {
    if (onChildClick !== null && scrollRefs[onChildClick]) {
      scrollRefs[onChildClick].current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [onChildClick, scrollRefs]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Find What Attracts You</h2>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-white  mb-1">Places</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full border bg-black rounded px-3 py-2">
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-white mb-1">Rating</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)} className="w-full  bg-black border rounded px-3 py-2">
            <option value="">All</option>
            <option value="3">Above 3.0</option>
            <option value="4">Above 4.0</option>
            <option value="4.5">Above 4.5</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {places.length ? (
            places.map((place, i) => (
              <div key={place.location_id ?? i} ref={scrollRefs[i]}>
                <Card place={place} selected={Number(onChildClick) === i} />
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">No places found in this area</div>
          )}
        </div>
      )}
    </div>
  );
};

export default List;

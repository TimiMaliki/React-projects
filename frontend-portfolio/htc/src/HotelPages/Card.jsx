import React from 'react'
import { Star, MapPin, Phone } from "lucide-react";

const Card = ({place}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
    {/* Image */}
    <img
      src={
        place.photo
          ? place.photo.images.large.url
          : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
      }
      alt={place.name}
      className="h-[350px] w-full object-cover"
    />

    {/* Content */}
    <div className="p-4">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{place.name}</h2>

      {/* Rating + Reviews */}
      <div className="flex justify-between items-center my-2">
        <div className="flex text-yellow-400">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={18}
              className={i < Number(place.rating) ? "fill-yellow-400" : "fill-gray-200"}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600">
          {place.num_reviews} review{place.num_reviews > 1 && "s"}
        </p>
      </div>

      {/* Price */}
      <div className="flex justify-between text-sm my-1">
        <span className="text-gray-700 font-medium">Price</span>
        <span className="text-gray-600">{place.price_level}</span>
      </div>

      {/* Ranking */}
      <div className="flex justify-between text-sm my-1">
        <span className="text-gray-700 font-medium">Ranking</span>
        <span className="text-gray-600">{place.ranking}</span>
      </div>

      {/* Awards */}
      {place?.awards?.map((award, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 my-2 text-sm text-gray-600"
        >
          <img src={award.images.small} alt={award.display_name} />
          <span>{award.display_name}</span>
        </div>
      ))}

      {/* Cuisine Chips */}
      <div className="flex flex-wrap gap-2 my-2">
        {place?.cuisine?.map(({ name }) => (
          <span
            key={name}
            className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
          >
            {name}
          </span>
        ))}
      </div>

      {/* Address */}
      {place.address && (
        <p className="flex items-center text-sm text-gray-600 mt-2">
          <MapPin size={16} className="mr-1 text-blue-500" />
          {place.address}
        </p>
      )}

      {/* Phone */}
      {place.phone && (
        <p className="flex items-center text-sm text-gray-600 mt-1">
          <Phone size={16} className="mr-1 text-green-500" />
          {place.phone}
        </p>
      )}
    </div>

    {/* Actions */}
    <div className="flex justify-between px-4 py-3 border-t">
      <button
        onClick={() => window.open(place.web_url, "_blank")}
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        Trip Advisor
      </button>
      <button
        onClick={() => window.open(place.website, "_blank")}
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        Website
      </button>
    </div>
  </div>
  )
}

export default Card
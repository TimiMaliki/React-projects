🧳 HTC Booking – Travel Smarter, Explore Further
🌍 Overview

HTC Booking is a modern, all-in-one travel platform that allows users to search and book flights, hotels, car rentals, and attractions — all from a single responsive web interface.

It integrates real-time flight data from the TripAdvisor API and uses React + Tailwind CSS for a sleek, fast, and interactive user experience.

Users can:

✈️ Search and compare flights

🚗 Browse car rental options

🏨 Explore hotels and attractions

🔑 Create accounts with sign-in / register pages

💰 Receive free travel credits for signing up

HTC Booking combines modern UI design, live travel data, and seamless routing to give users a realistic booking experience.



🚀 Live Demo 

https://your-htc-booking-demo-link.vercel.app


🛠️ Tech Stack  

| Category             | Technology                          |
| -------------------- | ------------------------------------- |
| Frontend Framework   | React.js (Vite)                       |
| Styling              | Tailwind CSS                          |
| Animation (Optional) | Framer Motion / GSAP                  |
| Routing              | React Router DOM                      |
| Map Integration      | Leaflet.js (React Leaflet)            |
| APIs                 | TripAdvisor Flight API (via RapidAPI) |
| Package Manager      | npm or yarn                           |
| Deployment           | Vercel / Netlify                      |



🌐 APIs Used
1. TripAdvisor Flight API (via RapidAPI)

All live flight and destination data are powered by:

https://tripadvisor16.p.rapidapi.com/api/v1/flights/


Endpoints Used:

searchAirport?query={cityName} → Fetch airports by name (e.g., "London")

getFilters?sourceAirportCode=BOM&destinationAirportCode=DEL&... → Get filter options

searchFlights?sourceAirportCode=BOM&destinationAirportCode=DEL&itineraryType=ONE_WAY... → Get live flight listings

searchFlightsMultiCity?... → Get multi-city flight options



Headers Example:

{
  "x-rapidapi-key": "YOUR_RAPIDAPI_KEY",
  "x-rapidapi-host": "tripadvisor16.p.rapidapi.com"
}


🧠 How It Works

User enters From and To airports (e.g., Lagos → New York).

The app uses the TripAdvisor API to:

Fetch available airports

Search flight listings between selected airports

Results are displayed in a responsive list view and optional map view (Leaflet).

Users can sign in or register, gaining free booking credits.

🎨 UI Features

Dark, travel-inspired theme with blue highlights

Responsive grid layout for flight cards

Smooth animations for transitions

Modern form validation for login/register

Image backgrounds and gradient overlays

Easy navigation between sections (/signin, /register, /car, /places, etc.)

💡 Future Improvements

🔒 Firebase or Supabase Authentication

💳 Booking payments (Stripe or Paystack)

🌎 Multi-language support

🧭 Live maps for flight paths

🧳 User dashboard with booking history




📄 License

This project is licensed under the MIT License — feel free to use and modify it as long as you give credit.

🧑‍💻 Author

Timi Maliki

Frontend Developer | React & GSAP Specialist

📧 Email - malikitimi@gmail.com

💼 LinkedIn - https://www.linkedin.com/in/timimaliki/


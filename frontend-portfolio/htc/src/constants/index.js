const navLinks = [
    {
       id: "book",
       title: "Booking",
    },
    {
       id: "about",
       title: "About Us",
    },
    {
       id: "work",
       title: "Freedom",
    },
    {
       id: "contact",
       title: "Contact",
    },
   ];
   
  // Most Popular Services
const serviceLists = [
   {
     name: "Car Rentals",
     country: "US",
     detail: "Wide range of cars for daily & weekly hire",
     price: "From $25/day",
   },
   {
     name: "Tourist Driver",
     country: "US",
     detail: "Professional drivers for city & intercity tours",
     price: "From $50/day",
   },
   {
     name: "Hotels Booking",
     country: "Global",
     detail: "Affordable stays across top cities",
     price: "From $30/night",
   },
   {
     name: "Vacation Homes",
     country: "Global",
     detail: "Luxury & budget vacation homes",
     price: "From $70/night",
   },
 ];
 
 
 const extraServiceLists = [
   {
     name: "Flight Tickets",
     country: "Global",
     detail: "Domestic & international flights",
     price: "From $100",
   },
   {
     name: "Cinemas Ticket Booking",
     country: "US",
     detail: "Book tickets for latest movies",
     price: "From $5",
   },
   {
     name: "Waterfall Houses",
     country: "Tourist Spots",
     detail: "Unique natural stay experiences",
     price: "From $120/night",
   },
   {
     name: "Guest Houses",
     country: "Local & Abroad",
     detail: "Budget-friendly private stays",
     price: "From $20/night",
   },
 ];
 
   
   const profileLists = [
    {
       imgPath: "/images/profile1.png",
    },
    {
       imgPath: "/images/profile2.png",
    },
    {
       imgPath: "/images/profile3.png",
    },
    {
       imgPath: "/images/profile4.png",
    },
   ];
   
   const featureLists = [
      "Easy online cinema ticket booking",
      "Discover the best theatres near you",
      "Exclusive movie premieres & screenings",
      "Affordable tickets with premium comfort",
    ];
    
    const goodLists = [
      "Handpicked cinemas with top ratings",
      "Best-in-class sound & visuals",
      "Luxurious seating & VIP options",
      "Snacks and drinks delivered to your seat",
    ];
    
    
   
   const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
       phone: "(555) 987-6543",
       email: "hello@jsmcocktail.com",
    },
   };
   
   const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
   ];
   
   const socials = [
    {
       name: "Instagram",
       icon: "../src/images/insta.png",
       url: "#",
    },
    {
       name: "X (Twitter)",
       icon: "../src/images/x.png",
       url: "#",
    },
    {
       name: "Facebook",
       icon: "../src/images/fb.png",
       url: "#",
    },
   ];
   
   const allCocktails = [
    {
       id: 1,
       name: "Available Flight Tickets",
       image: "../src/images/aeroplane-147495_640.png",
       title: "Simple Ingredients, Bold Flavor",
       description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
       id: 2,
       name: "An Affordable Luxurious Hotel",
       image: "../src/images/apartment-48821_640.png",
       title: "A Zesty Classic That Never Fails",
       description:
        "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
    },
    {
       id: 3,
       name: "Your Destination Driver",
       image: "../src/images/taxi-47204_640.png",
       title: "Simple Ingredients, Bold Flavor",
       description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
       id: 4,
       name: "Breath Taking Water Fall",
       image: "../src/images/waterfall-310140_640.png",
       title: "Crafted With Care, Poured With Love",
       description:
        "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
    },
   ];
   
   export {
    navLinks,
    serviceLists,
    extraServiceLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allCocktails,
   };
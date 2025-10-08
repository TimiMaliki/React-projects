import paris from "../../../../images/fashion/paris.jpg"
import japan from "../../../../images/fashion/tokyo.webp"

export const data = [
  {
    "status": "ok",
    "totalResults": 2,
    "articles": [
      {
        "author": "Sophia Lane",
        "title": "Paris Fashion Week 2025: Sustainability Takes Center Stage",
        "description": "This year's Paris Fashion Week dazzled with eco-conscious designs from top global fashion houses.",
        "content": "Designers from around the world showcased collections focused on recycled materials, plant-based dyes, and slow fashion principles. Stella McCartney and Balenciaga led the way with innovative styles that blended luxury and sustainability.",
        "url": "https://fashionnews.example.com/paris-fashion-week-2025",
        "urlToImage":`${paris}`,
        "publishedAt": "2025-06-12T08:00:00Z",
        "source": {
          "name": "Fashion Daily",
          "id": "fd"
        }
      },
      {
        "author": "Leo Yamamoto",
        "title": "Tokyo Street Style Influences Global Runway Trends",
        "description": "Bold patterns and oversized silhouettes from Tokyo streets are inspiring designers worldwide.",
        "content": "Tokyo’s vibrant fashion scene continues to leave its mark on international catwalks. Influencers and emerging labels are bringing streetwear aesthetics to luxury fashion, blurring the lines between casual and couture.",
        "url": "https://fashionnews.example.com/tokyo-street-style-global",
        "urlToImage":`${japan}`,
        "publishedAt": "2025-06-11T14:30:00Z",
        "source": {
          "name": "Global Style Watch",
          "id": "gsw"
        }
      }
    ]
  }
  
] 
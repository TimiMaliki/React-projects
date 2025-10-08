import quantum from "../../../../images/tech/quantum.jpeg"
import indian from "../../../../images/tech/indianCities.jpeg"
import mars from "../../../../images/tech/mars.jpeg"
import kenya from "../../../../images/tech/kenya.jpeg"
export const data = [
    {
        "status": "ok",
        "totalResults": 4,
        "articles": [
          {
            "author": "Ava Lin",
            "title": "Quantum Internet Breakthrough: Europe Establishes First Secure Node",
            "description": "Scientists in Switzerland activate the world’s first fully operational node of a quantum internet.",
            "content": "The European Union, in collaboration with top research institutions, launched the first secure quantum internet node. Using entangled photons, the node promises ultra-secure communications resistant to cyber threats.",
            "url": "https://news.example.com/quantum-internet-eu",
            "urlToImage": `${quantum}`,
            "publishedAt": "2025-06-12T10:00:00Z",
            "source": {
              "name": "Tech Horizon",
              "id": "tech-hz"
            }
          },
          {
            "author": "Raj Mehta",
            "title": "India Launches First AI-Powered Smart City in Gujarat",
            "description": "The futuristic city integrates AI in transport, governance, and environmental monitoring.",
            "content": "The Indian government unveiled Aadhvan City, a smart city built entirely with AI-assisted infrastructure. Features include autonomous public transport, predictive crime analytics, and AI-managed water recycling systems.",
            "url": "https://news.example.com/india-smart-city",
            "urlToImage": `${indian}`,
            "publishedAt": "2025-06-11T16:45:00Z",
            "source": {
              "name": "Global Innovation Times",
              "id": "git"
            }
          },
          {
            "author": "Isabella Romero",
            "title": "SpaceX Unveils Interplanetary Travel Capsule for Mars Colonies",
            "description": "Elon Musk reveals an updated Starship capsule designed for long-term human travel to Mars.",
            "content": "At a global space summit, SpaceX presented a prototype capsule equipped with artificial gravity, radiation shielding, and autonomous life support systems—designed to transport up to 30 colonists to Mars.",
            "url": "https://news.example.com/spacex-mars-capsule",
            "urlToImage": `${mars}`,
            "publishedAt": "2025-06-10T14:00:00Z",
            "source": {
              "name": "FutureSpace Journal",
              "id": "fsj"
            }
          },
          {
            "author": "Liam Okoye",
            "title": "Africa's First Humanoid Robotics Lab Launches in Nairobi",
            "description": "Kenya leads the continent with its cutting-edge AI robotics research and humanoid development.",
            "content": "The Nairobi Robotics Institute unveiled their first AI-powered humanoid robot capable of multilingual communication, cultural interaction, and real-time translation—aimed at education and health support roles.",
            "url": "https://news.example.com/kenya-robotics-lab",
            "urlToImage": `${kenya}`,
            "publishedAt": "2025-06-09T08:30:00Z",
            "source": {
              "name": "AI World News",
              "id": "aiwn"
            }
          }
        ]
      }

    ]
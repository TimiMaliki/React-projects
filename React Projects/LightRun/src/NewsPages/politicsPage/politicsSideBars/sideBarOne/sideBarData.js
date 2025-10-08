import senate from "../../../../images/politics/marco.jpg"
import president from "../../../../images/politics/trump.jpeg"
import supremeCourt from "../../../../images/politics/supremeCourt.avif"
import polls from "../../../../images/politics/polls.png"

export const data = [
    {
        "status": "ok",
        "totalResults": 4,
        "articles": [
          {
            "author": "Jane Doe",
            "title": "Senate Approves New Budget Deal Amid Tensions",
            "description": "The Senate has passed a controversial budget bill after days of heated debate between lawmakers.",
            "content": "In a dramatic late-night vote, the U.S. Senate approved a new $1.2 trillion budget plan aimed at preventing a government shutdown. The bill includes significant funding for infrastructure and defense, but was met with criticism from fiscal conservatives.",
            "url": "https://news.example.com/senate-budget-deal",
            "urlToImage": `${senate}`,
            "publishedAt": "2025-06-12T09:00:00Z",
            "source": {
              "name": "Example News Network",
              "id": "enn"
            }
          },
          {
            "author": "John Smith",
            "title": "President Addresses Nation on Foreign Policy Shifts",
            "description": "The President delivered a national address outlining a new direction for U.S. foreign policy.",
            "content": "In a speech from the Oval Office, the President emphasized diplomacy and multilateral cooperation, signaling a departure from prior unilateral strategies. The announcement received mixed reactions from global allies.",
            "url": "https://news.example.com/president-foreign-policy",
            "urlToImage": `${president}`,
            "publishedAt": "2025-06-11T19:30:00Z",
            "source": {
              "name": "Daily Political",
              "id": "dp"
            }
          },
          {
            "author": "Emily Zhang",
            "title": "Supreme Court Hears Landmark Voting Rights Case",
            "description": "The U.S. Supreme Court began hearing oral arguments in a case that could reshape voting laws nationwide.",
            "content": "The case, which challenges a new state law requiring additional voter ID verification, has drawn nationwide attention. Civil rights groups argue it disenfranchises minority voters, while supporters claim it ensures election integrity.",
            "url": "https://news.example.com/voting-rights-case",
            "urlToImage": `${supremeCourt}`,
            "publishedAt": "2025-06-10T14:15:00Z",
            "source": {
              "name": "Justice Daily",
              "id": "jd"
            }
          },
          {
            "author": "Carlos Mendoza",
            "title": "New Poll Shows Decline in Congressional Approval Ratings",
            "description": "A recent survey indicates that public approval of Congress has dropped to its lowest point in five years.",
            "content": "The nationwide poll conducted by the Political Insight Group shows only 18% of respondents approve of Congress’s performance, citing gridlock, partisan bickering, and lack of progress on key issues.",
            "url": "https://news.example.com/congress-approval-poll",
            "urlToImage": `${polls}`,
            "publishedAt": "2025-06-09T11:45:00Z",
            "source": {
              "name": "Civic Report",
              "id": "cr"
            }
          }
        ]
      }
      
] 
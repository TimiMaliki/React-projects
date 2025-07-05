import T1 from "../images/Team/t1.jpg";
import T2 from "../images/Team/t2.jpg";
import T3 from "../images/Team/t3.jpg";
import T4 from "../images/Team/t4.jpg";

const Team = () => {
    return ( 
        <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-red-500">Team</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              The creative minds behind your digital success
            </p>
          </div>
      
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: T1,
                bio: "15+ years in web development. Passionate about creating digital experiences that make an impact.",
                socials: {
                  linkedin: "#",
                  twitter: "#",
                  threads: "#",
                  instagram: "#",
                },
              },
              {
                name: "Sarah Chen",
                role: "Creative Director",
                image: T2,
                bio: "Design expert with a focus on user psychology and conversion optimization.",
                socials: {
                  linkedin: "#",
                  twitter: "#",
                  threads: "#",
                  instagram: "#",
                },
              },
              {
                name: "Miguel Rodriguez",
                role: "Lead Developer",
                image: T3,
                bio: "Full-stack wizard who turns complex ideas into flawless code.",
                socials: {
                  linkedin: "#",
                  twitter: "#",
                  threads: "#",
                  instagram: "#",
                },
              },
              {
                name: "Priya Patel",
                role: "Client Success",
                image: T4,
                bio: "Your advocate, ensuring every project exceeds expectations.",
                socials: {
                  linkedin: "#",
                  twitter: "#",
                  threads: "#",
                  instagram: "#",
                },
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="h-[400px] w-full relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-red-400 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{member.bio}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href={member.socials.linkedin} className="text-gray-500 hover:text-red-600" aria-label="LinkedIn">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href={member.socials.twitter} className="text-gray-500 hover:text-red-600" aria-label="Twitter">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href={member.socials.threads} className="text-gray-500 hover:text-red-600" aria-label="Threads">
                      <i className="fa-brands fa-threads text-xl"></i>
                    </a>
                    <a href={member.socials.instagram} className="text-gray-500 hover:text-red-600" aria-label="Instagram">
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
     );
}
 
export default Team;
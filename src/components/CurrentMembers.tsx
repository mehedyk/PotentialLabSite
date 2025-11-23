import { Mail, ExternalLink } from "lucide-react";

const advisors = [
  {
    name: "Tama Fouzder",
    role: "Advisor",
    image: "https://i.postimg.cc/5t3gm0Nz/Tama-Fouzder.jpg",
    link: "https://faculty.daffodilvarsity.edu.bd/profile/eee/tamafouzder.html",
  },
  {
    name: "Aanan Afsana Azad",
    role: "Advisor",
    image: "https://i.postimg.cc/GtbVt5K5/Anan-ma-am.jpg",
    link: "#",
  },
];

const collaborators = [
  {
    name: "Tama Fouzder",
    role: "Collaborator",
    dept: "Department of EEE, DIU",
    image: "https://i.postimg.cc/5t3gm0Nz/Tama-Fouzder.jpg",
  },
  {
    name: "Aanan Afsana Azad",
    role: "Collaborator",
    dept: "Department of EEE, DIU",
    image: "https://i.postimg.cc/GtbVt5K5/Anan-ma-am.jpg",
  },
  {
    name: "Sudha Bhattacharjee",
    role: "Collaborator",
    dept: "Department of EEE, DIU",
    image: "https://i.postimg.cc/9XTR3kZ7/sudha-bhattacharjee.jpg",
  },
];

const researchTeam = [
  {
    name: "Anik Chawdhury",
    role: "Undergraduate Researcher",
    image: "https://i.postimg.cc/RhsV1wjz/Anik-Chawdhury.jpg",
  },
  {
    name: "Pallab Biswas",
    role: "Undergraduate Researcher",
    image: "https://i.postimg.cc/43D8dMd2/Pallab-Biswas.jpg",
  },
  {
    name: "Arafat Islam",
    role: "Undergraduate Researcher",
    image: "https://i.postimg.cc/cJgPmRyf/Arafat-Islam.jpg",
  },
  {
    name: "Dwaipayan Dip",
    role: "Undergraduate Researcher",
    image: "https://i.postimg.cc/7Zbq4CjZ/Dip-Chandra-Ray.jpg",
  },
  {
    name: "Shaon Mondal",
    role: "Undergraduate Researcher",
    image: "https://i.postimg.cc/gcxrhJ0L/Shaon-Mondal-jpg.png",
  },
];

export const CurrentMembers = () => {
  return (
    <section className="mt-16 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-primary mb-4 relative inline-block pb-4">
            Current Members
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground">Our Active Research Community</p>
        </div>

        {/* Advisors */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-primary mb-8 text-center">Advisors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                />
                <h4 className="text-2xl font-semibold text-primary mb-2">{advisor.name}</h4>
                <p className="text-secondary font-medium mb-4">{advisor.role}</p>
                {advisor.link !== "#" && (
                  <a
                    href={advisor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Profile</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Collaborators */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-primary mb-8 text-center">Collaborators</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {collaborators.map((collab) => (
              <div
                key={collab.name}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border-l-4 border-gold hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <img
                  src={collab.image}
                  alt={collab.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
                />
                <h4 className="text-xl font-semibold text-primary mb-1">{collab.name}</h4>
                <p className="text-secondary font-medium text-sm mb-2">{collab.role}</p>
                <p className="text-muted-foreground text-sm">{collab.dept}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Team */}
        <div>
          <h3 className="text-3xl font-serif text-primary mb-8 text-center">Undergraduate Research Team</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {researchTeam.map((member) => (
              <div
                key={member.name}
                className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-3 border-white shadow-md"
                />
                <h4 className="text-lg font-semibold text-primary mb-1">{member.name}</h4>
                <p className="text-secondary text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

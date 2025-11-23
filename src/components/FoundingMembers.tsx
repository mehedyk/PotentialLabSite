export const FoundingMembers = () => {
  const foundingMembers = [
    {
      name: "Sudipto Pramanik",
      role: "Lab Director & Founder",
      dept: "Department of EEE, DIU",
      image: "https://i.postimg.cc/vmYVkbZF/1713902309596.jpg",
      description: "Established the lab in Fall 2024 with a vision to advance AI and ML research at DIU",
    },
  ];

  return (
    <section className="mb-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-primary mb-4 relative inline-block pb-4">
            Founding Members
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gold to-accent rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Pioneers Who Established the Lab
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {foundingMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-r from-gold to-secondary h-2" />
              <div className="p-10 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-6 border-white shadow-lg"
                />
                <h3 className="text-3xl font-serif text-primary mb-2">{member.name}</h3>
                <p className="text-xl text-gold font-semibold mb-2">{member.role}</p>
                <p className="text-secondary mb-6">{member.dept}</p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

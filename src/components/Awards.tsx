const achievements = [
  {
    year: "2025",
    title: "Supervised 1st Runners-up Team, DoR Research Poster Presentation 2025",
    description: "Guided undergraduate team to 1st Runners-up at DIU Division of Research Poster Presentation 2025.",
  },
  {
    year: "2025",
    title: "Coordinated Fire Detection System Installation – Knowledge Tower",
    description: "Led BDT 6M project for advanced fire safety system across 12-storey academic building.",
  },
  {
    year: "2025",
    title: "Department Coordinator, Agent X: AI Prompting Competition",
    description: "Facilitated student participation in Netcom Learning & Microsoft AI competition.",
  },
  {
    year: "2024",
    title: "Speaker, \"Intro to Machine Learning: A Beginner Step\"",
    description: "Delivered workshop for IEEE IAS DIU SB and WIE Affinity Group.",
  },
  {
    year: "2024",
    title: "Finalist, Sustainable Energy Innovation Challenge (Bikiron)",
    description: "Team ACES finalist in Energy-Smart Buildings category by SREDA.",
  },
  {
    year: "2019–2024",
    title: "University Merit Scholarship & Dean's List Award",
    description: "Top 12% of EEE cohort at BUET for consistent academic excellence.",
  },
];

export const Awards = () => {
  return (
    <section id="awards" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-primary mb-4 relative inline-block pb-4">
            Awards & Achievements
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gold to-accent rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Milestones and Recognitions
          </p>
        </div>

        <div className="relative pl-12">
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-accent rounded-full" />
          
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative mb-12 bg-gradient-to-br from-primary/5 to-gold/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="absolute -left-12 top-2 w-4 h-4 rounded-full bg-gold border-4 border-white shadow-md" />
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:min-w-[80px]">
                  <span className="text-xl font-bold text-gold">{achievement.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-3 leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

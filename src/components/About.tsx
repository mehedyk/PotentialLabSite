export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-light-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-primary mb-4 relative inline-block pb-4">
            About the Lab
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            A Hub for Innovation and Research Excellence
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 mb-12">
          <h3 className="text-3xl font-serif text-primary mb-6">
            EEE & AI Research Lab
          </h3>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            The EEE & AI Research Lab at Daffodil International University was established in Fall 2024 
            with a vision to advance cutting-edge research in artificial intelligence, machine learning, 
            and electrical engineering. Our lab focuses on solving real-world problems through innovative 
            research in deep learning, natural language processing, signal processing, and explainable AI.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            We study a range of core AI and ML problems including deep neural networks, large language models, 
            reinforcement learning, and computer vision, as well as emerging challenges in signal processing 
            and interpretable machine learning. Our research is highly collaborative, working with researchers 
            across the globe including computer scientists, data scientists, and domain experts.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-l-4 border-primary">
              <h4 className="text-xl font-semibold text-primary mb-4">Who Can Join</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Undergraduate and graduate students from EEE, CSE, and related disciplines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Researchers passionate about AI, ML, and signal processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Faculty members interested in collaborative research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Industry professionals seeking research partnerships</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gold/5 to-accent/5 rounded-xl p-6 border-l-4 border-gold">
              <h4 className="text-xl font-semibold text-primary mb-4">What We Offer</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Hands-on experience with state-of-the-art AI/ML technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Opportunities to publish in top-tier conferences and journals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Mentorship from experienced faculty and researchers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Collaborative environment with access to computational resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-xl p-10 text-white text-center">
          <h3 className="text-3xl font-serif mb-4">Lab Director</h3>
          <h4 className="text-2xl font-semibold mb-2">Sudipto Pramanik</h4>
          <p className="text-lg opacity-90">
            Lecturer, Department of Electrical & Electronic Engineering
          </p>
          <p className="text-base opacity-90 mt-2">
            MSc in EEE (Communication Signal Processing), BUET
          </p>
        </div>
      </div>
    </section>
  );
};

import { ExternalLink } from "lucide-react";

const publications = [
  {
    title: "An Automatic Spam-Aware Email Generation Scheme Based on Efficient Fine-Tuning of Large Language Models",
    status: "Under Review",
    journal: "IEEE Transactions on Computational Social Systems (IEEE TCSS)",
    description: "Fine-tuned GPT-2 and Mistral-7B using LoRA and SFT to generate professional emails that evade spam filters. Achieved superior performance in context, safety, and spam avoidance.",
  },
  {
    title: "Leveraging Direct Preference Optimization (DPO) for Enhanced Abstractive Summarization in Bangla News Headline Generation",
    status: "Under Review",
    journal: "IEEE Access",
    description: "Applied DPO on LLaMA-3.2-1B using Kaggle Bengali dataset. Generated concise, human-like headlines with strong contextual alignment.",
  },
  {
    title: "A Simple Time Domain Algorithm for the Detection of Ventricular Fibrillation in Electrocardiogram",
    status: "Published",
    journal: "Signal, Image and Video Processing (Springer)",
    description: "TCSC algorithm on MIT-BIH & CU databases. Achieved 80% sensitivity, 83% specificity. Real-time clinical applicability.",
  },
  {
    title: "Photoplethysmograph (PPG) Signal Analysis Using Machine Learning for Atrial Fibrillation Detection",
    status: "Undergraduate Thesis",
    journal: "BUET",
    description: "ML-based PPG analysis for AF detection. Feature extraction and classification using SVM, RF, and LSTM.",
  },
];

export const ResearchWorks = () => {
  return (
    <section id="research" className="py-24 px-6 bg-light-bg">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-primary mb-4 relative inline-block pb-4">
            Research Publications
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Publications, Projects & Contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-gold hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent" />
              <h3 className="text-xl font-semibold text-primary mb-4 leading-snug">
                {pub.title}
              </h3>
              <div className="mb-4">
                <span
                  className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                    pub.status === "Published"
                      ? "bg-green-100 text-green-700"
                      : pub.status === "Under Review"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {pub.status}
                </span>
                <p className="text-secondary font-medium mt-2">{pub.journal}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">{pub.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://scholar.google.com/citations?user=KR_52zUAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:bg-secondary transition-all hover:-translate-y-1"
          >
            <ExternalLink size={20} />
            View All Publications
          </a>
        </div>
      </div>
    </section>
  );
};

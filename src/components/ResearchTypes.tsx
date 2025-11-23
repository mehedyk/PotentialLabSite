import { Brain, Network, Cpu, Activity, Eye } from "lucide-react";

const researchAreas = [
  {
    icon: Brain,
    title: "Large Language Models",
    description: "Fine-tuning and deploying LLMs like GPT, LLaMA, and Mistral for domain-specific applications including email generation, text summarization, and Bengali NLP.",
  },
  {
    icon: Network,
    title: "Deep Learning",
    description: "Advanced neural network architectures for computer vision, natural language understanding, and multimodal AI systems with applications in healthcare and automation.",
  },
  {
    icon: Cpu,
    title: "Reinforcement Learning",
    description: "Developing intelligent agents using RL techniques including Direct Preference Optimization (DPO) and policy gradient methods for sequential decision-making tasks.",
  },
  {
    icon: Activity,
    title: "Signal Processing",
    description: "Digital signal processing for biomedical applications, ECG/PPG analysis, arrhythmia detection, and real-time health monitoring systems.",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    description: "Building interpretable machine learning models with transparency and trust, focusing on understanding AI decision-making processes and model behavior.",
  },
];

export const ResearchTypes = () => {
  return (
    <section id="research-types" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-primary mb-4 relative inline-block pb-4">
            Research Areas
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our lab focuses on cutting-edge research across multiple domains of artificial intelligence and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-lg border-t-4 border-secondary hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

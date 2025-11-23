import { Github, FileText, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "An Automatic Spam-Aware Email Generation Scheme",
    description: "Fine-tuned GPT-2 & Mistral-7B with LoRA and SFT to generate professional, spam-filter-safe emails. Outperforms base models in context and safety.",
    supervisor: "Dr. Shaikh Anowarul Fattah, BUET",
    tools: "GPT-2, Mistral-7B, LoRA, Hugging Face",
    links: [
      { label: "GitHub", url: "https://github.com/sudiptopramanik/spam-aware-email-llm", icon: Github },
      { label: "Demo", url: "https://huggingface.co/spaces/sudipto/spam-aware-demo", icon: ExternalLink },
    ],
  },
  {
    title: "Bangla News Headline Generation using DPO",
    description: "Fine-tuned LLaMA-3.2-1B using DPO on Kaggle Bengali summarization data. Achieved concise, human-like headlines.",
    supervisor: "Dr. Mohammad Ariful Haque, BUET",
    tools: "LLaMA-3.2-1B, DPO, LoRA, Hugging Face",
    links: [
      { label: "GitHub", url: "https://github.com/sudiptopramanik/bangla-dpo-headline", icon: Github },
    ],
  },
  {
    title: "SkyWatch: Drone Surveillance for Disaster Management",
    description: "Real-time drone system with remote flight, geospatial mapping, and analytics for disaster response.",
    links: [
      { label: "GitHub", url: "https://github.com/sudiptopramanik/skywatch-drone", icon: Github },
    ],
  },
  {
    title: "Floating Garbage Cleaning Robot",
    description: "Bluetooth-controlled robot with Arduino, servo motors, and PVC conveyor. Future: autonomy + CV.",
    links: [
      { label: "GitHub", url: "https://github.com/sudiptopramanik/garbage-cleaner-robot", icon: Github },
    ],
  },
  {
    title: "Ventricular Fibrillation Detection in ECG",
    description: "TCSC algorithm on MIT-BIH & CU databases. 80% sensitivity, 83% specificity. Real-time use.",
    links: [
      { label: "GitHub", url: "https://github.com/sudiptopramanik/vf-detection", icon: Github },
      { label: "Paper", url: "https://link.springer.com/article/10.1007/s11760-020-01807-2", icon: ExternalLink },
    ],
  },
  {
    title: "Green Vigilance: Plant Health Monitor",
    description: "IoT soil moisture sensor with auto-watering, sound alerts, and HC-05 mobile app.",
    links: [
      { label: "GitHub", url: "https://github.com/sudiptopramanik/green-vigilance", icon: Github },
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-primary mb-4 relative inline-block pb-4">
            Notable Projects
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Graduate & Undergraduate Research Initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-gold hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent" />
              <h3 className="text-xl font-semibold text-primary mb-4 leading-snug">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              {project.supervisor && (
                <p className="text-sm text-secondary mb-2">
                  <strong>Supervisor:</strong> {project.supervisor}
                </p>
              )}
              {project.tools && (
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Tools:</strong> {project.tools}
                </p>
              )}
              <div className="flex flex-wrap gap-3 mt-4">
                {project.links.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium text-sm"
                    >
                      <Icon size={16} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/sudiptopramanik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:bg-secondary transition-all hover:-translate-y-1"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

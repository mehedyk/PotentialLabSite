export const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary/96 to-[#0f5a8a]/92 text-white py-32 px-6 text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10,61,98,0.96) 0%, rgba(15,90,138,0.92) 100%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 500"><rect fill="%230f5a8a" width="1400" height="500"/><path fill="%231e90ff" opacity="0.15" d="M0,250 Q350,150 700,250 T1400,250 L1400,500 L0,500 Z"/></svg>')`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
          Welcome to Artificial Intelligence Lab
        </h2>
        <p className="text-xl mb-12 opacity-95 font-light max-w-3xl mx-auto">
          Advancing cutting-edge research in deep learning, natural language processing, and signal processing at Daffodil International University
        </p>
        <p className="text-lg mb-8 text-gold font-semibold">
          Established: Fall 2024
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="#research"
            className="px-10 py-4 rounded-full bg-gold text-primary font-semibold transition-all hover:bg-transparent hover:text-gold border-2 border-gold shadow-lg hover:shadow-gold/30 hover:-translate-y-1"
          >
            Explore Research
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full bg-transparent text-white font-semibold transition-all hover:bg-white hover:text-primary border-2 border-white shadow-lg hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

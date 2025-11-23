export const Gallery = () => {
  const images = [
    "https://nlp.daffodilvarsity.edu.bd/admin-assets/assets/uploaded-images/Events/Images/1915198844.jpg",
    "https://nlp.daffodilvarsity.edu.bd/admin-assets/assets/uploaded-images/Events/Images/1832117099.jpg",
    "https://nlp.daffodilvarsity.edu.bd/admin-assets/assets/uploaded-images/Events/Images/736120562.jpg",
    "https://nlp.daffodilvarsity.edu.bd/admin-assets/assets/uploaded-images/Events/Images/1339246755.jpg",
    "https://nlp.daffodilvarsity.edu.bd/admin-assets/assets/uploaded-images/Events/Images/623453508.jpg",
    "https://nlp.daffodilvarsity.edu.bd/admin-assets/assets/uploaded-images/Events/Images/894572038.jpg",
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-light-bg">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-primary mb-4 relative inline-block pb-4">
            Gallery
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Moments from Our Lab Activities and Events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <img
                src={img}
                alt={`Lab activity ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

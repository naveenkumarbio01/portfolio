import React from 'react';

const mediaData = [
  {
    title: "Understanding Blockchain and ERP Integration: Unlocking New Horizons in Business Operations",
    image: "https://techbullion.com/wp-content/uploads/2024/12/ERP-Integration-with-Blockchain-Revolutionizing-Business-Operations-1024x512-1.jpg",
    link: "https://techbullion.com/understanding-blockchain-and-erp-integration-unlocking-new-horizons-in-business-operations/",
    alt: "Blockchain and ERP Integration"
  },
  // ➕ You can easily add more cards here
  // {
  //   title: "Another Media Title",
  //   image: "https://example.com/image.jpg",
  //   link: "https://example.com/article",
  //   alt: "Another Media"
  // }
];

export default function Media() {
  return (
    <section id="media" className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-widest text-blue-400">
          Media Coverage
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mediaData.map((media, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <a href={media.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={media.image}
                  alt={media.alt}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <p className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors">
                    {media.title}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

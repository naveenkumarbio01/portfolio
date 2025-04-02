import React from 'react';

const booksData = [
  {
    title: "Intelligent Integration: Leveraging AI for Seamless ERP & CRM Connectivity",
    image: "https://m.media-amazon.com/images/I/8120Qr2HICL._SY522_.jpg",
    link: "https://www.amazon.com/dp/B0DPSGFVQY",
    alt: "AI for ERP"
  },
  //  Add more book entries here
  // {
  //   title: "Another Book Title",
  //   image: "https://example.com/book-cover.jpg",
  //   link: "https://example.com/book",
  //   alt: "Book Cover"
  // }
];

export default function Books() {
  return (
    <section id="book" className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-widest text-blue-400">
          Books
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {booksData.map((book, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={book.image}
                  alt={book.alt}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <p className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors">
                    {book.title}
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

import React from 'react';

const publicationsData = [
  {
    title: "Anomaly Detection in ERP Systems Using AI & Machine Learning",
    image: "https://www.xenonstack.com/hs-fs/hubfs/anomaly-detection-using-machine-learning-and-deep-learning.jpg",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-0k8l9kAAAAJ&authuser=1&citation_for_view=-0k8l9kAAAAJ:Y0pCki6q_DkC",
    alt: "Anomaly Detection"
  },
  {
    title: "IoT-based Machine Learning for Diabetes Prediction",
    image: "https://cdn.analyticsvidhya.com/wp-content/uploads/2022/01/9405011-672c56a5b69ba-1.webp",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-0k8l9kAAAAJ&authuser=1&citation_for_view=-0k8l9kAAAAJ:Tyk-4Ss8FVUC",
    alt: "Diabetes Prediction"
  },
  {
    title: "Predicting Salesforce Data with Machine Learning",
    image: "https://atrium.ai/wp-content/uploads/2021/06/integrated_sol_tile.jpg",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-0k8l9kAAAAJ&authuser=1&citation_for_view=-0k8l9kAAAAJ:u-x6o8ySG0sC",
    alt: "Salesforce ML"
  },
  {
    title: "Energy-Efficient Load Balancing in Smart Buildings",
    image: "https://images-provider.frontiersin.org/api/ipx/w=370&f=webp/https://www.frontiersin.org/files/Articles/852092/fenrg-10-852092-HTML/image_m/fenrg-10-852092-g001.jpg",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-0k8l9kAAAAJ&authuser=1&citation_for_view=-0k8l9kAAAAJ:IjCSPb-OGe4C",
    alt: "Energy Load Balancing"
  },
  {
    title: "AI & IoT-Driven CRM for Business Management",
    image: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/11/02034836/AI-and-ML-in-data-integration-1.svg",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-0k8l9kAAAAJ&authuser=1&citation_for_view=-0k8l9kAAAAJ:qjMakFHDy7sC",
    alt: "Data-Driven CRM"
  }
  // ➕ You can easily add more cards here
  // {
  //   title: "AI & IoT-Driven CRM for Business Management",
  // image: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/11/02034836/ AI-and-ML-in-data-integration-1.svg",
  // link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-0k8l9kAAAAJ&authuser=1&citation_for_view=-0k8l9kAAAAJ:qjMakFHDy7sC",
  // alt: "Data-Driven CRM"
  // }
];

export default function Publications() {
  return (
    <section id="publications" className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-widest text-blue-400">
          PUBLICATIONS
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {publicationsData.map((pub, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={pub.image}
                  alt={pub.alt}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <p className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors">
                    {pub.title}
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

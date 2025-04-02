import React from 'react';

const blogData = [
  {
    title: "The Rise of Quantum Computing: What You Need to Know",
    image: "https://miro.medium.com/v2/resize:fit:1050/1*VweJuj7drkYkoR3bnj_v2Q.png",
    link: "https://medium.com/@naveengarg1/the-rise-of-quantum-computing-what-you-need-to-know-c6177bdc1669",
    alt: "Quantum Computing"
  },
  {
    title: "How Blockchain Technology is Revolutionizing Finance",
    image: "https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480192.jpg?t=st=1741083788~exp=1741087388~hmac=c5257b0efff27e6603a115492a30d7dbb5376fd748dc7b00ae44cd2bd23e6ccb&w=1380",
    link: "https://medium.com/@naveengarg1/how-blockchain-technology-is-revolutionizing-finance-the-future-is-here-a70f9af486dd",
    alt: "Blockchain Revolution"
  },
  {
    title: "Optimizing Salesforce with MuleSoft Integration",
    image: "https://www.awsquality.com/wp-content/uploads/2017/05/Salesforce-and-MuleSoft-Integration-2.jpg",
    link: "https://medium.com/@naveengarg1/optimizing-salesforce-with-mulesoft-seamless-data-integration-strategies-1e411abe609f",
    alt: "Salesforce & MuleSoft"
  },
  {
    title: "Understanding Blockchain and ERP Integration",
    image: "https://blockchain.oodles.io/wp-content/uploads/Blockchain-and-ERP-Integration.jpg",
    link: "https://medium.com/@naveengarg1/understanding-blockchain-and-erp-integration-3e733f9588ea",
    alt: "Blockchain & ERP"
  },
  {
    title: "The Impact of AI on ERP Systems",
    image: "https://existek3-838c.kxcdn.com/wp-content/uploads/2023/12/1-cover-15.webp",
    link: "https://medium.com/@naveengarg1/the-impact-of-ai-on-erp-systems-driving-smarter-business-operations-c20eee4f8ed7",
    alt: "AI & ERP"
  },
  {
    title: "The Rise of Quantum Computing: What You Need to Know",
    image: "https://miro.medium.com/v2/resize:fit:1050/1*VweJuj7drkYkoR3bnj_v2Q.png",
    link: "https://medium.com/@naveengarg1/the-rise-of-quantum-computing-what-you-need-to-know-c6177bdc1669",
    alt: "Quantum Computing"
  }
  // Add blog data here
];

export default function Blogs() {
  return (
    <section id="blogs" className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-widest text-blue-400">
          BLOGS
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={blog.image}
                  alt={blog.alt}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <p className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors">
                    {blog.title}
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

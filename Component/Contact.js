export default function Contact() {
    return (
      <section id="contact" className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32 flex flex-col justify-center items-center h-screen">
        
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-widest text-blue-400">
          CONNECT WITH ME
        </h2>
  
        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/naveengarg1/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-xl shadow-lg flex items-center gap-3 transition-all duration-300"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-8 h-8"/>
            LinkedIn Profile
          </a>
  
          {/* Google Scholar Button */}
          <a
            href="https://scholar.google.com/citations?hl=en&authuser=1&user=-0k8l9kAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg text-xl shadow-lg flex items-center gap-3 transition-all duration-300"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google Scholar" className="w-8 h-8"/>
            Google Scholar
          </a>
  
        </div>
  
      </section>
    );
  }
  
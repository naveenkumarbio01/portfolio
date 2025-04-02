
export default function About() {
  return (
    <div id="about" className="bg-gradient-to-r from-black via-gray-900 to-blue-800 text-white py-16  px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-widest">
          About Me
        </h1>

        {/* Main Container (Flex for Image & Text) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Left Side - Google Drive Image (Fixed for Proper Fit) */}
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 hover:scale-105 transition-transform">
          <img 
             src="https://i.ibb.co/KjcvLPCJ/Naveen-Pic.png" 
             alt="Naveen"
             className="w-full h-full object-cover object-center  ml-2"
         />
          </div>

          {/* Right Side - Text */}
          <div className="flex-1 text-lg leading-relaxed text-gray-300 md:text-left text-center space-y-4">
            <p>
              Naveen Kumar is a renowned technology leader, author, and researcher with over <span className="text-blue-400 font-semibold">23 years of experience</span> at the forefront of AI, ERP, and CRM innovation.
            </p>
            <p>
              Widely recognized for his deep expertise, Naveen has consistently delivered transformative solutions for global enterprises, integrating <span className="text-blue-400 font-semibold">cutting-edge technologies</span> with business strategies to drive scalable, future-ready architectures.
            </p>
            <p>
              His ability to integrate AI-powered solutions with platforms like <span className="text-blue-400 font-semibold">Salesforce & Oracle ERP</span> has empowered organizations to achieve exponential operational efficiency and sustained growth.
            </p>
            <p>
              In addition to his role as an architect, Naveen is a well-known <span className="text-blue-400 font-semibold">author & researcher</span>, having published numerous books and research papers on AI, automation, and digital transformation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

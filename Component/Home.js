import { useEffect, useState } from "react";

export default function Home() {
  const texts = [ "Technology Leader", "AI Enthusiast", "ERP & CRM Expert","Digital Transformation Pioneer", ]; 
  
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 80 : 150;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === texts[index]) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }

      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : texts[index].slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div id="home" className="relative w-full h-[55vh] flex flex-col justify-center items-center text-white text-center" >
    
      <div className="absolute inset-0">
        <img src="https://pics.craiyon.com/2024-02-10/F54xREi7TmaSPBMi94b26A.webp" alt="Background Image" className="w-full h-full object-cover brightness-50" />
      </div>

   
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest">
          Naveen Kumar
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4 h-10"> {displayText} <span className="animate-blink">|</span> </h2>
      </div>
    </div>
  );
}

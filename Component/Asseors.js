export default function Asseors() {
  const certificates = [
    {
      title: "International Conference Certificate",
      fileId: "17yxdbH667nanCYnbL2gOVKX2WYY-mbht",
      link: "https://drive.google.com/file/d/17yxdbH667nanCYnbL2gOVKX2WYY-mbht/view?usp=drivesdk"
    },
    {
      title: "Dubai Conference Certificate",
      fileId: "1jSG1pb1kBW8Pyie11XYvx67Iyjkz4kf5",
      link: "https://drive.google.com/file/d/1jSG1pb1kBW8Pyie11XYvx67Iyjkz4kf5/view?usp=drivesdk"
    },
    {
      title: "Session Chair Certificate ICPIDS 2024",
      fileId: "1talJf7Q8R5GkKiDvC95uoKJr5DzWzzIf",
      link: "https://drive.google.com/file/d/1talJf7Q8R5GkKiDvC95uoKJr5DzWzzIf/view?usp=drivesdk"
    },
    {
      title: "Session Chair Certificate",
      fileId: "1YhZ7zm7okc8qYe4p3hEw6_s9KGr3-x0N",
      link: "https://drive.google.com/file/d/1YhZ7zm7okc8qYe4p3hEw6_s9KGr3-x0N/view?usp=drivesdk"
    },
   // Add more data here
  ];

  return (
    <section id="asseors" className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-widest text-blue-400">
          CERTIFICATES
        </h2>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="text-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-400 hover:underline block mb-2">
                {cert.title}
              </a>
              {/* Embed Google Drive Preview */}
              <iframe
                src={`https://drive.google.com/file/d/${cert.fileId}/preview`}
                className="w-full h-64"
                allow="autoplay"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

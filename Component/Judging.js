export default function Judging() {
  const achievements = [
    
    {
      title: "Judging Certificate - Globee Awards for Business",
      fileId: "1LfpHl25UTGT2wI6MYCqwBxKGZBoEwzXA",
      link: "https://drive.google.com/file/d/1LfpHl25UTGT2wI6MYCqwBxKGZBoEwzXA/view?usp=drivesdk"
    },
    {
      title: "Judging Certificate - Globee Awards for Leadership",
      fileId: "19CDAFgGS4eG2IXcaFLBBCxgOeX59TBqt",
      link: "https://drive.google.com/file/d/19CDAFgGS4eG2IXcaFLBBCxgOeX59TBqt/view?usp=drivesdk"
    },
    {
      title: "Middle East & North Africa Stevie® Awards",
      fileId: "1Nma96hID3w6evlDVl7b3TZg5Q0DHxSFA",
      link: "https://drive.google.com/file/d/1Nma96hID3w6evlDVl7b3TZg5Q0DHxSFA/view?usp=drivesdk"
    },
    {
      title: "Certificate (Mr. Naveen Kumar)",
      fileId: "1CZjlGrYoE5wRj7Jlwns9SdoLIlHHoFTR",
      link: "https://drive.google.com/file/d/1CZjlGrYoE5wRj7Jlwns9SdoLIlHHoFTR/view?usp=drivesdk"
    },
    {
      title: "Key Note Speaker Certificate",
      fileId: "13oMl24W_Nw-WfUqjtK92QTpuqkz4sl5i",
      link: "https://drive.google.com/file/d/13oMl24W_Nw-WfUqjtK92QTpuqkz4sl5i/view?usp=drivesdk"
    },
    // Add more data here
  ];

  return (
    <section id="judging" className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-widest text-blue-400">
          Judging
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-400 hover:underline block mb-2">
                {achievement.title}
              </a>
              {/* Embed Google Drive Preview */}
              <iframe
                src={`https://drive.google.com/file/d/${achievement.fileId}/preview`}
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

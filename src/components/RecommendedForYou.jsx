const RecommendedForYou = () => {
    const projects = [
      { name: 'Pacmodo Backpack', daysLeft: 22, funded: '223%' },
      { name: 'Nude Art', daysLeft: 6, funded: '896%' },
      // Add more projects as per the screenshot
    ];
  
    return (
      <section className="container mx-auto py-8">
        <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white p-4 border rounded">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="text-gray-600">{project.daysLeft} days left</p>
              <p className="text-green-600">{project.funded} funded</p>
            </div>
          ))}
        </div>
      </section>
    );
};

export default RecommendedForYou;
  
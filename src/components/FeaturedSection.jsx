const FeaturedProject = () => {
    return (
      <section className="container mx-auto py-8">
        <div className="text-xl font-bold mb-4">Featured Project</div>
        <div className="flex">
          <img src="your-image-url.jpg" alt="project" className="w-1/2" />
          <div className="ml-8">
            <h3 className="text-2xl font-bold">The Smartest Barista-level Frother</h3>
            <p className="text-gray-600">For all kinds of milk</p>
            <p className="mt-4">Coffee lovers: Now you can make barista-level...</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
              Back this project
            </button>
          </div>
        </div>
      </section>
    );
};

export default FeaturedProject;
  
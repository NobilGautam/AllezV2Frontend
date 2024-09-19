const BlogSection = () => {
    const blogs = [
      { title: 'Introducing the Pre-Launch Editor', description: 'Read more' },
      { title: 'Why Creators are Turning to Crowdfunding', description: 'Read more' },
      // Add more blogs here
    ];
  
    return (
      <section className="container mx-auto py-8">
        <h2 className="text-xl font-bold mb-4">Creator Tips</h2>
        <div className="grid grid-cols-4 gap-6">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded">
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p className="text-blue-600">{blog.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
};

export default BlogSection;
  
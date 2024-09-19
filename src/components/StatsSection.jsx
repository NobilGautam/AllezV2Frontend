const StatsSection = () => {
    return (
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Bring a creative project to life.</h2>
          <div className="flex justify-center gap-12">
            <div>
              <p className="text-4xl font-bold">265,025</p>
              <p className="text-gray-600">projects funded</p>
            </div>
            <div>
              <p className="text-4xl font-bold">$8,239,582,510</p>
              <p className="text-gray-600">towards creative work</p>
            </div>
            <div>
              <p className="text-4xl font-bold">97,374,334</p>
              <p className="text-gray-600">pledges</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default StatsSection;  
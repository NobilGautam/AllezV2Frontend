const Header = () => {
    return (
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-green-600 font-bold text-2xl">KICKSTARTER</div>
          <input
            type="text"
            placeholder="Search projects, creators, and categories"
            className="w-1/2 px-4 py-2 border rounded"
          />
          <div className="flex gap-4">
            <button className="text-gray-600">Start a project</button>
            <button className="text-gray-600">Log in</button>
          </div>
        </div>
      </header>
    );
};

export default Header;
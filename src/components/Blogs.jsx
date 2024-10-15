import React, {useState, useEffect, useRef} from 'react'
import blogImg from '../assets/blog.png'
import clock from '../assets/Clock.png';

const blogs = [
    {
        category: "Nutrition & Health",
        date: "24th August, 2024",
        title: "How Online Training Improves Mental Health & Well-Being",
        img: blogImg
    },
    {
        category: "Nutrition & Health",
        date: "24th August, 2024",
        title: "How Online Training Improves Mental Health & Well-Being",
        img: blogImg
    },
    {
        category: "Nutrition & Health",
        date: "24th August, 2024",
        title: "How Online Training Improves Mental Health & Well-Being",
        img: blogImg
    },
]
const Blogs = () => {
    const containerRef = useRef(null); // Use a reference for the container
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setZoom(true); // Set zoom to true when the component is in view
          } else {
            setZoom(false); // Set zoom to false when the component is out of view
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the container is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <div className='px-[5%] py-10 relative overflow-hidden' ref={containerRef}>
        <div
          className={`absolute w-[700px] h-[700px] bg-[#ed8b8e] rounded-full z-[-10] top-[-350px] left-[-350px] transform transition-transform duration-500 ${
            zoom ? 'scale-100' : 'scale-50'
          }`}
        ></div>
        <h1 className='font-montserrat font-black text-left text-3xl'>DISCOVER, LEARN AND THRIVE WITH <span className='text-[#ca2d2e]'>ALLEZ.</span></h1>
        <h1 className='bg-[#ca2d2e] w-fit px-4 py-1 rounded-md font-montserrat font-semibold text-white mt-4'>Featured Articles</h1>
        <div className='flex gap-6 justify-center mt-8'>
            {blogs.map((item) => (
                <div className='flex flex-col w-[30%] shadow-xl rounded-xl'>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <div className='flex flex-col justify-start p-4'>
                        <div className='flex justify-between mt-4'>
                            <h1 className=' font-montserrat px-2 border-[2px] border-black rounded-full font-semibold text-[0.7rem]'>{item.category}</h1>
                            <div className='flex gap-2'>
                                <img src={clock} alt="" className='h-[17px]'/>
                                <h1 className='font-montserrat font-semibold text-[0.7rem]'>{item.date}</h1>
                            </div>
                        </div>
                        <h1 className='font-montserrat font-bold text-left mt-8'>{item.title}</h1>
                        <button className='font-montserrat font-semibold w-fit text-left mt-8 underline mb-4'>Read Article</button>
                    </div>
                </div>
            ))}
        </div>
        <button className='font-montserrat font-semibold border-[1px] border-black px-4 mt-6 rounded-lg hover:text-[#ca2d2e] hover:border-[#ca2d2e] duration-200'>View All</button>
    </div>
  )
}

export default Blogs
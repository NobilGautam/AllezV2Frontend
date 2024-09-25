import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import the Intersection Observer hook
import competitive from "../assets/timeline2.png";
import result from "../assets/timeline4.png";
import holistic from "../assets/timeline3.png";
import flexible from "../assets/timeline1.png";

const AboutTimeline = () => {
  // Create reusable function to handle animations on inView
  const triggerAnimation = (inView) => {
    return inView ? 'animate-fadeInLeft' : 'opacity-0'; // Apply the animation only when the element is visible
  };

  // Define hooks for each timeline item
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div className="bg-[#1c1b1f] text-white">
      <div className="relative mx-auto flex flex-col">

        {/* Vertical Line */}
        <div className="absolute left-[50%] transform -translate-x-1/2 top-0 bottom-0 w-[23px] bg-gradient-to-b from-[#1a6793] to-[#851e23]"></div>

        {/* Timeline Item 1 */}
        <div className={`flex justify-center items-center mb-[150px] mr-[44.5%] gap-6`}>
          <div className={`w-[80%] text-right ${triggerAnimation(inView1)}`} ref={ref1}>
            <h3 className="text-[40px] font-medium font-montserrat">
              <span className='text-[#851e23]'>Result Oriented</span> Trainings
            </h3>
            <p className="text-sm mt-2 font-montserrat w-[90%] ml-[10%]">
              Expert coaching and personalized guidance accelerate your progress. Our training programs are designed for tangible outcomes, ensuring you reach your athletic milestones swiftly.
            </p>
          </div>
          <div className="z-10">
            <img src={result} alt="Result Oriented" className='w-[150px]' />
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className={`flex justify-center gap-6 items-center mb-[150px] ml-[36.6%]`}>
          <div className="z-10 flex justify-end">
            <img src={competitive} alt="Competitive Edge" className='w-[150px]' />
          </div>
          <div ref={ref2} className={`w-[55%] text-left ${inView2 ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <h3 className="text-[40px] font-medium font-montserrat">
              <span className='text-[#851e23]'>Competitive</span> Edge
            </h3>
            <p className="text-sm mt-2 font-montserrat">
              Gain a winning advantage with our intense training programs designed to push your limits. Learn advanced strategies and mental toughness to excel in competitions.
            </p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className={`flex justify-center items-center mb-[150px] mr-[36.5%] gap-6 `}>
          <div ref={ref3} className={`w-[55%] text-right ${inView3 ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <h3 className="text-[40px] font-medium font-montserrat">
              <span className='text-[#851e23]'>Holistic</span> Development
            </h3>
            <p className="text-sm mt-2 font-montserrat">
              Beyond sports, we focus on character building, discipline, and teamwork, fostering well-rounded individuals with a strong competitive spirit.
            </p>
          </div>
          <div className="z-10">
            <img src={holistic} alt="Holistic Development" className='w-[150px]' />
          </div>
        </div>

        {/* Timeline Item 4 */}
        <div className={`flex justify-center gap-2 items-center mb-[150px] ml-[44.6%] `}>
          <div className="z-10 flex justify-end ">
            <img src={flexible} alt="Flexible Training" className='w-[210px]' />
          </div>
          <div ref={ref4} className={`text-left ${inView4 ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <h3 className="text-[40px] font-medium font-montserrat ">
              <span className='text-[#851e23]'>Flexible Training</span> Options
            </h3>
            <p className="text-sm mt-2 font-montserrat pr-8">
              Balance your passion with your schedule. Choose from a variety of training plans, timings, and formats to fit your lifestyle.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutTimeline;

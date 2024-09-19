import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import basketball from "../assets/ath_basketball.jpeg"

const Athlete = () => {
  const athleteData = [
    {
      id: "1",
      name: "Nobil Gautam",
      gender: "Male",
      sport: "Basketball",
      location: "City, State, Country",
      specialization: "Defender",
      certification: "FSSAI",
      experience: "Player for 2+ years",
      coachingLevel: "8",
      bio: "Deepak Tiwari, an adept cricket coach, inspires and guides aspiring players to excel with his expertise and dedication, fostering a legacy of excellence on the field.",
      img: basketball,
      isFeatured: true,
    }
  ];

  const { id } = useParams();
  const [athlete, setAthlete] = useState(null);

  useEffect(() => {
    const ath = athleteData.find((item) => item.id === id);
    if (ath) {
      setAthlete(ath);
    } else {
      console.error("No athlete found with the given id");
    }
  }, [id]);

  if (!athlete) {
    return <div>Loading athlete data...</div>;
  }

  return (
    <div className='w-full bg-[#1C1B1F] flex justify-between gap-8 px-[5%] py-[5%]'>
      <img src={athlete.img} alt={athlete.name} className='h-[400px] rounded-md'/>
      <div className='w-full flex flex-col items-start text-white'>
        <div className="flex justify-between w-full">
          <h1 className='font-montserrat font-bold text-[3rem]'>{athlete.name}</h1>
          {athlete.isFeatured && (
            <div className='bg-red-600 text-white px-4 py-2 rounded-md'>
              <p >Featured</p>
            </div>
          )}
        </div>
        <p className='text-sm mt-2 font-montserrat'>
          <strong>Male</strong> | ID: <strong>{athlete.id}</strong>
        </p>
        <p className='text-md mt-2 font-montserrat'>
          <strong>Location:</strong> {athlete.location}
        </p>
        <p className='mt-4 font-montserrat'>
          {athlete.bio}
        </p>
        <div className='mt-4'>
          <p className='font-montserrat'><strong>Specialization:</strong> {athlete.specialization}</p>
          <p className='font-montserrat'><strong>Certification:</strong> {athlete.certification}</p>
          <p className='font-montserrat'><strong>Experience:</strong> {athlete.experience}</p>
          <p className='font-montserrat'><strong>Coaching Level:</strong> {athlete.coachingLevel}</p>
        </div>
        <button className='text-white mt-6' onClick={() => window.history.back()}>← Back to search</button>
      </div>
    </div>
  );
};

export default Athlete;

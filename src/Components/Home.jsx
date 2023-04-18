import React, { useState } from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';
import JobCategory from './Category';

const Home = () => {
  const jobs = useLoaderData()

  const [visible, setVisible] = useState(4)

    const handleShowMore = () => {
        setVisible((prevValue) => prevValue + 2);
    }

  return (
    <div>
      <Header></Header>
      <JobCategory></JobCategory>
      <div className='my-container'>
        <h1 className='text-2xl font-bold text-center'>Featured Jobs</h1>
        <p className='text-[#757575] text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 my-container mt-8'>
          {
            jobs.slice(0, visible).map(job => <Job key={job.id} job={job}></Job>)
          }
        </div>
        <div className='flex flex-col items-center justify-center'>
          <button className='btn' onClick={handleShowMore} >Show More</button>
        </div>
      </div>
      {/* <FeaturesJob></FeaturesJob> */}
    </div>
  );
};

export default Home;
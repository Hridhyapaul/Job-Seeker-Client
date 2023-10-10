import React, { useState } from "react";
import Header from "./Header";
import { useLoaderData } from "react-router-dom";
import Job from "./Job";
import JobCategory from "./Category";
import Footer from "./Footer";

const Home = () => {
  const jobs = useLoaderData();

  const [visible, setVisible] = useState(4);
  const [isButtonHidden, setButtonHidden] = useState(false);

  const handleShowMore = () => {
    setVisible((prevValue) => prevValue + 2);
    setButtonHidden(true);
  };

  return (
    <div>
      <Header></Header>
      <JobCategory></JobCategory>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-6 lg:px-8 pb-0 my-16">
        <h1 className="text-2xl font-bold text-center">Featured Jobs</h1>
        <p className="text-[#757575] text-center mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 mt-16">
          {jobs.slice(0, visible).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          {!isButtonHidden && (
            <button className="btn mt-8" onClick={handleShowMore}>
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

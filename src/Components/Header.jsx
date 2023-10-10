import React from "react";
import img from "../images/man.png";

const Header = () => {
  return (
    <div className="bg-[#F9F9FF] h-content">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-6 lg:px-8 pb-0 pt-5">
        <div className="mt-12 lg:flex item-center justify-between gap-[150px]">
          <div className="flex items-center">
            <div className="lg:space-y-10 space-y-5">
              <h1 className="text-3xl text-center lg:text-5xl lg:text-left font-bold leading-6">
                One Step Closer To Your{" "}
                <span className="gradient-text">Dream Job</span>
              </h1>
              <p className="text-[#757575] text-center lg:text-left">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="btn">Get Started</button>
            </div>
          </div>
          <div className="lg:h-full h-70px">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

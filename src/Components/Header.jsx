import React from 'react';
import img from '../images/man.png'

const Header = () => {
    return (
        <div className='bg-[#F9F9FF] lg:h-[502px]' h-content>
            <div className='px-5 pb-0 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-5'>
                <div className='mt-12 lg:flex item-center justify-between gap-[150px]'>
                    <div className='lg:space-y-10 space-y-5'>
                        <h1 className='text-3xl text-center lg:text-5xl lg:text-left font-bold'>One Step Closer To Your <span className='gradient-text'>Dream Job</span></h1>
                        <p className='text-[#757575] text-center lg:text-left'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn'>Get Started</button>
                    </div>
                    <div className='lg:h-full h-70px'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
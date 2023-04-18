import React from 'react';
import locationIcon from '../../public/picture/Icons/Frame-4.png';
import dollarIcon from '../../public/picture/Icons/Frame.png';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { logo, company, title, jobTime, jobType, location, salary, id } = job
    return (
        <div className='border-[#E8E8E8] border-[1px] p-[40px] w-full rounded space-y-[25px] '>
            <img className='w-[115px] h-[40px] object-contain' src={logo} alt="" />
            <div className='space-y-[12px]'>
                <h4 className='text-xl font-semibold'>{title}</h4>
                <h5 className='text-[#757575]'>{company}</h5>
                <div className='flex items-center space-x-3'>
                    <div className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-[1px] rounded-[6px]">
                        <div className=" bg-white rounded-[5px]">
                            <button className=" gradient-text px-3 py-[4px]">{jobType? 'Remote' : 'Onsite'}</button>
                        </div>
                    </div>
                    <div className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-[1px] rounded-[6px]">
                        <div className=" bg-white rounded-[5px]">
                            <button className=" gradient-text px-3 py-[4px]">{jobTime}</button>
                        </div>
                    </div>
                </div>
                <div className='lg:flex items-center'>
                    <div className='flex item-center text-[#757575] space-x-2'><img src={locationIcon} alt="" /><p>{location}</p></div>
                    <div className='flex item-center lg:ms-5 lg:mt-0 mt-2 text-[#757575] space-x-2'><img src={dollarIcon} alt="" /><p>{salary}</p></div>
                </div>
            </div>
            <div>
                <Link to={`job/${id}`} className='btn'><button>View Details</button></Link>
            </div>
        </div>
    );
};

export default Job;
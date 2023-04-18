import React from 'react';
import locationIcon from '../../public/picture/Icons/Frame-4.png';
import dollarIcon from '../../public/picture/Icons/Frame.png';
import { Link } from 'react-router-dom';

const AppliedJobCart = ({cart}) => {
    const { logo, company, title, jobTime, jobType, location, salary, id } = cart;
    return (
        <div>
            <div className='border-[#E8E8E8] border-[1px] px-5 py-4 rounded mb-8' key={id}>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <div className='px-5'>
                            <img className='w-[145px] object-contain' src={logo} alt="" />
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <div className='space-y-3'>
                            <p className='text-[20px] font-semibold text-[#474747]'>{title}</p>
                            <p className='text-[#757575] text-[20px] font-semibold'>{company}</p>
                            <div className='flex items-center space-x-3'>
                                <div className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-[1px] rounded-[6px]">
                                    <div className=" bg-white rounded-[5px]">
                                        <button className=" gradient-text px-3 py-[4px]">{jobType ? 'Remote' : 'Onsite'}</button>
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
                    </div>
                    <div className='w-[25%] '>
                        <div className='flex justify-end mr-5'>
                            <Link to={`../job/${id}`}><button className='btn'>View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobCart;
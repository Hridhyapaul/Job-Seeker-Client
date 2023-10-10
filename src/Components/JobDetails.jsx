import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from './Utilities/FakeDB';

const JobDetails = () => {
    const [jobDetails, setJobDetails] = useState({});
    let { id } = useParams();
    const jobs = useLoaderData();
    console.log(jobs);
    useEffect(() => {
                const jobData = jobs.find(job => job.id === id);
                setJobDetails(jobData)
    }, [id]); 
    console.log(jobDetails)
    const { description, responsibility, requirements, experiences, salary, title, phone, email, location } = jobDetails

    const handleAddToCart = (id) => {
        console.log(id)
        addToDb(id)
    }

    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-6 lg:px-8 pb-0'>
            <h3 className='text-3xl font-bold text-center my-20'>Job Details</h3>
            <div className='flex items-center justify-between my-10'>
                <div className='w-[60%]'>
                    <p><span className='font-bold'>Job Description:</span> {description}</p>
                    <br />
                    <p><span className='font-bold'>Job Responsibility:</span> {responsibility}</p>
                    <br />
                    <p className='font-bold'>Educational Requirements:</p>

                    <p>{requirements}</p>
                    <br />
                    <p className='font-bold'>Experiences:</p>

                    <p>{experiences}</p>
                </div>
                <div>
                    <div className='bg-[#F4F2FF] px-8 py-6 rounded'>
                        <h5 className='font-bold text-[20px]'>Job Details</h5>
                        <hr className='my-3' />
                        <div className='space-y-2'>
                            <div><p className='text-[20px]'><span className='font-semibold text-[#474747]'>Salary:</span> <span className='text-[#757575]'>{salary}</span></p></div>
                            <div><p className='text-[20px]'><span className='font-semibold text-[#474747]'>Job Title:</span> <span className='text-[#757575]'>{title}</span></p></div>
                        </div>
                        <h5 className='font-bold text-[20px] mt-5'>Contact Information</h5>
                        <hr className='my-3' />
                        <div className='space-y-2'>
                            <div><p className='text-[20px]'><span className='font-semibold text-[#474747]'>Phone:</span> <span className='text-[#757575]'>{phone}</span></p></div>
                            <div><p className='text-[20px]'><span className='font-semibold text-[#474747]'>Email:</span> <span className='text-[#757575]'>{email}</span></p></div>
                            <div><p className='text-[20px]'><span className='font-semibold text-[#474747]'>Address:</span> <span className='text-[#757575]'>{location}</span></p></div>
                        </div>
                    </div>
                    <button onClick={() => handleAddToCart(id)} className='btn w-full mt-6'>Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;
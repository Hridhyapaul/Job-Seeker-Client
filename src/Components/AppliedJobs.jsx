import React, { useState } from 'react';
import { getAppliedJob } from './Utilities/FakeDB';
import { useLoaderData } from 'react-router-dom';
import AppliedJobCart from './AppliedJobCart';

const AppliedJobs = () => {
    const jobCircularData = useLoaderData();
    const jobCart = getAppliedJob();
    const [filterJob, setFilterJob] = useState([])
    const [isRemote, setIsRemote] = useState(false)
    const [isOnsite, setIsOnsite] = useState(false)

    const carts = []
    for (const id in jobCart) {
        const appliedData = jobCircularData.find(jobData => jobData.id === id)
        if (appliedData) {
            carts.push(appliedData)
        }
        console.log(carts)
    }

    const filterResult = (filterItem) => {
        if (filterItem) {
            const result = carts.filter(sData => {
                return sData.jobType === filterItem;
            });
            setFilterJob(result)
            setIsRemote(true)
        }
        else {
            const result = carts.filter(sData => {
                return sData.jobType === filterItem;
            });
            setFilterJob(result)
            setIsOnsite(true)
        }
    }


    return (
        <div className='my-container'>
            <h2 className='text-3xl font-bold text-center my-20'>Applied Jobs</h2>
            <div className='flex justify-end gap-4 mb-4'>
                <button className='btn' onClick={() => filterResult(true)}>Filter Remote Job</button>
                <button className='btn' onClick={() => filterResult(false)}>Filter Onsite Job</button>
            </div>
            <div>
                {/* {
                    carts.map(cart => <AppliedJobCart key={cart.id} cart={cart}></AppliedJobCart>)
                } */}

                {!isRemote && !isOnsite ? (
                    <div>
                        {carts.map( cart => (
                            <AppliedJobCart key={cart.id} cart={cart}></AppliedJobCart>
                        ))}
                    </div>
                ) : (
                    <div>
                        {filterJob.map((cart) => (
                            <AppliedJobCart key={cart.id} cart={cart}></AppliedJobCart>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
};

export default AppliedJobs;
import React, { useEffect, useState } from 'react';
import CategoryList from './CategoryList';


const JobCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-6 lg:px-8 pb-0 my-16'>
            <h3 className='text-2xl font-bold text-center'>Job Category List</h3>
            <p className='text-[#757575] text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 my-container mt-8'>
                {
                    categories.map(category => <CategoryList key={category.id} category={category}></CategoryList>)
                }
            </div>
        </div>
    );
};

export default JobCategory;
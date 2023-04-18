import React from 'react';

const CategoryList = ({ category }) => {
    const { id, name, number, url } = category;
    return (
        <div className='bg-[#F9F9FF] px-8 py-8 rounded space-y-4'>
            <img className='w-[40px] h-[40px] mx-auto' src={url} alt="" />
            <div className='space-y-2'>
                <h2 className='text-lg font-bold text-center'>{name}</h2>
                <h2 className='text-md text-[#A3A3A3] font-semibold text-center'>{number} Jobs Available </h2>
            </div>
        </div>
    );
};

export default CategoryList;
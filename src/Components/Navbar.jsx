import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BeakerIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className=' bg-[#F9F9FF]'>
            <div className='flex justify-between items-center my-container'>
                <Link to='/'>
                    <span className='text-2xl font-bold'>JobSeeker</span>
                </Link>
                <ul className='lg:flex items-center space-x-8 font-semibold hidden'>
                    <li>
                        <NavLink to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/statistics'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >Statistics</NavLink>
                    </li>

                    <li>
                        <NavLink to='/appliedJob'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >Applied Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >Blog</NavLink>
                    </li>
                </ul>
                <button className='btn md:flex hidden'>Start Applying</button>


                {/* Mobile navbar section */}

                <div className='lg:hidden'>
                    <button onClick={() => setIsMenuOpen(true)}>
                        <Bars3BottomRightIcon className="h-8 w-8 text-blue-500" />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute duration-500 top-0 left-0 w-full'>
                            <div className='p-5 bg-[#F9F9FF] border rounded shadow-sm'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <Link to='/'>
                                            <span className='text-2xl font-bold'>JobSeeker</span>
                                        </Link>
                                    </div>

                                    <div>
                                        <button onClick={() => setIsMenuOpen(false)}>
                                            <XMarkIcon className="h-8 w-8 text-blue-500" />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <ul className='space-y-4 font-semibold mt-4'>
                                        <li>
                                            <NavLink to='/'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/statistics'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >Statistics</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/appliedJob'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >Applied Jobs</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/blog'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >Blog</NavLink>
                                        </li>
                                    </ul>
                                    <div className='mt-4'>
                                        <button className='btn'>Start Applying</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
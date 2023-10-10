import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-6 lg:px-8 pb-0'>
            <h3 className='text-3xl font-bold text-center my-20'>Frequently Asked Questions</h3>
            <div>
                <h2 className='font-bold'>Q.1: When should you use context API?</h2>
                <p className='mt-3'><span>You should use the Context API in the following scenarios:</span>
                    <ul className='list-decimal ml-5 space-y-2 mt-2'>
                        <li>When you need to pass data down to multiple levels of nested components. Using the Context API, you can avoid "prop drilling" and make the data accessible to any component that needs it.</li>
                        <li>When you have multiple components that need access to the same data. By creating a context, you can avoid duplicating state and make the data accessible to all the components that need it.</li>
                        <li>When you have a large application with multiple screens or routes. Context API can help to maintain the state between different screens or pages, making it easier to manage the application state.</li>
                    </ul>
                </p><br /><br />

                <h2 className='font-bold'>Q.2: What is a custom hook?</h2>
                <p className='mt-3'>
                    <ul className='space-y-2 mt-2'>
                        <li>A custom hook is a JavaScript function that starts with the word "use" and can use React's built-in hooks like useState, useEffect, useContext, etc. Custom hooks allow you to encapsulate and reuse logic between components in a declarative way.</li>
                        <li>Custom hooks are typically created to abstract away complex logic that might be used in multiple components, making it easier to manage and test the application. They allow you to create reusable pieces of code that can be easily consumed by any component.</li>
                    </ul>
                </p> <br /> <br />

                <h2 className='font-bold'>Q.3: What is useRef?</h2>
                <p className='mt-3'>
                    In React, useRef is a hook that provides a way to create and store a mutable value that persists across re-renders. Unlike state, the value stored in a useRef does not trigger re-renders when it is updated. Instead, it provides a way to access the current value of the reference at any time, even outside the normal React component lifecycle.
                </p> <br /> <br />

                <h2 className='font-bold'>Q.4: What is useMemo?</h2>
                <p className='mt-3'>
                    <ul className='space-y-2 mt-2'>
                        <li>In React, useMemo is a hook that allows you to memoize the result of a function call and prevent unnecessary re-renders. Memoization is the process of caching the result of a function call and returning it from the cache when the same input parameters are provided again.</li>
                        <li>The useMemo hook takes two arguments: a function and an array of dependencies. The function is called only when one of the dependencies changes. If none of the dependencies have changed since the last render, the cached value is returned instead of recomputing the result.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blog;
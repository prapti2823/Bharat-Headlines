import React from 'react';
// import { a } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className='flex p-5 bg-gray-300 shadow-lg border-'>
                <h1 className='text-2xl'>
                    <a href="/">News Monkey</a>
                </h1>
                <div className='p-5 relative'>
                    <ul className='flex absolute top-0'>
                        <li className='p-2 text-lg'>
                            <a href="/business">Business</a>
                        </li>
                        <li className='p-2 text-lg'>
                            <a href="/entertainment">Entertainment</a>
                        </li>
                        <li className='p-2 text-lg'>
                            <a href="/technology">Technology</a>
                        </li>
                        <li className='p-2 text-lg'>
                            <a href="/sports">Sports</a>
                        </li>
                        <li className='p-2 text-lg'>
                            <a href="/science">Science</a>
                        </li>
                        <li className='p-2 text-lg'>
                            <a href="/health">Health</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

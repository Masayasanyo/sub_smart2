import React from 'react';
import Link from "next/link";

const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 w-screen h-screen z-[9999] px-6 py-8 bg-[#2973B2] text-[#E8ECD7]">
            <svg className="w-7 h-auto block ml-auto fill-[#F2EFE7]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
            <ul className='py-8'>
                <li className='px-2 py-6'>
                    <Link className='text-lg flex justify-between decoration-0 text-[#E8ECD7]' href='/'>
                        Home
                        <svg className="w-7 h-auto block ml-auto fill-[#F2EFE7]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                    </Link>
                </li>
                <hr className='border-1'/>
                <li className='px-2 py-6'>
                    <Link className='text-lg flex justify-between decoration-0 text-[#E8ECD7]' href='/'>
                        Flashcards
                        <svg className="w-7 h-auto block ml-auto fill-[#F2EFE7]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                    </Link>
                </li>
                <hr className='border-1'/>
                <li className='px-2 py-6'>
                    <Link className='text-lg flex justify-between decoration-0 text-[#E8ECD7]' href='/'>
                        Account
                        <svg className="w-7 h-auto block ml-auto fill-[#F2EFE7]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;
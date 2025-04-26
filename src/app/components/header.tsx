"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import Nav from './nav';

const Header = () => {
    const [navState, setNavState] = useState(false);
    const openNav = () => {
        setNavState(true);
    }
    const closeNav = () => {
        setNavState(false);
    }

    return (
        <header className="max-w-[800px] mx-auto flex justify-between items-center">
            <Nav navState={navState} closeNav={closeNav}/>
            <h1>
                <Link href='/'>
                    <Image src="/logo.svg" alt="logo" width={120} height={120} className='my-auto' />
                </Link>
            </h1>
            <svg onClick={openNav} className='w-10 h-auto block ml-auto  fill-[#2973B2]' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </header>
    )
};

export default Header;
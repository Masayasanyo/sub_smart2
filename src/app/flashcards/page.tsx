import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Header from '../components/header';
import Footer from "../components/footer";
import Nav from "../components/nav";

const FlashcardsPage = () => {
    return (
        <div className="mx-auto px-5 py-8">
			{/* <Nav /> */}
			<Header />
            <div className="flex flex-col gap-8 py-10">
                <div className='flex items-center gap-2'>
                    <h2 className='text-lg'>Flashcards</h2>
                    <svg className='w-8 h-auto block ml-auto fill-[#2973B2]' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                    </svg>
                </div>

                <form className="flex flex-col gap-6 border-4 border-[#2973B2] rounded-xl px-6 py-6">
                    <label className='flex flex-col'>
                        Title
                        <input className="shadow-md font-bold border-none outline-none size-full bg-[#D9D9D9] px-4 py-2 rounded-xl" type="text" />
                    </label>
                    <button className="w-full font-bold text-center px-4 py-2  bg-[#2973B2] text-[#F2EFE7] rounded-xl" type="button">Submit</button>
                </form>

                <ul></ul>
            </div>
			<Footer />
		</div>
    )
}

export default FlashcardsPage
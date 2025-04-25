import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Header from '../components/header';
import Footer from "../components/footer";
import Nav from "../components/nav";

const SubmitWordsPage = () => {
    return (
        <div className="mx-auto px-5 py-8">
			{/* <Nav /> */}
			<Header />
            <div className="flex flex-col gap-8 py-10">
                <div className='flex items-center gap-2'>
                    <h2 className='text-lg'>Add words to flashcards</h2>
                </div>

                <ul></ul>

                <label className='flex flex-col gap-2'>
                    Select a card
                    <select className='w-full border-4 border-[#2973B2] rounded-xl px-4 py-2' name="card" required></select>
                </label>

                <button className="w-full font-bold text-center px-4 py-2  bg-[#2973B2] text-[#F2EFE7] rounded-xl">Submit</button>

            </div>

			<Footer />
		</div>
    )
}

export default SubmitWordsPage
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Header from '../../components/header';
import Footer from '@/app/components/footer';
import Nav from "../../components/nav";

const FlashcardPage = () => {
    return (
        <div className="mx-auto px-5 py-8">
			{/* <Nav /> */}
			<Header />
            <div className="flex flex-col gap-8 py-10">
                <svg className='w-8 h-auto block ml-auto fill-[#2973B2]' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
                <h2 className='text-lg'>English</h2>     

                <div className="flex flex-col gap-8 py-10">
                    <div className='grid grid-cols-[3fr_3fr_3fr] gap-2'>
                        <svg className='w-8 h-auto block my-auto fill-[#2973B2]' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
                        </svg>
                        <div className="flex justify-center gap-4">
                            <span>2</span><p>/</p><span>12</span>
                        </div>
                    </div>

                    <div className="aspect-video w-full flex items-center justify-center border-4 border-[#2973B2] rounded-xl px-6 py-6">
                        <p className='text-lg'>apple</p>
                    </div>

                    <div className='flex justify-between gap-2'>
                        <button 
                            className="w-full font-bold text-center px-4 py-2  bg-[#F2EFE7] text-[#2973B2] border-2 border-[#2973B2] rounded-xl" 
                            type="button"
                        >
                            Again
                        </button>
                        <button 
                            className="w-full font-bold text-center px-4 py-2  bg-[#2973B2] text-[#F2EFE7] rounded-xl" 
                            type="button"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
			<Footer />
		</div>
    )
}

export default FlashcardPage
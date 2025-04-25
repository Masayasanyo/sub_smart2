import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Header from '../components/header';
import Footer from "../components/footer";

const AccountPage = () => {
    return (
        <div className="mx-auto px-5 py-8">
			{/* <Nav /> */}
			<Header />
            <div className="flex flex-col gap-8 py-12">
                <h2 className='text-2xl'>Account</h2>
                <form className='flex flex-col gap-8'>
                    <label className='flex flex-col gap-2'>
                        Email
                        <input 
                            className="shadow-md font-bold border-none outline-none size-full bg-[#D9D9D9] px-4 py-2 rounded-xl" 
                            type="email" 
                            name="email" 
                        />
                    </label>
                    <label className='flex flex-col gap-2'>
                        Password
                        <input 
                            className="shadow-md font-bold border-none outline-none size-full bg-[#D9D9D9] px-4 py-2 rounded-xl" 
                            type="password" 
                            name="password" 
                        />
                    </label>
                    <button className="w-full font-bold text-center px-4 py-2  bg-[#2973B2] text-[#F2EFE7] rounded-xl" type="button">Submit</button>
                </form>

                <p className='text-[#2973B2] text-center'>Log out</p>
            </div>
			<Footer />
		</div>
    )
}

export default AccountPage
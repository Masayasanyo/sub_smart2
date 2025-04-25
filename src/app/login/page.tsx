import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";

const LoginPage = () => {
    return (
        <div className="mx-auto px-5 py-8">
            <Image src="/logo.svg" alt="logo" width={150} height={150} className='block m-auto' />
            <div className="flex flex-col gap-8 py-12">
                <h2 className='text-2xl'>Login</h2>
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
                    <button className="w-full font-bold text-center px-4 py-2  bg-[#2973B2] text-[#F2EFE7] rounded-xl" type="button">Login</button>
                </form>

                <div>
                    <p>Don't have an account? <Link className='text-[#2973B2]' href="signup"> Sign Up</Link></p>
                </div>
            </div>
			<Footer />
		</div>
    )
}

export default LoginPage
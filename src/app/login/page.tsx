"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";

type FormData = {
    email: string;
    password: string;
};

type LoginResponse = {
    token: string;
};

const LoginPage = () => {    
    const [formData, setFormData] = useState<FormData>({
        email: "", 
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value, 
        });
    };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formData.email === '' || formData.password === '') {
            console.error('Passwords and email are requiered')
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(formData), 
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const data: LoginResponse = await response.json();
            localStorage.setItem('jwt', data.token);
            window.location.href = '/';
        } catch (error) {
            console.error(`Internal server error.`, error);
        }
    };

    return (
        <div className="mx-auto px-5 py-8">
            <Image src="/logo.svg" alt="logo" width={150} height={150} className='block m-auto' />
            <div className="flex flex-col gap-8 py-12">
                <h2 className='text-2xl'>Login</h2>
                <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                    <label className='flex flex-col gap-2'>
                        Email
                        <input 
                            className="shadow-md font-bold border-none outline-none size-full bg-[#D9D9D9] px-4 py-2 rounded-xl" 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                        />
                    </label>
                    <label className='flex flex-col gap-2'>
                        Password
                        <input 
                            className="shadow-md font-bold border-none outline-none size-full bg-[#D9D9D9] px-4 py-2 rounded-xl" 
                            type="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange}
                        />
                    </label>
                    <button className="w-full font-bold text-center px-4 py-2  bg-[#2973B2] text-[#F2EFE7] rounded-xl" type="submit">Login</button>
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
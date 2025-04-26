"use client";

import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from 'react';

const Home = () => {
	const apiUrl =  process.env.NEXT_PUBLIC_API_URL;

	const [transcript, setTranscript] = useState<string[]>([]);
	const [newWordsList, setNewWordsList] = useState<{ en: string; ja: string }[]>([]);
	const [enWord, setEnWord] = useState<string>('');
	const [jaWord, setJaWord] = useState<string>('');
	const [url, setUrl] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUrl(value);
    };

	const translateWord = async (text: string) => {
		const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ja`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			setEnWord(text);
			setJaWord(data.responseData.translatedText);
			setNewWordsList((prevList) => [
				...prevList,
				{ en: text, ja: data.responseData.translatedText },
			]);
		} catch (error) {
			return text;
		}
	};

	const submitUrl = async () => {
		const videoId = url.split("/embed/")[1].split("?")[0];
		try {
			const token = localStorage.getItem("jwt");
			const response = await fetch(`${apiUrl}/transcript`, {
				method: "POST",
				headers: {
					"Authorization": `Bearer ${token}`,
					'Content-Type': 'application/json',
				}, 
				body: JSON.stringify({videoId: videoId}), 
			});
			const data = await response.json();
			console.log(data)
			for (let i = 0; i < data.data.length; i++) {
				const wordList = data.data[i].text.replaceAll("\n", "").split(/\s+/);
				for (let j = 0; j < wordList.length; j++) {
					setTranscript((prevList) => [
						...prevList,
						wordList[j],
					]);
				}
			}
		} catch (error) {
			console.error(`Server error`, error);
		}
    };

	const finishStudy = async () => {
	}

	const checkSession = async () => {
		try {
			const token = localStorage.getItem("jwt");
			const response = await fetch(`${apiUrl}/accounts/session`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			});
			const data = await response.json();
			if (data.isLoggedIn === false) {
				window.location.href = "login";
			}
		} catch (error) {
			console.error(`Internal server error.`, error);
			window.location.href = "login";
		}
	}
	checkSession();

	return (
		<main className="mx-auto px-5 py-8">
			<Header />
			<div className="flex flex-col gap-8 py-10">			
				<form className="flex items-center gap-2">
					<input onChange={handleChange} className="shadow-md font-bold border-none outline-none size-full bg-[#D9D9D9] px-4 py-2 rounded-xl" type="text" placeholder="Enter YouTube URL" />
					<button onClick={submitUrl} className="font-bold text-center px-4 py-2  bg-[#2973B2] text-[#F2EFE7] rounded-xl" type="button">Submit</button>
				</form>

				<iframe
					className="w-full aspect-video rounded-lg shadow-md"
					src="https://www.youtube.com/embed/jTJvyKZDFsY?si=Zv4Gku1sh7fP3MnL"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>

				<p className="w-full h-[200px] overflow-y-auto break-words px-4 py-2">
					{transcript.length > 0 ? (
						transcript.map((t, index) => (
							<span onClick={() => translateWord(t)} >{t} </span>
						))
					) : (
						<span>Loading transcript...</span>
					)}
				</p>

				<div className="grid grid-cols-[5fr_1fr_5fr] gap-6 border-4 border-[#2973B2] rounded-xl px-4 py-2">
					<div>
						<p>EN</p>
						<p className="text-lg">{enWord}</p>
					</div>

					<svg className="w-7 h-auto block my-auto fill-[#2973B2]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
					</svg>

					<div>
						<p>JA</p>
						<p className="text-lg">{jaWord}</p>
					</div>
				</div>

				<button onClick={finishStudy} type="button" className="w-full font-bold text-center px-4 py-2  bg-[#2973B2] text-[#F2EFE7] rounded-xl">Finish Your Study</button>

			</div>
			<Footer />
		</main>
	);
}

export default Home;
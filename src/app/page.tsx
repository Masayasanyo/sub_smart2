import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";

export default function Home() {
	return (
		<main className="mx-auto px-5 py-8">
			{/* <Nav /> */}
			<Header />
			<div className="flex flex-col gap-8 py-10">			
				<form className="flex items-center gap-2">
					<input className="shadow-md font-bold border-none outline-none size-full bg-[#D9D9D9] px-4 py-2 rounded-xl" type="text" placeholder="Enter YouTube URL" />
					<button className="font-bold text-center px-4 py-2  bg-[#2973B2] text-[#F2EFE7] rounded-xl" type="button">Submit</button>
				</form>
				<div>
				<iframe
					className="w-full aspect-video rounded-lg shadow-md"
					src="https://www.youtube.com/embed/jTJvyKZDFsY?si=Zv4Gku1sh7fP3MnL"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
				</div>

				<p className="w-full h-[200px] overflow-y-auto break-words px-4 py-2">
					Chrome is moving towards a new experience that 
					allows users to choose to browse without third-party cookies. 
					allows users to choose to browse without third-party cookies. 
					allows users to choose to browse without third-party cookies.
					allows users to choose to browse without third-party cookies.
					allows users to choose to browse without third-party cookies.
				</p>

				<div className="grid grid-cols-[5fr_1fr_5fr] gap-6 border-4 border-[#2973B2] rounded-xl px-4 py-2">
					<div>
						<p>EN</p>
						<p className="text-lg">Apple</p>
					</div>

					<svg className="w-7 h-auto block my-auto fill-[#2973B2]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
					</svg>

					<div>
						<p>JA</p>
						<p className="text-lg">りんご</p>
					</div>
				</div>

				<button type="button" className="w-full font-bold text-center px-4 py-2  bg-[#2973B2] text-[#F2EFE7] rounded-xl">Finish Your Study</button>

			</div>
			<Footer />
		</main>
	);
}

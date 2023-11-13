// pages/index.js
import Image from 'next/image'
import React from 'react';

const Home = () => {
    return (
        // <div className="min-h-screen flex flex-col">
        <div className="flex w-full flex-col items-center justify-between p-4 md:p-24 backdrop-blur-2xl bg-white/30">
            {/* Header */}
            <header className="text-black p-4 ">
                <a href='https://friends-finder-gg.vercel.app'>
                    {/* <h1 className="text-2xl font-bold text-neutral-900 uppercase">Friends Finder GG</h1> */}
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/logo_svg.svg"
                        alt="FFGG Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </a>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col md:flex-row">
                {/* Left Column */}
                <div className="p-4 md:w-1/2 md:ml-24">
                    <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">13th Nov 2023</h5>
                        </a>
                        <p className="mb-2 font-normal text-gray-900 dark:text-gray-400">Please find below updates :</p>
                        <ul className="w-full text-sm space-y-1 text-gray-800 list-disc list-inside dark:text-gray-400">
                            <li>
                                Basic framework - building the site on my local machine with Laravel + VueJS + some APIs.
                            </li>
                            <li>
                                Added Newsletter option using Brevo to keep everyone in mailing list updated.
                            </li>
                            <li>
                                Current site is static and hosted on Vercel with NextJS but we will move to Laravel + VueJS once the MVP development is complete.
                            </li>
                            <li>
                                I am figuring out the APIs from different networks like PlayStation, Xbox, Steam etc.
                            </li>
                        </ul>
                        <div className="p-4 mt-4 border text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                            <span className="font-medium"> <a className='text-blue-700 font-medium underline underline-offset-4' href='https://discord.gg/qjmXdBSWcw' target='_blank'>Join Discord</a></span> to contribute ideas, discuss features and help if you know APIs/Web Development. You can also subscribe to newsletter to stay updated via email.
                        </div>
                        <div className="p-4 mt-3 border text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span className="font-medium"><a className=' font-medium underline underline-offset-4' href='https://github.com/rohitasare7/friends-finder-gg/' target='_blank'>GitHub Repo</a></span> I am keeping the development open source so anyone can contribute, need to work on contribution strategy/devops stuff.
                        </div>
                        <div className="p-4 mt-3 border text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                            <span className="font-medium">What we need : </span>
                            <p> - A Hosting Server, I am figuring out how to host everything for free on Vercel platform first and later we can move on to proper Server. This is future scope but I am keeping the scalability in my mind while developing the whole architecture.</p>
                            <p> - Team Members, Feel free to contribute whatever you can to this project.</p>
                        </div>
                        <div className='mt-4'>
                            <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Shortened link for Sharing (Select and then Copy)</label>
                            <input type="text" id="large-input" value={'https://bit.ly/ffgg'} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className='content-center mt-4 my-2'>
                            <p className='my-2 font-medium text-sm'>QR Code for Site</p>
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/ffgg_qr.svg"
                                alt="FFGG QR"
                                width={180}
                                height={37}
                                priority
                            />
                        </div>
                    </div>
                    {/* Add your content here */}
                </div>

                {/* Right Column */}
                <div className="px-4 md:w-1/2">
                    <div style={{ display: 'block', margin: '-8px', maxWidth: '100%', borderRadius: '10px', scrollbarWidth: 'none' }}>
                        <iframe
                            width="390"
                            height="700"
                            src="https://bf93fd43.sibforms.com/serve/MUIFAOUBQarhr2cfDr7Eo4ZjyXNcgN3qYPSss8VMVj6pRz3stWOButeDmgwjfDaOKMOaHh52NJAOaJB7cQyQWU_C54A1-IlCj4TSUdXZcQ1BBl-X_E8f7ZXrg5cA30C7G4eszvx-vlFIXYT-6aWvJcnpItUPjUJE-GoQmp4yAd8uA48NJonV4fnfmXFbR-Hnp9XvTR8g81GVHhvh"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen
                        ></iframe>

                    </div>
                    {/* Add your content here */}
                </div>
            </main>

            {/* Footer */}
            <footer>
                <div className="my-10 text-center	">
                    <div>
                        <a className="font-medium text-blue-600" href='https://www.instagram.com/reel/CzhLVmWORII/?utm_source=ig_web_copy_link' target='_blank'>The Instagram Reel which started this whole project, thank you @male</a>
                    </div>
                    <div className='mt-2'>
                        Built with <span className='font-medium text-fuchsia-500	'>Love</span> for all my boys, by a <span className='font-medium'>Gamer for Gamers</span>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Home;

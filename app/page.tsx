import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to the &nbsp;
          <code className="font-mono font-bold">Friends Finder GG</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted  By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo_svg.svg"
          alt="FFGG Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="flex">
        <div className="flex-1 mt-6">
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
              <span className="font-medium"> <a className='text-blue-700 font-medium' href='https://discord.gg/qjmXdBSWcw' target='_blank'>Join Discord</a></span> to contribute ideas, discuss features and help if you know APIs/Web Development. You can also subscribe to newsletter to stay updated via email.
            </div>
            <div className="p-4 mt-3 border text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <span className="font-medium"><a className=' font-medium' href='https://github.com/rohitasare7/friends-finder-gg/' target='_blank'>GitHub Repo</a></span> I am keeping the development open source so anyone can contribute, need to work on contribution strategy/devops stuff.
            </div>
            <div className="p-4 mt-3 border text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
              <span className="font-medium">What we need : </span> A Hosting Server, I am figuring out how to host everything for free on Vercel platform first and later we can move on to proper Server. This is future scope but I am keeping the scalability in my mind while developing the whole architecture.
            </div>
            <div className='mt-4'>
              <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Shortened link for Sharing (Select and then Copy)</label>
              <input type="text" id="large-input" value={'http://gg.gg/friendsfinder'} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%', borderRadius: '10px' }}>
            <iframe
              width="540"
              height="755"
              src="https://bf93fd43.sibforms.com/serve/MUIFAOUBQarhr2cfDr7Eo4ZjyXNcgN3qYPSss8VMVj6pRz3stWOButeDmgwjfDaOKMOaHh52NJAOaJB7cQyQWU_C54A1-IlCj4TSUdXZcQ1BBl-X_E8f7ZXrg5cA30C7G4eszvx-vlFIXYT-6aWvJcnpItUPjUJE-GoQmp4yAd8uA48NJonV4fnfmXFbR-Hnp9XvTR8g81GVHhvh"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="">
        Site Designed with Love, by a <span className='font-medium'>Gamer for Gamers</span>
      </div>
    </main>
  )
}

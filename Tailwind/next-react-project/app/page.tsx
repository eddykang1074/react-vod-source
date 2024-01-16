import Image from 'next/image'

export default function Home() {
  return (
    <>
    
      <div className='text-center mt-5'>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border  border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
        Message
        </button>
      </div>



      <div className="mt-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">

            <div className="relative h-48 w-full object-cover md:h-full md:w-48">
              <Image src="/vercel.svg" alt="Vercel Logo"  layout="fill" objectFit="cover" />
            </div>
            
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
          </div>
      </div>


    </>
  )
}

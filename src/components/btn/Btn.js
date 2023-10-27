

export default function Btn() {
    return (
        <>
            <div className="w-full h-screen bg-gray-100 flex flex-col gap-12 items-center justify-center">
                <h2 className="font-bold text-gray-700 text-3xl">
                    Button component
                </h2>
                <div className="flex items-center justify-center gap-8">
                    <button className="flex items-center justify-center text-gray-600
                                       border-2 border-rose-300
                                       gap-2 border px-4 py-2 rounded group bg-gradient-to-t from-rose-100 to-teal-100">
                        <span className="group-hover:font-normal transition ease-in-out duration-300">
                            button 1
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="w-5 h-5 transition ease-in-out duration-300 group-hover:translate-x-1 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </button>
                    <button className="flex items-center justify-center text-gray-600
                                       border-2 border-rose-300
                                       gap-2 border px-4 py-2 rounded group bg-gradient-to-t from-rose-100 to-teal-100">
                        <span className="group-hover:font-normal transition ease-in-out duration-300">
                            button 2
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="animate-spin "
                            viewBox="0 0 24 24" fill="none" stroke="#4b5563" stroke-width="1"
                            stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" /></svg>
                    </button>
                </div>
            </div>
        </>
    )
}
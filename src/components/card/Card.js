import Image from "next/image"

export default function Card() {

    return (
        <>
            <div className="flex flex-col gap-12 items-center justify-center w-full h-screen bg-gray-100">
            <h2 className="font-bold text-gray-700 text-3xl">
                    Card component
                </h2>
                    <div className="border w-[20%] overflow-hidden rounded shadow bg-white">
                        <Image src={"https://img.freepik.com/free-vector/cute-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4148.jpg?size=626&ext=jpg&ga=GA1.1.1356523742.1695553187&semt=sph"}
                            width={200} height={200} alt="img" className="w-full" />
                        <div className="flex flex-col  p-4 gap-4">
                            <h4 className="font-bold text-xl">
                                cat cute
                            </h4>
                            <div className="w-full h-[3px] bg-gray-200 rounded"></div>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nihil, asperiores quam neque deleniti provident explicabo quos totam?
                            </p>
                            <div className="flex items-center justify-between mt-2">
                                <button className="bg-yellow-600 px-2 py-1 rounded text-white flex items-center group">
                                    <span>
                                        more info
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                     className="w-4 h-4 group-hover:translate-x-2 transition-all duration-300 text-gray-200 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                                <button className="bg-blue-600 px-2 py-1 rounded text-white flex items-center transition-all duration-300  hover:bg-blue-700">
                                    buy
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
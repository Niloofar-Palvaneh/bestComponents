import Image from "next/image"

export default function HoverEffect() {
    return (
        <>
            <div className="w-full flex items-center justify-center h-screen">
                <div className="border shadow">
                    <div className="relative overflow-hidden group">
                        <div className="w-full h-[200px] bg-red-c z-10 absolute sm:h-[400px] sm:-right-[300px]
                     transition-all ease-in-out -right-[210px] group-hover:right-0 text-white text-center p-4 ">
                            <h4 className="mb-4 font-bold text-xl">
                                About cute cat
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit omnis sit rem
                            </p>
                        </div>
                        <Image
                            className="z-0 sm:w-full"
                            width={200} height={200} alt="..."
                            src={"https://img.freepik.com/free-vector/cute-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4148.jpg?size=626&ext=jpg&ga=GA1.1.1356523742.1695553187&semt=sph"} />
                    </div>
                    <div className="text-center font-bold py-4">
                        hover or click on img
                    </div>
                </div>
            </div>
           
        </>
    )
}
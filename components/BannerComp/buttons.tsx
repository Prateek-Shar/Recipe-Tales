import { useRouter } from "next/navigation";

const Buttons = () => {

    const router = useRouter();

    const render_all_recipe = () => {
        router.push("/all_recipe")
    }

    return (
        <div className="xl:w-[20%] mm:w-[90%] flex items-center bg-amber-8060 xl:ml-115 mm:my-10 mt-10">

            <button className="w-[40%] relative xl:ml-6 mm:ml-2 cursor-pointer" onClick={render_all_recipe}>
                <div className="w-full border-2 border-[#16a34a] rounded-full bg-white p-5" />
                <div className="w-[94%] absolute bg-[#16a34a] rounded-full top-1 left-1 p-1.5 flex justify-center">
                    <p className="text-white font-Poppins cursor-pointer">Browse</p>  
                </div>
            </button>

            {/* <div className="w-[40%] relative">
                <div className="w-full border-2 border-[#16a34a] rounded-full bg-white p-5" />
                <div className="w-[95%] absolute bg-[#16a34a] rounded-full top-1 left-1 p-1.5 flex justify-center">
                    <button type="button" className="text-white font-Poppins">Tutorials</button>
                </div>
            </div> */}

        </div>
    )
}



export default Buttons;
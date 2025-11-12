const Buttons = () => {

    return (
        <div className="w-[20%] flex justify-evenly items-center bg-amber-8060 ml-115 mt-10">

            <div className="w-[40%] relative">
                <div className="w-full border-2 border-[#5820d7] rounded-full bg-white  p-5" />
                <div className="w-[94%] absolute bg-[#5820d7] rounded-full top-1 left-1 p-1.5 flex justify-center">
                    <button type="button" className="text-white font-Poppins">Browse</button>
                </div>
            </div>

            <div className="w-[40%] relative">
                <div className="w-full border-2 border-[#5820d7] rounded-full bg-white p-5" />
                <div className="w-[95%] absolute bg-[#5820d7] rounded-full top-1 left-1 p-1.5 flex justify-center">
                    <button type="button" className="text-white font-Poppins">Tutorials</button>
                </div>
            </div>

        </div>
    )
}



export default Buttons;
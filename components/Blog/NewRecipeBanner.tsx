const NewRecipeBanner = () => {

    return (
        <div className="w-full bg-center bg-[url(/Images/add_recipe_hero.jpg)] p-1 h-110 flex justify-center items-center flex-col">
            <div className="xl:w-[50%] m:w-[70%] flex justify-center">
                <p className="xl:text-5xl mm:text-3xl text-white font-Capra">Create Your Recipe</p>
            </div>

            <div className="xl:w-[50%] mm:w-[80%] flex justify-center mt-5 font-Capra">
                <p className="xl:text-2xl mm:text-[20px] text-center text-white">Share your culinary masterpiece with the world</p>
            </div>
        </div>
    )

}


export default NewRecipeBanner
const NewRecipeBanner = () => {

    return (
        <div className="bg-[url(/Images/add_recipe_hero.jpg)] p-1 h-110 flex justify-center items-center flex-col">
            <div className="w-[50%] flex justify-center">
                <p className="text-5xl text-white font-Capra">Create Your Recipe</p>
            </div>

            <div className="w-[50%] flex justify-center mt-5 font-Capra">
                <p className="text-2xl text-white">Share your culinary masterpiece with the world</p>
            </div>
        </div>
    )

}


export default NewRecipeBanner
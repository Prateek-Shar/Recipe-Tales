import mongoose from "mongoose";
import Recipe from "@/Schema/recipeDet"; // Update the path if needed
import Connect from "@/middleware/mongo_connect";

const MONGO_URI = process.env.MONGO_URI!;

async function seedDrink() {
    try {
        await Connect();

        const drink = {
            Author_name: "Prateek",
            Recipe_name: "Watermelon Mint Cooler",
            Recipe_short_desc: "A naturally sweet and refreshing watermelon cooler infused with fresh mint.",
            Tags: ["Drinks", "Summer"],
            Blog: "This watermelon mint cooler is light, hydrating, and packed with natural sweetness, making it the perfect summer refreshment.",
            Prep_Time: 15,
            Cook_Time: 0,
            Servings: 3,
            Ingredient: [
                "3 cups watermelon cubes",
                "10 fresh mint leaves",
                "1 tbsp lemon juice",
                "1 tbsp honey",
                "1 cup chilled water",
                "6 ice cubes"
            ],
            Instructions: [
                "Add watermelon cubes, mint leaves, lemon juice, honey, and water to a blender.",
                "Blend until smooth.",
                "Strain the juice if preferred.",
                "Pour over ice cubes in serving glasses.",
                "Garnish with mint leaves and a watermelon slice.",
                "Serve immediately."
            ]
        }

        const result = await Recipe.create(drink);

        console.log("Drink added successfully!");
        console.log(result);

        await mongoose.disconnect();
    } catch (error) {
        console.error(error);
    }
}

seedDrink();
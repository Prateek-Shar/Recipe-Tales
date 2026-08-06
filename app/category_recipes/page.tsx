import { Suspense } from "react";
import CategoryRecipesClient from "./category_recipe.client";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CategoryRecipesClient />
        </Suspense>
    );
}
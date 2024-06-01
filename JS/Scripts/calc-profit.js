function profit(numberDishPrise, dishIngredients) {
    let dishExpenses = 0; 

    for (let i = 0; i < dishIngredients.length; i++) {
        let ingredient = dishIngredients[i];
        dishExpenses += ingredientsPrice[ingredient];
    }
    return numberDishPrise - dishExpenses;
}

export {
    profit
}


// Program with Chaining Clear

function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 1000);
    })
}
function makedough() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = "🍞🥖";
            resolve(dough);
        }, 2000);
    })
}
function bakepizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = "🍕";
            resolve(pizza);
        }, 3000);
    })
}
getCheese()
    .then((cheese) => {
        console.log("Here is the cheese", cheese)
        return makedough(cheese)
    })
    .then((dough) => {
        console.log("Here is the Dough Bread", dough)
        return bakepizza(dough);
    })
    .then((pizza) => {
        console.log("Here is the Pizza", pizza)
        return bakepizza()
    })
    .catch((data)=>{
        console.log("Errar",data)
    })
getCheese();
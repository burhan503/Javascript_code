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

async function OrderPizza(){
    try{
    const cheese = await getCheese();
    document.write("Here is the Cheese",cheese);
    const dough = await makedough();
    document.write("Here is the Dough",dough);
    const pizza = await bakepizza();
    document.write("Here is the Pizza",pizza);
    }
    catch(error){
        console.log("no Exception Found",error)
    }
}
OrderPizza();
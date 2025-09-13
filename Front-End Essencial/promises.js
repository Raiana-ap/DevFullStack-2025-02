function putWaterToBOil() {
    console.log('Boil the water')
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("We have boiled the water")
            resolve() // existe o reject também
        }, 5000)
    })
}

function getReadyToMakeCoffee() {
    console.log('Grind coffe beans.')
    console.log('Line the bsket of your coffe maker with a filter.')
    console.log('Wet the filter, and let it drain into your cup.')
    console.log('Discard the water in the cup.')
    console.log('Measure the ground coffe into the wet filter.')
}

function makeCoffee() {
    console.log('Pour water ato wet the ground beans and drain into your cup.')
}

// Promise.all([putWaterToBoil(), Promise.resolve(getReadyToMakeCoffee())]) --- Inicia as duas ao mesmo tempo, quando as duas forem resolvidas elas continuam
putWaterToBOil()
    .then(getReadyToMakeCoffee)
    .then(makeCoffee)
    .then(() => { console.log('Your coffee is ready!') })
    .catch((error) => {
        console.error('Something went wrong: ', error)
    })

console.log('Teste')
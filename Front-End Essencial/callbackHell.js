function putWaterToBOil(callback) {
    console.log('Boil the water')
    setTimeout(() => {
        console.log("We have boiled the water")
        callback()
    }, 5000)
}

function getReadyToMakeCoffee(callback){
    console.log('Grind coffe beans.')
    console.log('Line the bsket of your coffe maker with a filter.')
    console.log('Wet the filter, and let it drain into your cup.')
    console.log('Discard the water in the cup.')
    console.log('Measure the ground coffe into the wet filter.')
    callback()
}

function makeCoffee(callback) {
    console.log('Pour water ato wet the ground beans and drain into your cup.')
    callback()
}

putWaterToBOil(()=>{
    getReadyToMakeCoffee(()=>{
        makeCoffee(()=>{
            console.log('Your coffee is ready!')
        })
    })
})
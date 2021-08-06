let foodInfo = document.querySelector(`.reco`)
document.querySelector(`#recommend`).addEventListener(`click`, foodRec)

const foodPlaces = [`Wienerschnitzel`, `Cubbys`, `Baskin Robbins`]
const foodReco = Math.floor(Math.random() * foodPlaces.length)
// console.log(foodPlaces[foodReco])

function foodRec(){
    foodInfo.textContent = foodPlaces[foodReco]
}
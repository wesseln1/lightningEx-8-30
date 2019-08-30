const domInj = document.querySelector(".container")
const getPic = (date) => {
    console.log(date)
    if (date === ""){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx`)
        .then(nasa => nasa.json())
        .then(parsedNasa => {
            domInj.innerHTML += buildPic(parsedNasa)
        })
    } else {
        fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx`)
        .then(nasa => nasa.json())
        .then(parsedNasa => {
            domInj.innerHTML += buildPic(parsedNasa)
        })
    }
}

const getInfo = (date) => {
    if (date === ""){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx`)
        .then(nasa => nasa.json())
        .then(parsedNasa => {
            domInj.innerHTML += buildInfo(parsedNasa)
        })
    } else {
        fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx`)
        .then(nasa => nasa.json())
        .then(parsedNasa => {
            domInj.innerHTML += buildInfo(parsedNasa)
        })
}}
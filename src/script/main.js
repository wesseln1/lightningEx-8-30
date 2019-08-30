const domInj = document.querySelector(".container")
const getNasa = () => {
    fetch ("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(nasa => nasa.json())
    .then(parsedNasa => {
            console.log(parsedNasa.url)
            domInj.innerHTML += buildNasa(parsedNasa)
        })
    }
    // getNasa()
    const buildNasa = (item) => {
        return `
        <div>
            <h1>${item.title}</h1> 
            <h2>${item.copyright}</h2>
            <h2>${item.date}</h2>
            <p>${item.explanation}</p>
            <img src=${item.url} alt="Nasas photo of the day">
        </div>
        `
    }
    
getNasa()
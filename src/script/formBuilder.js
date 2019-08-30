const buildPic = (item) => {
    return `
        <div>
            <img src=${item.url} alt="Nasas photo of the day">
        </div>
        `
}

const buildInfo = (item) => {
    return `
        <div>
            <h1>${item.title}</h1> 
            <h2>${item.copyright}</h2>
            <h2>${item.date}</h2>
            <p>${item.explanation}</p>
        </div>
        `
}

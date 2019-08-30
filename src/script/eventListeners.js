document.querySelector("#getPic").addEventListener("click", () => {
    let date = document.querySelector("#nasaDate").value
    console.log("clicked 1", date)
    getPic(date);
    document.querySelector("#getInfo").addEventListener("click", () => {
        console.log("clicked")
        getInfo(date)
    })
})

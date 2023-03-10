let dataPast = data.events.filter(event => event.date < data.currentDate)
let categoriesPast = eliminarDuplicados(dataPast.map((event) => event.category)).sort();

categoriesPast.forEach(category =>{
    printCategories('categoriesPast', category)
})


dataPast.forEach(evento => {
    printCard("cardsPast", evento)
})
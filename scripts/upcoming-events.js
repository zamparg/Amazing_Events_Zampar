let dataUpcoming = data.events.filter(event => event.date >= data.currentDate)
let categoriesUpcoming = eliminarDuplicados(dataUpcoming.map((event) => event.category)).sort();

categoriesUpcoming.forEach(category =>{
    printCategories('categoriesUpcoming', category)
})


dataUpcoming.forEach(evento => {
    printCard("cardsUpcoming", evento)
})
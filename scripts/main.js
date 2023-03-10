const dataIndex=data.events
const categoriesNav = document.getElementById("categoriesIndex")
let categoriesIndex = eliminarDuplicados(data.events.map((event) => event.category)).sort();
let categoriesFilterIndex = []


printCategories(categoriesNav, categoriesIndex)
printCard(dataIndex, "cardsIndex")

categoriesNav.addEventListener('change',(e)=>{
    test = checkboxfilter(e , categoriesFilterIndex, categoriesIndex);
    let eventsFilter = eventFilter(dataIndex, test)
    printCard(eventsFilter, "cardsIndex")
} )

// dataIndex.filter((event) => event.name.includes(eventoJS)) ---> forEach

//evento -> categoriesFilter.push()

//dataIndex.filter((event) => event.category === categoryEventoJS) ---> forEach
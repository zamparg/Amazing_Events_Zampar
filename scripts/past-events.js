const dataPast = data.events.filter(event => event.date < data.currentDate)
const categoriesNav = document.getElementById("categoriesPast")
const cardContainer = document.getElementById("cardsPast")
const FilterNavbar = document.forms[0]
const categoriesPast = eliminarDuplicados(dataPast.map((event) => event.category)).sort();
let eventsFilterByCategory = dataPast
let eventsFilterBySearch = dataPast
let categoriesFilterIndex = []
let eventsFilter = []
let searchValue=""

printCategories(categoriesNav, categoriesPast)
printCard(dataPast, cardContainer)

categoriesNav.addEventListener('change',(e)=>{
    categoriesFilterIndex = checkboxfilter(e , categoriesFilterIndex, categoriesPast);

    if(eventsFilterBySearch!=dataPast){
        eventsFilterByCategory = filterByCategory(eventsFilterBySearch, categoriesFilterIndex)
        eventsFilter = filterBySearch(eventsFilterByCategory, searchValue) 
        printCard(eventsFilter, cardContainer)
    }else{
        eventsFilterByCategory = filterByCategory(dataPast, categoriesFilterIndex)
        printCard(eventsFilterByCategory, cardContainer)
    }
})

FilterNavbar.addEventListener('input', (e)=>{
    searchValue=e.target.value.toLowerCase()

    if (eventsFilterByCategory!= dataPast){
        eventsFilterBySearch = filterBySearch(dataPast, searchValue)
        eventsFilter = filterByCategory(eventsFilterBySearch,categoriesFilterIndex)
        printCard(eventsFilter, cardContainer)
    }else{
        eventsFilterBySearch=filterBySearch(dataPast, searchValue)
        printCard(eventsFilterBySearch, cardContainer)
    }
})
const dataIndex=data.events
const categoriesNav = document.getElementById("categoriesIndex")
const cardContainer = document.getElementById("cardsIndex")
const FilterNavbar = document.forms[0]
const categoriesIndex = eliminarDuplicados(data.events.map((event) => event.category)).sort();
let eventsFilterByCategory = dataIndex
let eventsFilterBySearch = dataIndex
let categoriesFilterIndex = []
let eventsFilter = []
let searchValue=""

printCategories(categoriesNav, categoriesIndex)
printCard(dataIndex, cardContainer)

categoriesNav.addEventListener('change',(e)=>{
    categoriesFilterIndex = checkboxfilter(e , categoriesFilterIndex, categoriesIndex);
    
    if(eventsFilterBySearch!=dataIndex){
        eventsFilterByCategory = filterByCategory(eventsFilterBySearch, categoriesFilterIndex)
        eventsFilter = filterBySearch(eventsFilterByCategory, searchValue)
        printCard(eventsFilter, cardContainer)
    }else{
        eventsFilterByCategory = filterByCategory(dataIndex, categoriesFilterIndex)
        printCard(eventsFilterByCategory, cardContainer)
    }
})

FilterNavbar.addEventListener('input', (e)=>{
    searchValue=e.target.value.toLowerCase()

    if (eventsFilterByCategory!= dataIndex){
        eventsFilterBySearch = filterBySearch(dataIndex, searchValue)
        eventsFilter = filterByCategory(eventsFilterBySearch,categoriesFilterIndex)
        printCard(eventsFilter, cardContainer)
    }else{
        eventsFilterBySearch=filterBySearch(dataIndex, searchValue)
        printCard(eventsFilterBySearch, cardContainer)
    }
})
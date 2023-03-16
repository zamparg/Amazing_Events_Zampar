const dataUpcoming = data.events.filter(event => event.date < data.currentDate)
const categoriesNav = document.getElementById("categoriesUpcoming")
const cardContainer = document.getElementById("cardsUpcoming")
const FilterNavbar = document.forms[0]
const categoriesUpcoming = deleteDuplicate(dataUpcoming.map((event) => event.category)).sort();
let eventsFilterByCategory = dataUpcoming
let eventsFilterBySearch = dataUpcoming
let categoriesFilterIndex = []
let eventsFilter = []
let searchValue=""

printCategories(categoriesNav, categoriesUpcoming)
printCard(dataUpcoming, cardContainer)

categoriesNav.addEventListener('change',(e)=>{
    categoriesFilterIndex = checkboxfilter(e , categoriesFilterIndex, categoriesUpcoming);

    if(eventsFilterBySearch!=dataUpcoming){
        eventsFilterByCategory = filterByCategory(eventsFilterBySearch, categoriesFilterIndex)
        eventsFilter = filterBySearch(eventsFilterByCategory, searchValue) 
        printCard(eventsFilter, cardContainer)
    }else{
        eventsFilterByCategory = filterByCategory(dataUpcoming, categoriesFilterIndex)
        printCard(eventsFilterByCategory, cardContainer)
    }
})

FilterNavbar.addEventListener('input', (e)=>{
    searchValue=e.target.value.toLowerCase()

    if (eventsFilterByCategory!= dataUpcoming){
        eventsFilterBySearch = filterBySearch(dataUpcoming, searchValue)
        eventsFilter = filterByCategory(eventsFilterBySearch,categoriesFilterIndex)
        printCard(eventsFilter, cardContainer)
    }else{
        eventsFilterBySearch=filterBySearch(dataUpcoming, searchValue)
        printCard(eventsFilterBySearch, cardContainer)
    }
})
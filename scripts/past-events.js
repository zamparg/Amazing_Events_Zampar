let dataPast
let eventsFilterByCategory
let eventsFilterBySearch
let categoriesPast 

const categoriesNav = document.getElementById("categoriesPast")
const cardContainer = document.getElementById("cardsPast")
const FilterNavbar = document.forms[0]
let categoriesFilterIndex = []
let eventsFilter = []
let searchValue=""

async function start(){
    let result = await fetchData(DataUrl)
    dataPast = result.events.filter(event => event.date < result.currentDate)
    categoriesPast = deleteDuplicate(dataPast.map((event) => event.category)).sort();
    printCategories(categoriesNav, categoriesPast)
    printCard(dataPast, cardContainer)
    eventsFilterByCategory = dataPast
    eventsFilterBySearch = dataPast
}

start()



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
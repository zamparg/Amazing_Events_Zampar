let dataIndex
let categoriesIndex
let eventsFilterByCategory
let eventsFilterBySearch
const categoriesNav = document.getElementById("categoriesIndex")
const cardContainer = document.getElementById("cardsIndex")
const FilterNavbar = document.forms[0]
let categoriesFilterIndex = []
let eventsFilter = []
let searchValue=""

async function start(){
    let result = await fetchData(DataUrl)
    dataIndex = result.events
    categoriesIndex = deleteDuplicate(dataIndex.map((event) => event.category)).sort();
    printCategories(categoriesNav, categoriesIndex)
    printCard(dataIndex, cardContainer)
    eventsFilterByCategory = dataIndex
    eventsFilterBySearch = dataIndex
}

start()


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
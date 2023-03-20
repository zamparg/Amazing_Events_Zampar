const DomGeneralStatistics = document.getElementById('generalStatistics')
const DomPastStatistics = document.getElementById('pastStatistics')
const DomUpcomingStatistics = document.getElementById('upcomingStatistics')

async function start(){
    let data = await fetchData(DataUrl)
    mostrarStats(data)
}

start()


function mostrarStats(info){
    let statsGeneral = objStatsGeneral(info)
    let dataPast = addData(info.events.filter(event => event.date < info.currentDate))
    let dataUpcoming = addData(info.events.filter(event => event.date > info.currentDate)) 
    let statisticsPast = statisticsByCategory(dataPast)
    let statisticsUpcoming = statisticsByCategory(dataUpcoming)


    printStatistics(statisticsPast, DomPastStatistics)
    printStatistics(statisticsUpcoming,DomUpcomingStatistics)
    printGeneral(statsGeneral,DomGeneralStatistics)

}







//FUNCIONES

// Devuelve estadísticas generales en un Objeto
  function objStatsGeneral(data){
    let arrayPercent= data.events.map(event => ({
        'name':event.name,
        'percent': parseFloat(((event.assistance?event.assistance:event.estimate)*100/event.capacity).toFixed(2)),
        'capacity': event.capacity
    }))
    
    let statsGeneral ={
        'highestPercent': arrayPercent.sort((b,a)=>a.percent-b.percent)[0],
        'lowestPercent':arrayPercent.sort((a,b)=>a.percent-b.percent)[0],
        'largerCapacity': arrayPercent.sort((b,a)=>a.capacity-b.capacity)[0]
    }

    return statsGeneral
}

//Agrega data de porcentuales y revenues
function addData(array){
    return array.map(obj => {
        return {...obj, ['revenues']: ((obj.assistance?obj.assistance:obj.estimate)*(obj.price)), ['percents']:( parseFloat(((obj.assistance?obj.assistance:obj.estimate)*100/obj.capacity).toFixed(2)))};
      });
}
//Devuelve objeto con las estadísticas
function statisticsByCategory(data){
    let categories = Array.from([...new Set(data.map((event)=> event.category))]);
    let statistics = categories.map(category => ({
        'category':category,
        'revenues': revenues(data, category),
        'AttPercent': percents(data, category)
    }))
    return statistics
}

// calcula ingresos
function revenues(array, category){  
    let catArray = array.filter(event=>event.category == category)
    let revenue = catArray.reduce((acc,item)=>{
        return acc + item.revenues
    },0)
    return revenue
}
// calcula porcentajes
function percents(array, category){  
    let catArray = array.filter(event=>event.category == category)
    let percent = catArray.reduce((acc,item)=>{
        return acc + item.percents
    },0)
    return (percent/catArray.length).toFixed(2)
}

function printStatistics(array, DomElement){
    DomElement.innerHTML = ''
    array.forEach((data)=>{
        DomElement.innerHTML += `
        <tr>
        <td class="font-italic">${data.category}</td>
        <td>$ ${data.revenues}</td>
        <td>${data.AttPercent}%</td>
        </tr>`
    })
}

function printGeneral(obj,DomElement){

    DomElement.innerHTML = `
    <td>${obj.highestPercent.name} (${obj.highestPercent.percent}%)</td>
    <td>${obj.lowestPercent.name} (${obj.lowestPercent.percent}%)</td>
    <td>${obj.largerCapacity.name} (${obj.highestPercent.capacity} people)</td>
    `
}
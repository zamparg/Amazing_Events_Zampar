async function start(){
    let data = await fetchData(DataUrl)
    mostrarStats(data)
}

//start()


function mostrarStats(info){




}
function statsGeneral(data){
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
let statsGeneral = statsGeneral()

// Events with the highest percentage of attendance	
let highestPercent= arrayPercent.sort((b,a)=>a.percent-b.percent)[0]

// Events with the lowest percentage of attendance	
let lowestPercent =arrayPercent.sort((a,b)=>a.percent-b.percent)[0]
// Event with larger capacity
let largerCapacity = arrayPercent.sort((b,a)=>a.capacity-b.capacity)[0]




/*Upcoming events*/ 
let dataUpcoming = data.events.filter(event => event.date > data.currentDate)
let dataPast = data.events.filter(event => event.date < data.currentDate)
let categoriesUpcoming = Array.from([...new Set(dataUpcoming.map(event=> event.category))]);
let categoriesPast = 


dataPast=dataPast.map(obj => {
    return {...obj, ['revenues']: ((obj.assistance?obj.assistance:obj.estimate)*(obj.price)), ['percents']:( parseFloat(((obj.assistance?obj.assistance:obj.estimate)*100/obj.capacity).toFixed(2)))};
  });
dataUpcoming = dataUpcoming.map(obj => {
    return {...obj, ['revenues']: ((obj.assistance?obj.assistance:obj.estimate)*(obj.price)), ['percents']:( parseFloat(((obj.assistance?obj.assistance:obj.estimate)*100/obj.capacity).toFixed(2)))};
  });


  let statisticsPast = statisticsByCategory(dataPast)
  let statisticsUpcoming = statisticsByCategory(dataUpcoming)




//Devuelve objeto con las estadísticas
function statisticsByCategory(data){
    let categories = Array.from([...new Set(data.map(event=> event.category))]);
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
    return percent/catArray.length
}
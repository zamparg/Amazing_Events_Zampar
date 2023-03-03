function filterMinor(data, dateRef){
    let dataMinor=[]
    for (i =0; i< data.length; i++ ){
        if (data[i].date<dateRef){
            dataMinor.push(data[i])
        }
    }
    return dataMinor
}


function filterMayor(data, dateRef){
    let dataMayor=[]
    for (i =0; i< data.length; i++ ){
        if (data[i].date>dateRef){
            dataMayor.push(data[i])
        }
    }
    return dataMayor
}
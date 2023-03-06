// let dataPast = data.events.filter(event => event.date < data.currentDate)
let dataPast = filterMinor(data.events, data.currentDate)

printCard("cardsPast", dataPast)
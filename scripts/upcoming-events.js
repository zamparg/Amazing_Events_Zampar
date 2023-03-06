// let dataUpcoming = data.events.filter(event => event.date >= data.currentDate)
let dataUpcoming = filterMayor(data.events, data.currentDate)


printCard("cardsUpcoming", dataUpcoming)
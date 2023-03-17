const locationURL = document.location.search
const param = new URLSearchParams(locationURL)
let idParam = param.get("id")
const detailsDom= document.getElementById("details")


async function start(){
    let result = await fetchData(DataUrl)
    const dataDetails = result.events
    let eventDetails = dataDetails.find(event => event._id == idParam)
    printDetails(eventDetails)
}

start()

function printDetails(event){
    detailsDom.innerHTML =` 
    <div class="row g-0">
        <div class="col-md-5 text-center p-2">
            <img src="${event.image}" class="img-fluid rounded-start detail-img " alt="${event.name}">
        </div>
        <div class="col-md-7">
            <div class="card-body">
                <h5 class="card-title text-center">${event.name}</h5>
                <div class="text-center m-1">
                    <small > 📍 ${event.place} </small> - 
                    <small > 📆 ${event.date} </small>
                    <p class="card-text text-center mx-2 my-4"><i> ${event.description}</i></p>
                </div>
                <div class="text-center">
                    
                        <small class="card-text"><i>${event.assistance?"Assistance: ":"Estimate: "}${event.assistance?event.assistance:event.estimate} people</i></small><br>
                        <small >  Capacity: <i>${event.capacity} people </i></small><br>
                        <small> Category: <i>${event.category} </i></small>  
                    
                </div>          
                <div class="d-flex justify-content-center align-items-center my-4 flex-column">
                    <small class="mb-1"> Price: <i>US$ ${event.price}</i> </small>
                    <button class="btn  details-btn p-1 mt-1" type="submit">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    `
}

const dataDetails = data.events
const locationURL = document.location.search
const param = new URLSearchParams(locationURL)
let idParam = param.get("id")
const detailsDom= document.getElementById("details")
let eventDetails = dataDetails.find(event => event._id == idParam)
console.log(eventDetails)

detailsDom.innerHTML =` 
<div class="row g-0">
    <div class="col-md-5 text-center p-2">
        <img src="${eventDetails.image}" class="img-fluid rounded-start detail-img " alt="${eventDetails.name}">
    </div>
    <div class="col-md-7">
        <div class="card-body">
            <h5 class="card-title text-center">${eventDetails.name}</h5>
            <div class="text-center m-1">
                <small > 📍 ${eventDetails.place} </small> - 
                <small > 📆 ${eventDetails.date} </small>
                <p class="card-text text-center mx-2 my-4"><i> ${eventDetails.description}</i></p>
            </div>
            <div class="text-center">
                
                    <small class="card-text"><i>${eventDetails.assistance?"Assistance: ":"Estimate: "}${eventDetails.assistance?eventDetails.assistance:eventDetails.estimate} people</i></small><br>
                    <small >  Capacity: <i>${eventDetails.capacity} people </i></small><br>
                    <small> Category: <i>${eventDetails.category} </i></small>  
                
            </div>          
            <div class="d-flex justify-content-center align-items-center my-4 flex-column">
                <small class="mb-1"> Price: <i>US$ ${eventDetails.price}</i> </small>
                <button class="btn  details-btn p-1 mt-1" type="submit">Add to Cart</button>
            </div>
        </div>
    </div>
</div>
`
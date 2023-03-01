let dataUpcoming = data.events.filter(event => event.date >= data.currentDate)

for (i =0; i< dataUpcoming.length; i++ ) {
    document.getElementById("cardsUpcoming").innerHTML+=`
    <div class="col">
                <div class="card h-100">
                    <img src="${dataUpcoming[i].image}" class="card-img-top p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${dataUpcoming[i].name}</h5>
                        <p class="card-text">${dataUpcoming[i].description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-around align-items-center">
                        <small> $ ${dataUpcoming[i].price} </small>
                        <a href="./pages/details.html" class="btn btn-outline-success search-btn p-0">
                            View more
                        </a>
                    </div>
                </div>
            </div>
    
    `;
}
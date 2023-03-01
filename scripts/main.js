for (i =0; i< data.events.length; i++ ) {
    document.getElementById("cardsIndex").innerHTML+=`
    <div class="col">
                <div class="card h-100">
                    <img src="${data.events[i].image}" class="card-img-top p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.events[i].name}</h5>
                        <p class="card-text">${data.events[i].description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-around align-items-center">
                        <small> $ ${data.events[i].price} </small>
                        <a href="./pages/details.html" class="btn btn-outline-success search-btn p-0">
                            View more
                        </a>
                    </div>
                </div>
            </div>
    
    `;
}




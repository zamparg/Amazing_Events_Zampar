let dataPast = data.events.filter(event => event.date < data.currentDate)

for (i =0; i< dataPast.length; i++ ){
    document.getElementById("cardsPast").innerHTML+=`
    <div class="col">
                <div class="card h-100">
                    <img src="${dataPast[i].image}" class="card-img-top p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${dataPast[i].name}</h5>
                        <p class="card-text">${dataPast[i].description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-around align-items-center">
                        <small> $ ${dataPast[i].price} </small>
                        <a href="./details.html" class="btn btn-outline-success search-btn p-0">
                            View more
                        </a>
                    </div>
                </div>
            </div>
    
    `;
}

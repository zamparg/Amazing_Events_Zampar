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

function printCard(id, array){
    for (i =0; i< array.length; i++ ){
    document.getElementById(id).innerHTML+=`
    <div class="col">
                <div class="card h-100">
                    <img src="${array[i].image}" class="card-img-top p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${array[i].name}</h5>
                        <p class="card-text">${array[i].description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-around align-items-center">
                        <small> $ ${array[i].price} </small>
                        <a href="./details.html" class="btn btn-outline-success search-btn p-0">
                            View more
                        </a>
                    </div>
                </div>
            </div>
    
    `;
    }
}
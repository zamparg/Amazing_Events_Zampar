function printCard(data, id){
    document.getElementById(id).innerHTML=``
    data.forEach((evento)=>{
    document.getElementById(id).innerHTML+=`
    <div class="col">
                <div class="card h-100">
                    <img src="${evento.image}" class="card-img-top p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-around align-items-center">
                        <small> $ ${evento.price} </small>
                        <a href="./details.html" class="btn btn-outline-success details-btn p-0">
                            View more
                        </a>
                    </div>
                </div>
            </div>
    
    `;
})
};

function printCategories(DomElement, data){
    data.forEach((category) =>{
        DomElement.innerHTML+=`
        <li class="categoryItem">
            <input class="form-check-input" type="checkbox" value="${category}" id="${category}">
            <label class="form-check-label" for="${category}">${category}</label>
        </li>
        `
    })
};

function eliminarDuplicados(array){
    arrayCategories=[];
    array.forEach(element => {
        if(arrayCategories.indexOf(element)== -1){
            arrayCategories.push(element)
        }
    });
    return arrayCategories
};

function checkboxfilter(e, array, control){
    if (e.target.checked){
        array.push(e.target.value)
    }else {
        array.splice(array.indexOf(e.target.value),1)
        if(array[0]== undefined) {array = control}
    }; 
    return array
}

function eventFilter(data, arrayCategoriesFilter){
    return data.filter((event)=> arrayCategoriesFilter.indexOf(event.category)!= -1)
}
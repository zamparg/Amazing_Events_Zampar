function printCard(data, DomElement){
    if(data.length == 0){
        DomElement.innerHTML=`<h2 class="text-center ">No Results</h2>`
        return
    }
    DomElement.innerHTML=``
    data.forEach((evento)=>{
    DomElement.innerHTML+=`
    <div class="col">
                <div class="card h-100">
                    <img src="${evento.image}" class="card-img-top p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-around align-items-center">
                        <small> US$ ${evento.price} </small>
                        <a href="./details.html?id=${evento._id}" class="btn details-btn p-1">
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

function deleteDuplicate(array){
    arrayCategories=[];
    array.forEach(element => {
        if(arrayCategories.indexOf(element)== -1){
            arrayCategories.push(element)
        }
    });
    return arrayCategories
};

function checkboxfilter(e, array, control){
    if (array==control) {array=[]};
    
    if (e.target.checked){
        array.push(e.target.value)
    }else {
        array.splice(array.indexOf(e.target.value),1)
        if(array[0]== undefined) {array = control}
    }; 
    return array
}

function filterByCategory(data, arrayCategoriesFilter){
    return data.filter((event)=> arrayCategoriesFilter.includes(event.category))
}

function filterBySearch(array, value){
    return array.filter((event) => event.name.toLowerCase().includes(value))
}
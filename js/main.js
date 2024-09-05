let divData = document.getElementById("divData");

function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products",{nethod: "GET"});
    promesa.then((response) => {
            response.json().then(
                (data)=>{
                    console.log(data);
                    createCards(data);
                }).catch((error)=> console.log("Problema con el json", error));
        }).catch((err)=> console.log("Existió un problema con la solicitud", err));
}//getData

 //crear una card pro cada producto con sus datos esenciales
function createCards(products){
    console.log(products.length);
    console.log(products[0].name);
    divData.innerHTML = "";

    products.forEach((products) =>{
        const card = ` 
        <div class="card" style="width: 18rem;">
            <img src="${products.image}" class="card-img-top" alt="${products.name}">
            <div class="card-body">
            <h5 class="card-title">${products.name}</h5>
            <p class="card-text">${products.description}</p>
            <p class="card-price">Precio: $${products.price}</p>
            <a href="#" class="btn btn-primary">Detalles</a>
            </div>
        </div>`
     
        divData.insertAdjacentHTML(`beforeend`, card);
        })
   
 
}//createCards


getData();
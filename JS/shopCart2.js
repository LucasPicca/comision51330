let shopContent = document.getElementById("shopContent");
let iconCart = document.getElementById("iconCart");
let modalContainer = document.getElementById("modalContainer");


rooms.forEach((room)=>{
    let content = document.createElement("div");
    content.innerHTML += `
    <div class="card card mx-5 my-5" style="max-width: 1000px;">
        <div class="row g-0">
            <div class="col-md-5">
                <img src="${room.img}" class="img-fluid rounded-start" alt="${room.name}">
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title text-center m-4">${room.name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p>$ ${room.price}</p>
                </div>
            </div>
        </div>
    </div>`
    shopContent.append(content)

    let comprar = document.createElement("button");
    comprar.innerText = "Book this Room";
    comprar.className = "btn-cards";

    content.append(comprar)

    comprar.addEventListener("click", ()=>{
        yourCart.push({
            img: room.img,
             Name: room.name,
             Price: room.price,
        });
    });
});
iconCart.addEventListener("click", ()=>{
    let modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Your Cart</h1>`

    modalContainer.append(modalHeader)

    let modalButton = document.createElement("h3");
    modalButton.className = "modal-header-button";
    modalButton.innerText = "X";

    modalHeader.append(modalButton)

    yourCart.forEach((room) =>{
        let cartContent = document.createElement("div");
        cartContent.className = "modal-content";
        cartContent.innerHTML = `
        <img src="${room.img}" class="img-fluid rounded-start" alt="${room.name}">
        <div class= "roomBooked"> Name: ${room.name}</div>
        <div class= "roomBooked"> Price: $${room.price}</div>`

        modalContainer.append(cartContent)
    })

});
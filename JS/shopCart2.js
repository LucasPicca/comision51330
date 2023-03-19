const shopContent = document.getElementById("shopContent");
const iconCart = document.getElementById("iconCart");
const cartContainer = document.getElementById("cartContainer");
const cartCounter = document.getElementById("counter");


rooms.forEach((room) => {
    let content = document.createElement ("div");
    content.className = "cards";
    content.innerHTML = `
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
</div>
    `
shopContent.append(content);

let buy = document.createElement("button");
buy.innerHTML = "Book this room";
buy.className = "btn-cards";

content.append(buy);

buy.addEventListener("click", () => {
    const verifyQuantity = yourCart.some((repeatRoom) => repeatRoom.id === room.id);
    if (verifyQuantity) {
        yourCart.map((ro) => {
            if (ro.id === room.id) {
                ro.quantity++;
            }
        })
    }else {
        yourCart.push({
            id: room.id, 
            img: room.img,
            name: room.name,
            price: room.price,
            quantity: room.quantity,
        });
    };
});
})

const creatingCart = () => {
cartContainer.innerHTML = "";
cartContainer.style.display = "flex";
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header";
modalHeader.innerHTML = `
<h1>Cart</h1>
`
cartContainer.append(modalHeader);

const modalButton = document.createElement("p");
modalButton.innerText = "X";
modalButton.className = "modal-header-button";

modalButton.addEventListener("click", () => {
    cartContainer.style.display = "none"
});

modalHeader.append(modalButton);

yourCart.forEach((room, index) =>{
    const cartContent = document.createElement("div");
 
    cartContent.className = "selectedRoom";
    cartContent.innerHTML = `
    <img src="${room.img}" class="img-fluid rounded-start" alt="${room.name}">
    <div class= "roomBookedName"> Name: ${room.name}</div>
    <div class= "roomBooked"> Price: $${room.price}</div>
    <div class= "roomBooked"> Rooms: ${room.quantity}</div>
    <div class= "roomBooked"> Subtotal: $${room.price * room.quantity}</div>
    <button class="remove-room" id= "removeRoom" role="button" onClick ="removeRoom(${index})">Remove this Room</button>
    `
    cartContainer.append(cartContent);
});

//SUMA TOTAL
const total = yourCart.reduce((acc, el)=> acc + el.price * el.quantity, 0);
const totalCart = document.createElement("div");
totalCart.className = "totalCart";
totalCart.innerHTML = `
Total: $ ${total}
` 
cartContainer.append(totalCart);
};

iconCart.addEventListener("click", creatingCart);
//ELIMINA ROOM
const removeRoom = (index) =>{
    yourCart.splice(index, 1)
    creatingCart();
};


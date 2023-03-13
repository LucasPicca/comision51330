let card = document.getElementById("cards");
let icon = document.getElementById("iconCart");
let divCart = document.getElementById("cart");
let showTotal = document.getElementById("totalContainer");


rooms.forEach((c, index)=>{
        card.innerHTML += `
    <div class="card card mx-5 my-5" style="max-width: 1000px;">
        <div class="row g-0">
            <div class="col-md-5">
                <img src="${c.img}" class="img-fluid rounded-start" alt="${c.name}">
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title text-center m-4">${c.name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p>$ ${c.price}</p>
                    <button class="btn-cards" onClick= "addCart(${index})" >Book this Room</button>          
                </div>
            </div>
        </div>
    </div>`
});    


const addCart = (index)=>{
    const clickButton = yourCart.findIndex((element) =>{
    return element.id === rooms[index].id
    })
    if (clickButton === -1){
        const addRoom = rooms[index]
        addRoom.cantidad = 1
        yourCart.push(addRoom)
        getCart();
    } else {
        yourCart[clickButton].cantidad += 1
        getCart();
    }
};

const getCart = ()=>{
    divCart.className = "cart";
    divCart.innerHTML = "";
    yourCart.forEach((room, index)=>{
        const cartContainer = document.createElement("div");
        cartContainer.className = "selectedRoom";
        cartContainer.innerHTML = `
        <img src="${room.img}" class="img-fluid rounded-start" alt="${room.name}">
        <div class= "roomBooked"> Name: ${room.name}</div>
        <div class= "roomBooked"> Total Rooms: ${room.cantidad}</div>
        <div class= "roomBooked"> Price: $${room.price}</div>
        <div class= "roomBooked"> Subtotal: $${room.price * room.cantidad}</div>
        <button class="btn-cards" id= "removeRoom" role="button" onClick ="deleteRooms(${index})">Remove from your Cart</button>
        `
        divCart.appendChild(cartContainer);
    })
//SUMA DEL TOTAL
    const total = yourCart.reduce((acc, el)=> acc + el.price * el.cantidad, 0);
    total.className = "show-total"
    const totalCart = document.createElement("div"); 
        totalCart.className = "totalPay"
        totalCart.innerHTML =`Total Amount $${total}`
        showTotal.append(totalCart) 
}; 
//ELIMINA HABITACION
const deleteRooms = (index) =>{
    yourCart.splice(index, 1)
    getCart();
}
    





/* 
icon.addEventListener("click", ()=>{
showTotal.style.display = "flex"
showTotal.innerHTML = "";
const cartHeader = document.createElement("div");
cartHeader.className = "cartHeader";
cartHeader.innerHTML = `<h2 class= "cartHeaderTitle"> Your Cart </h2>`
showTotal.append(cartHeader);

const cartButton = document.createElement("h2");
cartButton.innerText = "X"
cartButton.className = "cartHeaderButton";
cartButton.addEventListener("click", ()=>{
    showTotal.style.display = "none";
})

cartHeader.appendChild(cartButton);

}) */



//PARA QUITAR*/

/* const inputName = document.getElementById("name");
const inputCountry = document.getElementById("country");
const btnSave = document.getElementById("saveBtn");

let users = [];

const user = localStorage.getItem("users")
const usersLs = JSON.parse(localStorage.getItem("users"));

if(usersLs){
    users = usersLs
}


const userSaved = ()=> {
    const getName = inputName.value;
    const getCountry = inputCountry.value;

    users.push({
        Name: getName,
        Country: getCountry,
    })
    localStorage.setItem("users", JSON.stringify(users))
    inputName.value = "";
    inputCountry.value = "";
}
users.forEach((user)=>{
    const li = document.createElement("li")
    li.innerHTML = `
    <h4> Name: ${user.inputName}</4>
    <p>  Country: ${user.inputCountry}
    `
    inputName.appendChild(li)
}) */



///PARA QUITAR*//



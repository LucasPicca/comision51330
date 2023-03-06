let card = document.getElementById("cards")

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
                    <button class="btn-cards" role="button" onClick ="addCart(${index})">Book this Room</button>          
                </div>
            </div>
        </div>
    </div>`
 /*    card.className = "cardFunction" */
})
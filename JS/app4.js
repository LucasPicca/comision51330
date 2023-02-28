let card = document.getElementById("cards")

rooms.map((c)=>{
    card.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${c.img}" class="img-fluid rounded-start" alt="${c.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-center">${c.name}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    `
})
const items = [
  {
    name:"T-shirt",
    price:10,
    img:"img/tee.png"
  },
  {
    name:"Cap",
    price:15,
    img:"img/caps.png"
  },
  {
    name:"Notebook",
    price:2,
    img:"img/notebooks.png"
  },
]

let cart = [];

function inputChange(i, name, price ){
  const article = document.querySelectorAll("article")[i];
  const button = article.querySelector("button");
  const input = article.querySelector("input");
  button.onclick = () => {
    cart.push({
      quantity: input.value,
      name,
      price
    })
    printCartItems();
  }
}

function printCartItems(){
  const list = document.querySelector("aside ul");
  list.innerHTML = "";
  cart.forEach(item => list.innerHTML += `
    <li>
    ${item.name} / ${item.quantity} / $${item.price}.00</li>
  `)
  updateTotal();
}

function updateTotal(){
  const totalElement = document.querySelector("#total-price");
  const total = cart.reduce((acc, current)=> acc + (current.price * current.quantity), 0);
  totalElement.innerText = `$${total}.00`
}

const section = document.querySelector("section");

items.forEach((item, i) =>{
  section.innerHTML += `
    <article class="item">
    <img src="${item.img}"/>
    <p>${item.name}</p>
    <small>$${String(item.price)}.00</small>
    <div>
      <input type="number" placeholder="quantity" onchange='inputChange(
        ${i},
        "${item.name}",
        "${item.price}")'/>
      <button>Add to Card</button>
    </div>
    </article>
    
  `
})
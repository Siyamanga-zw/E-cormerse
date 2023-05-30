let products = document.querySelector('section#products .row');
let productsContent=[{
    id:1,
    image: 'https://i.postimg.cc/SNVhK0Px/female-Jacket1.jpg',
text:"dustypink winter jacket",
details:"R289.99"
},
{
    id:2,
    image: 'https://i.postimg.cc/zBSQNS96/female3.jpg',
text:"black leather jacket",
details:"R350.00"
},
{
    id:3,
    image: 'https://i.postimg.cc/C5nm1Gtw/female2.jpg',
text:"red rain coat",
details:"R400.99"
},

]

// female jackets
productsContent.forEach((content)=>{
    products.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${content.image}" class="card-img-top" alt="Jackets">
  <div class="card-body">
    <h5 class="card-title">${content.text}</h5>
    <p class="card-text">${content.details}</p>
    <a href="" class="btn btn-primary">Add to cart</a>
  </div>
</div>`
})

let maleproducts = document.querySelector('section#products .row:last-child');
let maleproductsContent = [
    
        {
            id: 1,
            image: 'https://i.postimg.cc/SNW43zrM/hoodiesirt.webp',
        text:"hoodie sweartshirt",
        details:"R1890.99"
        },
        {
            id:2 ,
            image: 'https://i.postimg.cc/hvQ26TRQ/blackblazer.webp',
        text:"black blazeer",
        details:"R699.99"
        },
        {
            id:3,
            image: 'https://i.postimg.cc/C5nm1Gtw/female2.jpg',
        text:"red rain coat",
        details:"R400.99"
        }
]
// male section
maleproductsContent.forEach((content)=>{
    maleproducts.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${content.image}" class="card-img-top" alt="Jackets">
  <div class="card-body">
    <h5 class="card-title">${content.text}</h5>
    <p class="card-text">${content.details}</p>
    <a href="" class="btn btn-primary">Add to cart</a>
  </div>
</div>`
})

function Cart(){
    
}
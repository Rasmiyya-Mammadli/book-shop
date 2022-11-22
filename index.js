const books = [
    {
        author: "J.K.Rowling",
        title: "Philosopher's Stone (1997)",
        price: '30$',
        image: "https://m.media-amazon.com/images/I/51DF6ZR8G7L._AC_SY780_.jpg",
    },
    {
        author: "J.K.Rowling",
        title: "Chamber of Secrets (1998)",
        price:'30$',
        image: "https://m.media-amazon.com/images/I/51mFoFmu0EL._AC_SY780_.jpg",
    },
    {
      author: "J.K.Rowling",
      title: "Prisoner of Azkaban (1999)",
      price:'30$',
      image: "https://m.media-amazon.com/images/I/91FrOHBkPxL.jpg",
    },
    {
        author: "J.K.Rowling",
        title: "Goblet of Fire (2000)",
        price:'30$',
        image: "https://m.media-amazon.com/images/I/71ykU-RQ0nL.jpg",
      },
      {
        author: "J.K.Rowling",
        title: "Order of the Phoenix (2003)",
        price:'30$',
        image:"https://m.media-amazon.com/images/I/51lFAzVQUxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      },
      {
        author: "J.K.Rowling",
        title: "Half-Blood Prince (2005)",
        price:'30$',
        image: "https://m.media-amazon.com/images/I/51xndCIMHzL._AC_SY780_.jpg",
      },
      {
        author: "J.K.Rowling",
        title: "Deathly Hallows (2007)",
        price:"30$",
        image: "https://m.media-amazon.com/images/I/51jyI6lYi1L._AC_SY780_.jpg",
      },
      {
        author: "J.K.Rowling",
        title: "Books set",
        price:"200$",
        image: "https://i.pinimg.com/originals/c5/ca/f0/c5caf0bb3881a75d5ae7019ad59232dc.jpg",
      },
  ];

    let fragment = new DocumentFragment();
    const header2div=document.createElement('div');
    header2div.className='header2';
    document.body.appendChild(header2div);
    const main=document.createElement('main');
    main.className='home';
    main.setAttribute('id','home');
    document.body.appendChild(main);
    const maindiv=document.createElement('div');
    maindiv.className='row';
    main.appendChild(maindiv);
    const contentdiv=document.createElement('div');
    contentdiv.className='content';
    const bookdiv=document.createElement('div');
    bookdiv.className='books';
    maindiv.appendChild(contentdiv);
    maindiv.appendChild(bookdiv);

    const parentElement = document.querySelector('.books');
 
    books.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className='draggable';
    bookCard.setAttribute('draggable','true');
    bookCard.setAttribute('id', 'draggable')
    bookCard.setAttribute('ondragstart','dragstart_handler(event)')
    const img = document.createElement('img');
    img.src = book.image;
    img.classList.add('harrybooks')
     bookCard.appendChild(img);
     const p = document.createElement('p');
     p.innerHTML=book.author;
     bookCard.appendChild(p);
     const h4 = document.createElement('h4');
     h4.innerHTML=book.title;
     h4.className='booktitle';
     bookCard.appendChild(h4);
     const h5 = document.createElement('p');
     h5.innerHTML=book.price;
     h5.className='pricep';
     bookCard.appendChild(h5);
    fragment.appendChild(bookCard);
    const a = document.createElement('a');
    a.innerText='Show more';
    a.className='myBtn';
     
     bookCard.appendChild(a);
     const button = document.createElement('button');
     button.innerText='add to bag';
     button.className='bag'
     button.setAttribute('id','bag');
     bookCard.appendChild(button);
});
parentElement.appendChild(fragment);


const parentdiv=document.querySelector('.content')
const h3=document.createElement('h3');
h3.innerHTML='welcome to Harry Potter Book shop! ';
const p1=document.createElement('p');
p1.innerHTML='This page is for Harry Potter fans who know that they own the American hardcover edition of the series published by Scholastic and only want our custom Harry Potter Hogwarts jackets for their existing books.'
parentdiv.appendChild(h3);
parentdiv.appendChild(p1);
const acontent=document.createElement('a');
acontent.href='';
acontent.className='btn';
acontent.innerText='Shop now!';
parentdiv.appendChild(acontent);

const rowdiv=document.querySelector('.row');
const rowimg=document.createElement('img');
rowimg.src='https://oxfordbookstore.com/wp-content/uploads/2020/12/stand.png';
rowimg.className='stand';
rowdiv.appendChild(rowimg);

//create navbar

const headerdiv=document.querySelector('.header2');
const nav=document.createElement('nav');
nav.className='navbar';
headerdiv.appendChild(nav);
const alogo=document.createElement('a');
 const icon=document.createElement('i');
 icon.className='fas fa-book';
 alogo.innerHTML='BookShop';
 nav.appendChild(alogo);
 alogo.appendChild(icon);
const a1header=document.createElement('a');
a1header.href='#home';
a1header.innerHTML='home';
nav.appendChild(a1header);
const a2header=document.createElement('a');
a2header.href='#featured';
a2header.innerHTML='featured';
nav.appendChild(a2header);
const a3header=document.createElement('a');
a3header.href='#arrivals';
a3header.innerHTML='arrivals';
nav.appendChild(a3header);
const a4header=document.createElement('a');
a4header.href='#reviews';
a4header.innerHTML='reviews';
nav.appendChild(a4header);
const a5header=document.createElement('a');
a5header.href='#blogs';
a5header.innerHTML='blogs';
nav.appendChild(a5header);
const carta=document.createElement('a');
carta.className="carta";
carta.href='#';
nav.appendChild(carta);
const carticon=document.createElement('i');
carticon.className="fas fa-shopping-cart";
carta.appendChild(carticon);
carta.setAttribute('ondrop','drop_handler(event)');
carta.setAttribute('ondragover','dragover_handler(event)');
carta.setAttribute('id','target');



const span1=document.createElement('span');
span1.className='spanned';
carticon.appendChild(span1);


//finish navbar

//create modal page

const modaldiv=document.createElement('div');
modaldiv.className='modal';
modaldiv.setAttribute('id','myModal');
document.body.appendChild(modaldiv);
const bodydiv=document.createElement('div');
bodydiv.className='modal-content';
modaldiv.appendChild(bodydiv);
const spanmodal=document.createElement('span');
spanmodal.className='close';
spanmodal.innerHTML='&times;';
const modalh3=document.createElement('h3');
modalh3.innerHTML='Harry Potter';
const modalp= document.createElement('p');
modalp.innerHTML='Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.'
const modalbutton=document.createElement('button');
modalbutton.innerText='close';
modalbutton.className='modalbutton';
bodydiv.appendChild(spanmodal);
bodydiv.appendChild(modalh3);
bodydiv.appendChild(modalp);
bodydiv.appendChild(modalbutton);

var modal = document.getElementById("myModal");

var btn = document.querySelectorAll(".myBtn")

var bcn=[...btn].forEach(a=>a.addEventListener('click',()=>
modal.style.display = "block"
))
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
var button = document.getElementsByClassName("modalbutton")[0];
button.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// finish modal page

//create shoping cart

const section=document.createElement('section');
section.className='container'
 section.className='content-section'
 section.setAttribute('ondrop','drop_handler(event)');
section.setAttribute('ondragover','dragover_handler(event)');
section.setAttribute('id','target');
 document.body.appendChild(section)
 const spancart=document.createElement('span');
spancart.className='closecart';
spancart.innerHTML='&times;';
section.appendChild(spancart)
const h2=document.createElement('h2');
h2.innerHTML='CART';
h2.className='section-header';
section.appendChild(h2)
const cartdiv=document.createElement('div')
cartdiv.className='cart-row';
section.appendChild(cartdiv)
const cartspan=document.createElement('span');
cartspan.classList.add('cart-item')
cartspan.classList.add('cart-header')
cartspan.classList.add('cart-column')
cartspan.innerHTML='ITEM'
const cartspan2=document.createElement('span');
cartspan2.classList.add('cart-price');
cartspan2.classList.add('cart-header');
cartspan2.classList.add('cart-column');
cartspan2.innerHTML='PRICE';
const cartspan3=document.createElement('span');
cartspan3.classList.add('cart-quantity');
cartspan3.classList.add('cart-header');
cartspan3.classList.add('cart-column');
cartspan3.innerHTML='QUANTITY';
cartdiv.appendChild(cartspan);
cartdiv.appendChild(cartspan2);
cartdiv.appendChild(cartspan3);
const itemsdiv=document.createElement('div');
itemsdiv.className='cart-items';
section.appendChild(itemsdiv);
const totaldiv=document.createElement('div');
totaldiv.className='cart-total';
section.appendChild(totaldiv);
let strong=document.createElement('strong');
strong.className='cart-total-title'
strong.innerHTML='Total';
totaldiv.appendChild(strong);
let totalspan=document.createElement('span');
totalspan.className='cart-total-price'
totalspan.innerHTML='$0';
totaldiv.appendChild(totalspan);
const purchasebutton=document.createElement('a');
purchasebutton.href='form.html'
purchasebutton.classList.add('btn-primary');
purchasebutton.classList.add('btn-purchase');
purchasebutton.innerHTML='CONFIRM';

section.appendChild(purchasebutton);



var spancart1 = document.getElementsByClassName("closecart")[0];
spancart1.onclick = function() {
  section.style.display = "none";
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.querySelectorAll('.bag')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {

  var cartItems = document.getElementsByClassName('cart-items')[0]
  
  updateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}


function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement
  var title = shopItem.querySelectorAll('.booktitle')[0].innerText
  var price = shopItem.querySelectorAll('.pricep')[0].innerText
  var imageSrc = shopItem.querySelectorAll('.harrybooks')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }




  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}


















var counter=0
var isClicked=false
var sectionn=section.style.display='none';
carta.addEventListener('click',()=>{
  isClicked=!isClicked
  if (isClicked==true) {
     section.style.display='block';
  }else{
    section.style.display='none';
  }
    
    
  
})



 var bags=document.querySelectorAll('.bag');
 var bag=[...bags].map(ba=>ba.addEventListener('click',()=>{

  counter+=1
  document.querySelector('.spanned').style.display='inline'
  document.querySelector('.spanned').innerHTML=`${Number(counter)}`
 }))
 console.log(bags);




//drag and drop


function dragstart_handler(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.bookCard);
  let img = new Image();
  img.src = books.image;
  ev.dataTransfer.setDragImage(img, 10, 10);
  ev.dataTransfer.dropEffect = "copy";
}

window.addEventListener("DOMContentLoaded", () => {
  
  const element = document.getElementById("draggable");
  element.addEventListener("dragstart", dragstart_handler);
});

function dragover_handler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "copy";
}
function drop_handler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  ev.target.appendChild(document.getElementById(data));
}

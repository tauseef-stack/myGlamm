
let data1 = `[
    {
        "Name": "LIT SATIN MATTE LIPSTICK",
        "Price": "495",
        "Image": "https://files.myglamm.com/site-images/400x400/1623081490108-modern-family-5.jpeg",
        "Description": "Hi-Wattage 3D Satin Matte Finish Lipstick With Intense Colour Payoff"
    },
    {
        "Name": "LIT LIQUID MATTE LIPSTICK",
        "Price": "395",
        "Image": "https://files.myglamm.com/site-images/400x400/01-FBO1.jpg",
        "Description": "Moringa Oil Enriched Matte Lipstick"
    },
    {
        "Name": "MANISH MALHOTRA HI-SHINE LIPSTICK",
        "Price": "950",
        "Image": "https://files.myglamm.com/site-images/400x400/vintage-wine-7.jpeg",
        "Description": "Lightweight, Long-wear Lipsticks"
    },
    {
        "Name": "ULTIMATTE LONG-STAY MATTE LIPSTICK",
        "Price": "699",
        "Image": "https://files.myglamm.com/site-images/400x400/SHOWGIRL.jpg",
        "Description": "Hyaluronic Acid-enriched, Moisturising, Matte Slim Lipstick"
    },
    {
        "Name": "LIT CREAMY MATTE LIPSTICK",
        "Price": "595",
        "Image": "https://files.myglamm.com/site-images/400x400/1623082287293-tequila-sunrise-1.jpeg",
        "Description": "Precision Perfect Matte Slimstick"
    },
    {
        "Name": "POSE HD LIPSTICK",
        "Price": "599",
        "Image": "https://files.myglamm.com/site-images/400x400/002-true-red-1.jpeg",
        "Description": "HD Long-wear Matte Lipstick"
    },
    {
        "Name": "K.PLAY FLAVOURED LIPSTICK",
        "Price": "545",
        "Image": "https://files.myglamm.com/site-images/400x400/1623083218517-11-pink-guava-smash-1.jpeg",
        "Description": "Pink Guava Flavoured Vitamin E-enriched Creamy Lipstick"
    }
]`;
localStorage.setItem("Lipstick", data1);
var arr = JSON.parse(localStorage.getItem("Lipstick"));
console.log(arr);
arr.forEach((elem) => {
let div1 = document.createElement("div");
let name = document.createElement("h3");
name.innerHTML = `${elem.Name}`;
// console.log(name);
let price = document.createElement("h2");
price.innerHTML = `Price: <span>&#8377;<span> ${elem.Price}`;
// console.log(price)
let img = document.createElement("img");
img.setAttribute("src", elem.Image);
//console.log(img)
let div2 = document.createElement("div");
var btn = document.createElement("button");
btn.onclick = function () {
AddToCart(elem);
};
var desc = document.createElement("h3");
desc.innerHTML = `${elem.Description}`;
desc.setAttribute("class", "desc");
btn.textContent = "Add To Bag";
//console.log(btn)
div1.append(img);
div1.setAttribute("class", "imgdiv");

// console.log(div1)
div2.append(name, desc, price, btn);
div2.setAttribute("class", "descdiv");
div3 = document.createElement("div");
div3.append(div1, div2);
div3.setAttribute("class", "maindom");
let head = document.querySelector(".inner-container");
head.append(div3);
});

function AddToCart(elem) {
let arr3 = localStorage.getItem("myglemmbag");
if (arr3 == null) {
arr3 = [];
} else {
arr3 = JSON.parse(arr3);
}
var exist = false;
for (var i = 0; i < arr3.length; i++) {
if (arr3[i].Name == elem.Name) {
  alert("You have Already Added This Item Into Bag");
  exist = true;
  break;
}
}
if (!exist) {
arr3.push(elem);
localStorage.setItem("myglemmbag", JSON.stringify(arr3));
alert("Item Successfully Added To Bag");
}
}

let data = `[
    {
        "Name": "LIT NAIL ENAMEL",
        "Price": "190",
        "Image": "https://files.myglamm.com/site-images/400x400/1623081862539-bad-romance-5.jpeg",
        "Description": "Chip-resistant, Glossy Nail Enamel"
    },
    {
        "Name": "LIT MATTE NAIL ENAMEL",
        "Price": "220",
        "Image": "https://files.myglamm.com/site-images/400x400/14-bye-felicia-2.jpeg",
        "Description": "Chip-resistant, Matte Nail Enamel"
    },
    {
        "Name": "WANDERLUST SAND MATTE NAIL POLISH 2020",
        "Price": "249",
        "Image": "https://files.myglamm.com/site-images/400x400/1623081747548-ANGEL-CAKE-3.jpeg",
        "Description": "Long-lasting Sand Matte Nail Polish"
    },
    {
        "Name": "MANISH MALHOTRA NAIL LACQUER",
        "Price": "450",
        "Image": "https://files.myglamm.com/site-images/400x400/1623081265647-opulent-ocean-6.jpeg",
        "Description": "Hi-Shine Gel Finish Nail Enamel | Made in Italy"
    },
    {
        "Name": "WANDERLUST CHROME MATTE NAIL POLISH 2020",
        "Price": "249",
        "Image": "https://files.myglamm.com/site-images/400x400/ARUBA-copy.jpg",
        "Description": "Long-lasting Chrome Matte Nail Polish"
    },
    {
        "Name": "MANISH MALHOTRA GEL FINISH NAIL LACQUER",
        "Price": "450",
        "Image": "https://files.myglamm.com/site-images/400x400/1623136708385-Summer-Blue-Open.jpeg",
        "Description": "Hi-Shine Gel Finish Nail Enamel"
    },
    {
        "Name": "WANDERLUST SAND MATTE NAIL POLISH",
        "Price": "249",
        "Image": "https://files.myglamm.com/site-images/400x400/1623081734970-BANOFFEE-PIE-1.jpeg",
        "Description": "Long-lasting Sand Matte Nail Polish"
    },
    {
        "Name": "WANDERLUST CHROME MATTE NAIL POLISH",
        "Price": "249",
        "Image": "https://files.myglamm.com/site-images/400x400/ARUBA-copy_1.jpg",
        "Description": "Long-lasting Chrome Matte Nail Polish"
    }
]`;
localStorage.setItem("NialPolish", data);
var arr = JSON.parse(localStorage.getItem("NialPolish"));
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
let arr3;
arr3 = localStorage.getItem("myglemmbag");
if (arr3 == null) {
  arr3 = [];
} else {
  arr3 = JSON.parse(arr3); //Json.parse(localStorage.getItem('location2'));
}
var exist = false;
for (var i = 0; i < arr3.length; i++) {
  if (arr3[i].Name == elem.Name) {
    //Remeber "N" in Name
    alert("You have Already Added This Item Into Cart ");
    exist = true;
    break;
  }
}
if (!exist) {
  arr3.push(elem);
  localStorage.setItem("myglemmbag", JSON.stringify(arr3));
  alert("Item Successfully Added To Bag"); //We are storing the data in different key as Fav;
}
}
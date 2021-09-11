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

//nailpolish

localStorage.setItem("nailPolish", data);
let nailPolish = JSON.parse(localStorage.getItem("nailPolish"));

//lipstick

localStorage.setItem("lipstick", data1);
let lipstick = JSON.parse(localStorage.getItem("lipstick"));

// let lipstick = JSON.parse(localStorage.getItem("lipstick"))

let soloData = `[
  {
        "Name": "MANISH MALHOTRA HI-SHINE LIPSTICK",
        "Price": "950",
        "Image": "https://files.myglamm.com/site-images/400x400/vintage-wine-7.jpeg",
        "Description": "Lightweight, Long-wear Lipsticks"
    }
]`;

localStorage.setItem("soloD", soloData);

var soloD = JSON.parse(localStorage.getItem("soloD"));
// console.log(soloD);

function addToBag() {
var count = 0;

let arr;
arr = localStorage.getItem("myglemmbag");

if (arr == null) {
  arr = []; //this is for first time visitor.
  arr.push(soloD[0]);
  localStorage.setItem("myglemmbag", JSON.stringify(arr));
  alert("Added To Cart !!");
  count++;
  // break;
}
if (arr != null) {
  arr = JSON.parse(arr); //Array format conversion
  // console.log(arr);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].Name == soloD[0].Name && arr[j].Price == soloD[0].Price) {
      alert("Already Added");
      break;
      count++;
    }

    if (j == arr.length - 1 && count == 0) {
      arr.push(soloD[0]);
      localStorage.setItem("myglemmbag", JSON.stringify(arr));
      alert("Added To Cart !!");
      count++;
      break;
    }
  }
}

// var data24 = JSON.parse(localStorage.getItem('myglemmbag'));
//   console.log(data24)
}

function home() {
window.location.href = "../index.html";
}
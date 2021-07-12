var arr2 = JSON.parse(localStorage.getItem("myglemmbag"));
  console.log(arr2);
  var summation = 0;
  arr2.forEach((elem) => {
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

    var desc = document.createElement("h3");
    desc.innerHTML = `${elem.Description}`;
    desc.setAttribute("class", "desc");
    //console.log(btn)
    div1.append(img);
    div1.setAttribute("class", "imgdiv");
    // console.log(div1)
    div2.append(name, desc, price);
    div2.setAttribute("class", "descdiv");
    div3 = document.createElement("div");
    div3.append(div1, div2);
    div3.setAttribute("class", "maindom");
    let head = document.querySelector(".outter");
    head.append(div3);
    summation += Number(elem.Price);
  });

  var h1 = document.createElement("h1");
  h1.innerHTML = `Total Added Products = ${arr2.length}`;
  var h2 = document.createElement("h1");
  h2.innerHTML = `Total Amount = <span>&#8377;<span/> ${summation}`;
  var sum = document.querySelector(".small1");
  sum.append(h1, h2);

  var count = 0;
  function discount() {
    var code = document.querySelector(".promo").value;

    if (code == "masai25" && count == 0) {
      summation = Math.round(0.75 * summation);
      console.log(summation);
      h2.innerHTML = `Total Amount = <span>&#8377;<span/> ${summation}`;
      count++;
      document.querySelector(".promo").value = null;
      alert("Discount Applied Successfully");
      var total = `[
        {
        "price" : ${summation}
        }
      ]`;
      localStorage.setItem("Price", total);
    } else if (code == "masai25" && count > 0) {
      alert("Discount is Alredy Applied");
      document.querySelector(".promo").value = null;
    } else {
      alert("Please Type Valid Promo Code");
      document.querySelector(".promo").value = null;
    }
  }

  function CheckOut() {
    window.location.href = "payment.html";
  }
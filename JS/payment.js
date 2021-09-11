
    var div = document.getElementById("total");
    var res = JSON.parse(localStorage.getItem("Price"));
    console.log(res);
    div.innerHTML = `<span>&#8377;<span/> ${res[0].price}`;
    function clicked(e) {
      event.currentTarget.style.border = "1px solid black";
      event.currentTarget.style.backgroundColor = "#fcf8ed";
    }

    function paym() {
      if (
        document.getElementById("card").value == "" ||
        document.getElementById("name").value == "" ||
        document.getElementById("validity").value == ""
      ) {
        alert("enter valid details");
      } else {
        window.location.href = "../HTML/success.html";
      }
    }
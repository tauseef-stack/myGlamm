var count = 1;
  setInterval(function () {
    document.getElementById("radio" + count).checked = true;
    document.querySelector(".auto-btn" + count).style.background =
      "rgb(255,151,151)";
    if (count > 1 && count < 9) {
      document.querySelector(".auto-btn" + (count - 1)).style.background = "";
    }

    count++;
    if (count > 8) {
      document.querySelector(".auto-btn" + (count - 1)).style.background = "";
      count = 1;
    }
  }, 5000);

  //Manual Carousel Button Functionality
  var firstdiv1 = document.querySelectorAll(".content");
  var button2 = document.querySelector("#button2");
  button2.addEventListener("click", right);
  var i = 0;
  function right() {
    console.log("i am working");
    i++;
    console.log(i);
    for (var l of firstdiv1) {
      console.log(l);
      if (i == 0) {
        l.style.left = "0%";
      }
      if (i == 1) {
        l.style.left = "-11.11%";
      }
      if (i == 2) {
        l.style.left = "-22.22%";
      }
      if (i == 3) {
        l.style.left = "-33.33%";
      }
      if (i == 4) {
        l.style.left = "-44.44%";
      }
      if (i == 5) {
        l.style.left = "-55.55%";
      }
      if (i > 5) {
        i = 5;
      }
    }
  }
  var button1 = document.querySelector("#button1");
  button1.addEventListener("click", left);
  function left() {
    console.log("i am working");
    i--;
    console.log(i);
    for (var l of firstdiv1) {
      console.log(l);
      if (i == 0) {
        l.style.left = "0%";
      }
      if (i == 1) {
        l.style.left = "-11.11%";
      }
      if (i == 2) {
        l.style.left = "-22.22%";
      }
      if (i == 3) {
        l.style.left = "-33.33%";
      }
      if (i == 4) {
        l.style.left = "-44.44%";
      }
      if (i == 5) {
        l.style.left = "-55.55";
      }
      if (i < 0) {
        i = 0;
      }
    }
  }
  var ncount = 0;
  var ntemp = 0;
  function moveLeft() {
    var div = document.getElementsByClassName("nlooks");
    for (var i = 0; i < div.length; i++) {
      div[i].style.transform = `translateX(0)`;
      ntemp = 0;
    }
  }
  function moveRight() {
    ntemp++;
    var div = document.getElementsByClassName("nlooks");
    for (var i = 0; i < div.length; i++) {
      var res = (ntemp % (div.length - 3)) * 18.6;
      div[i].style.transform = `translateX(-${res}rem)`;
    }
  }
  function videoLeft() {
    var div = document.getElementsByClassName("nvideo");
    for (var i = 0; i < div.length; i++) {
      div[i].style.transform = `translateX(0)`;
      ncount = 0;
    }
  }
  function videoRight() {
    ncount++;
    var div = document.getElementsByClassName("nvideo");
    for (var i = 0; i < div.length; i++) {
      var res = (ncount % (div.length - 2)) * 25;
      div[i].style.transform = `translateX(-${res}rem)`;
    }
  }
  function playvid() {
    var target = document.getElementById("vidhome");
    target.removeAttribute("class");
  }
  function removevid() {
    var target = document.getElementById("vidhome");
    target.setAttribute("class", "display");
  }

  var a = 0;
  function a_right() {
    var firstdiv = document.querySelectorAll(".a_p2");

    console.log("i am working");
    a++;
    console.log(a);
    for (var l of firstdiv) {
      console.log(l);
      if (a == 0) {
        l.style.left = "0%";
      }
      if (a == 1) {
        l.style.left = "-33.23%";
      }
      if (a == 2) {
        l.style.left = "-66.46%";
      }
      if (a > 2) {
        a = 2;
      }
    }
  }

  function a_left() {
    var firstdiv = document.querySelectorAll(".a_p2");

    console.log("i am working");
    a--;
    console.log(a);
    for (var l of firstdiv) {
      console.log(l);
      if (a == 0) {
        l.style.left = "0%";
      }
      if (a == 1) {
        l.style.left = "-33.23%";
      }
      if (a == 2) {
        l.style.left = "-66.46%";
      }
      if (a < 0) {
        a = 0;
      }
    }
  }

  var j = 0;
  function a_right1() {
    var firstdiv2 = document.querySelectorAll(".a_p21");

    console.log("i am working");
    j++;
    console.log(j);
    for (var l of firstdiv2) {
      console.log(l);
      if (j == 0) {
        l.style.left = "0%";
      }
      if (j == 1) {
        l.style.left = "-33.23%";
      }
      if (j == 2) {
        l.style.left = "-66.46%";
      }
      if (j > 2) {
        j = 2;
      }
    }
  }

  function a_left1() {
    var firstdiv2 = document.querySelectorAll(".a_p21");

    console.log("i am working");
    j--;
    console.log(j);
    for (var l of firstdiv2) {
      console.log(l);
      if (j == 0) {
        l.style.left = "0%";
      }
      if (j == 1) {
        l.style.left = "-33.23%";
      }
      if (j == 2) {
        l.style.left = "-66.46%";
      }
      if (j < 0) {
        j = 0;
      }
    }
  }

  var k = 0;
  function a_right2() {
    var firstdiv2 = document.querySelectorAll(".a_p22");

    console.log("i am working");
    k++;
    console.log(k);
    for (var l of firstdiv2) {
      console.log(l);
      if (k == 0) {
        l.style.left = "0%";
      }
      if (k == 1) {
        l.style.left = "-33.23%";
      }
      if (k == 2) {
        l.style.left = "-66.46%";
      }
      if (k > 2) {
        k = 2;
      }
    }
  }

  function a_left2() {
    var firstdiv2 = document.querySelectorAll(".a_p22");

    console.log("i am working");
    k--;
    console.log(k);
    for (var l of firstdiv2) {
      console.log(l);
      if (k == 0) {
        l.style.left = "0%";
      }
      if (k == 1) {
        l.style.left = "-33.23%";
      }
      if (k == 2) {
        l.style.left = "-66.46%";
      }
      if (k < 0) {
        k = 0;
      }
    }
  }

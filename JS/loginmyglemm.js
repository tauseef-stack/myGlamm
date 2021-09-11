function EntryToMenu() {
    const arr2 = JSON.parse(localStorage.getItem("myglemmuser"));
    const mail = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    var istrue = false;
    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i].email == mail && arr2[i].password == pass) {
        istrue = true;
        document.getElementById("email").value = null;
        document.getElementById("pass").value = null;
        alert("Signin Successfull");
        window.location.href = "../index.html";
        break;
      }
    }
    if (!istrue) {
      alert("Enter Valid Email Or Password");
      document.getElementById("email").value = null;
      document.getElementById("pass").value = null;
    }
  }
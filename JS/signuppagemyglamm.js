function datacollect(e) {
    e.preventDefault();
    var name = form.name.value;
    var number = form.number.value;
    var email = form.email.value;
    var password = form.password.value;
    if (
      form.name.value == "" ||
      form.number.value == "" ||
      form.email.value == "" ||
      form.password.value == ""
    ) {
      alert("Please Fill The Empty Field");
    } else {
      var obj = {
        name,
        number,
        email,
        password,
      };
      var arr;
      arr = localStorage.getItem("myglemmuser");
      if (arr == null) {
        arr = [];
      } else {
        arr = JSON.parse(localStorage.getItem("myglemmuser"));
      }

      arr.push(obj);
      localStorage.setItem("myglemmuser", JSON.stringify(arr));
      console.log(arr);
      form.name.value = null;
      form.number.value = null;
      form.email.value = null;
      form.password.value = null;
      alert("Registeration Successful");
      window.location.href = "\loginmyglemm.html";
    }
  }

  function loginpage(e) {
    e.preventDefault();
    window.location.href = "\loginmyglemm.html";
  }
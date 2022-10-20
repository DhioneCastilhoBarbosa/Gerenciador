document.addEventListener('keypress', function(e){
  if(e.which == 13){
    authenticate();
  }
}, false);



function authenticate() 
{
  var username = document.getElementById("user").value;
  var password = document.getElementById("password").value;

  console.log(username, password);

  var authUsername = "intelbras"; // mudar par cadastros na flash do micro
  var authPassword = "admin123"; // mudar par cadastros na flash do micro
  if (username ===authUsername && password ===authPassword){
    window.location.href = "status.htm";
  }
  else{
    swal({
      title: "Oops...",
      text: "Usuario ou senha estão incorretos. Tente novamnete.",
      icon: "error",
      button: "OK",
    });
  }
}

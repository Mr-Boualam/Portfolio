/* ============ dark mode ============ */



let btnIcon = document.getElementById("btnIcon");
let logo = document.getElementById("imglogo");
btn.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme"))
  {
    //btnTextt.innerHTML = "Drak";
    btnIcon.src = "img/moon.png";
    logo.src = "img/logo2.png";
  }else{
    //btnTextt.innerHTML = "Light";
    btnIcon.src = "img/sun.png";
    logo.src = "img/logo1.png";
  }
}

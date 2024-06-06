var min = document.querySelector(".minimize");
var zoom = document.querySelector(".zoom_in");
var text = document.querySelector("div")
console.log(min);
console.log(zoom);
function textLarge(){
 text.classList.add("larger_text");
}
function minimize(){
    text.classList.remove("larger_text");
}
zoom.onclick = textLarge ; 
min.onclick = minimize ;

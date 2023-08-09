let socialThings=document.querySelector(".social-things");
let popUp=document.querySelector(".pop-up");
console.log(socialThings,popUp);
socialThings.addEventListener("mouseover",openPopUp);
function openPopUp(){
    popUp.classList.toggle("pop-up-appear");
}
socialThings.addEventListener("mouseout",closePopUp);
function closePopUp(){
    console.log("Mouse out")
    popUp.classList.remove("pop-up-appear");
}

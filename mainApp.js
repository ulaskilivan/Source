const socialContainer=document.querySelector(".social");
const socialText=document.querySelector(".social-text");
const projectContainer=document.querySelector(".project-container");
const projectText=document.querySelector(".project-text");
const calculatorButton=document.querySelector(".calculator-image");
const calculatorExp=document.querySelector(".calculator-exp");
socialContainer.addEventListener("mouseover",textAppearSocial);
function textAppearSocial(){
    socialText.classList.toggle("social-text-appear");
}
socialContainer.addEventListener("mouseout",textRemoveSocial);
function textRemoveSocial(){
    socialText.classList.remove("social-text-appear");
}
projectContainer.addEventListener("mouseover",textAppearProject);
function textAppearProject(){
    projectText.classList.toggle("project-text-appear");
}
projectContainer.addEventListener("mouseout",textRemoveProject);
function textRemoveProject(){
    projectText.classList.remove("project-text-appear");
}
calculatorButton.addEventListener("click",boxAppear);
function boxAppear(){
    calculatorExp.classList.toggle("calculator-exp-appear")
}
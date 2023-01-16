const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const x = document.getElementById("logIn");
const y = document.getElementById("register");
const productImage = document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("small-img");
const accordionContent = document.querySelectorAll(".accordian-content");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("activate")
    navMenu.classList.toggle("activate")
})


function scrolltonw() {
    let e = document.getElementById("newArrival");
    e.scrollIntoView({
       block: 'center',
        behavior: 'smooth',
    });

}

 function tinyImg(){
    smallImg[0].onclick = function(){
        productImage.src = smallImg[0].src;
    }
    
    smallImg[1].onclick = function(){
        productImage.src = smallImg[1].src;
    }
    
    smallImg[2].onclick = function(){
        productImage.src = smallImg[2].src;
    }
    
    smallImg[3].onclick = function(){
        productImage.src = smallImg[3].src;
    }
    
    smallImg[4].onclick = function(){
        productImage.src = smallImg[4].src;
    }
 }

function register(){

    let a = window.matchMedia("(max-width :637px)")
    if(a.matches){
        x.style.left = "-300px"
        y.style.left = "105px"
    }
    else{
        x.style.left = "-510px"
        y.style.left = "110px"
    }
    
    let b = window.matchMedia("(max-width: 491px)")
    if(b.matches){
        x.style.left = "-300px"
        y.style.left = "95px"
    }

    else{
        x.style.left = "-510px"
        y.style.left = "110px"
    }

    let c = window.matchMedia("(max-width: 427px)")
    
    if(c.matches){
        x.style.left = "-300px"
        y.style.left = "84px"
    }

    else{
        x.style.left = "-510px"
        y.style.left = "110px"
    }
}
function login(){


    x.style.left = "110px"
    y.style.left = "510px"
    
    let a = window.matchMedia("(max-width: 637px)")
    
    if(a.matches){
        x.style.left = "106px"
        y.style.left = "500px"
    }
  
    let b = window.matchMedia("(max-width: 491px)")
    
    if(b.matches){
        x.style.left = "96px"
        y.style.left = "500px"
    }


    let c = window.matchMedia("(max-width: 427px)")
    
    if(c.matches){
        x.style.left = "85px"
        y.style.left = "500px"
    }


    let d = window.matchMedia("(max-width: 338px)")

    if (d.matches) {

        x.style.left = "69px"
        y.style.left = "500px"
    }

  
}






accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{    
        item.classList.toggle("open");
    
        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus","fa-minus");
        }
        else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
       removeOpen(index); //calling the funtion and also passing the index number of the clicked heade
    })
    })
    
    function removeOpen(index1){
        accordionContent.forEach((item2, index2) => {
            if(index1 != index2){
                item2.classList.remove("open");
    
                let des = item2.querySelector(".description");
                des.style.height = "0px";
                item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
            }
        })
    }




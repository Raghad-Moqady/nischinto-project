// change navbar color 
const navbar = document.querySelector(".navbar");
const navCollapse=document.querySelector(".navbar-collapse")

window.addEventListener("scroll",(e)=>{
    // console.log(`window.scrollY: ${window.scrollY}`);
    if(window.scrollY>=235){
        navbar.classList.add("navbarScroll");
        navCollapse.classList.add("navbarScroll");
    }else{
        navbar.classList.remove("navbarScroll");
        navCollapse.classList.remove("navbarScroll");
    }
 })

// change navbar color
const navbar = document.querySelector(".navbar");
const navCollapse = document.querySelector(".navbar-collapse");

window.addEventListener("scroll", (e) => {
  // console.log(`window.scrollY: ${window.scrollY}`);
  if (window.scrollY >= 235) {
    navbar.classList.add("navbarScroll");
    navCollapse.classList.add("navbarScroll");
  } else {
    navbar.classList.remove("navbarScroll");
    navCollapse.classList.remove("navbarScroll");
  }
});
//////////////////////////////////////////////////////////////////////////////////////////

// change "active" in nav-links:
const navLinks = Array.from( document.querySelectorAll(".navbar .nav-item .nav-link"));
const sections=Array.from(document.querySelectorAll("section"));
sections.push(document.querySelector("header"));


//common function
const editActiveLink = (link) => {
  navLinks.forEach((otherLink) => {
    otherLink.classList.remove("active");
  });
  link?.classList.add("active");
};

// change it (2 in one):(on scroll)&(on click ,because by default when we click on a link =>scroll work)
// 71: navbar width عشان اول ما يلامس الحد السفلي للنافبار طرف الحد العلوي لهذا السيكشن يظهر التأثير
// console.log(aboutSection.offsetTop-71);
// console.log(window.scrollY);
window.addEventListener("scroll",(e)=>{
    sections.forEach((section)=>{
      if (window.scrollY>= section.offsetTop-71 && window.scrollY<section.offsetTop-71+section.offsetHeight){
         const activeLink= navLinks.find(link=>
         link.getAttribute("href") === `#${section.id}`
    );
     editActiveLink(activeLink);
      }
    })
})

 

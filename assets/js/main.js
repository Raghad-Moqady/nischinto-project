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
//////////////////////////////////////////////////////////////////////
// backtotop-icon 
const backToTopIcon= document.querySelector(".backtotop-icon");

backToTopIcon.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
/////////////////////////////////////////////////////////////////////
// Modal : 
// All imgs Modal
const all_imgs= Array.from(document.querySelectorAll(".all_imgs .gallery-img"));
const my_modal = document.querySelector(".my_modal");
const modal_img= document.querySelector(".modal_img ");
const close_icon= document.querySelector(".close_icon");
const left_arrow=document.querySelector(".left_arrow");
const right_arrow=document.querySelector(".right_arrow");
let current_index;
const page_num=document.querySelector(".page_num");


const showModal=()=>{
    my_modal.classList.add("show_modal");
}

const putImgInModal=(imgSrc)=>{
   modal_img.setAttribute("src",imgSrc);
}

const hideModal=()=>{
    my_modal.classList.remove("show_modal");
}

const toNextImg=()=>{
    current_index=(current_index+1)%all_imgs.length;
    // عبارة عن رابط الصورة اللاحقة
    putImgInModal(all_imgs[current_index].querySelector("img").getAttribute("src"));
    page_num.innerHTML=`${current_index+1} / ${all_imgs.length}`;
}

const toPreviousImg=()=>{
    current_index--;
    if (current_index==-1){
      current_index=all_imgs.length-1;
    }
    putImgInModal(all_imgs[current_index].querySelector("img").getAttribute("src"));
    page_num.innerHTML=`${current_index+1} / ${all_imgs.length}`;
}


all_imgs.forEach((gallery_img)=>{
gallery_img.addEventListener("click",(e)=>{
  showModal();
  putImgInModal(e.target.querySelector("img").getAttribute("src"));
  current_index= all_imgs.indexOf(e.target);
  page_num.innerHTML=`${current_index+1} / ${all_imgs.length}`;
})
})

close_icon.addEventListener("click",()=>{
   hideModal();
})
right_arrow.addEventListener("click",()=>{
  toNextImg();
})
left_arrow.addEventListener("click",()=>{
toPreviousImg();
})

document.addEventListener("click",(e)=>{
if (e.target.classList.contains("my_modal")){
        hideModal();
    }
});

// keyboard events:
document.addEventListener("keydown",(e)=>{
if (e.code=="ArrowRight"){
    toNextImg();
}
else if (e.code=="ArrowLeft"){
    toPreviousImg();
}
else if( e.code=="Escape"){
    hideModal();
}
});

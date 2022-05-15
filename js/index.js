// ===================== typing Animation =================
var typed = new Typed(".typing",{
    strings:["Web Designer","web Devloper","Graphic Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
// ====================== aside focus =======================
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totleNavList = navList.length,
    allSection = document.querySelectorAll("section"),
    totalSection = allSection.length;
    for(let i =0; i<totleNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", () => {
        removeBackSection();
        for(let j = 0; j<totleNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        a.classList.add("active");
        showSection(a);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
        // aside.classList.remove("open");
        // navTogglerBtn.classList.remove("open");
        // OR
        // if(window.innerWidth < 1200){
        //     asideSectionTogglerBtn();
        // }
        })
    }
function removeBackSection(){
    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function showSection(element){
    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href");
    document.querySelector(target).classList.add("active");
}
function updateNav(element){
    for(let i=0; i<totleNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href");
        if(target === navList[i].querySelector("a").getAttribute("href")){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", () => {
    const a = navList[4].querySelector("a");
    showSection(a);
    updateNav(a);
    removeBackSection();
    addBackSection(1);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}

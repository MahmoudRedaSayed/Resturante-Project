var iconList=document.querySelector("#menu"),
    navBar=document.querySelector(".nav-bar"),
    links=document.querySelectorAll("a");
    console.log(navBar);
    iconList.onclick = function(){
        iconList.classList.toggle('fa-times');
        navBar.classList.toggle('active');
}
window.onscroll=function(){
        iconList.classList.remove('fa-times');
        navBar.classList.remove('active');
    if(window.scrollY>60)
    {
        document.getElementById("scroll-top").classList.add("active-scroll");
    }
    else
    {
        document.getElementById("scroll-top").classList.remove("active-scroll");
    }
}
document.getElementById("scroll-top").onclick=()=>{
    window.scroll(0,0);
}

/*common.js*/
const $body = document.querySelector("body"); //.showMenu
const $resBtn = document.querySelector(".resBtn"); //.active
const $nav = document.querySelector("header nav"); //.active


/*반응형 메뉴로 진입시 클릭할 대상들*/
const $menuBtn = document.querySelector(".menuBtn");
const $closeBtn = document.querySelector(".closeBtn");

$menuBtn.addEventListener("click" , () => {
    $body.classList.add("showMenu");
    $resBtn.classList.add("active");
    $nav.classList.add("active");
});

$closeBtn.addEventListener("click" , () => {
    $body.classList.remove("showMenu");
    $resBtn.classList.remove("active");
    $nav.classList.remove("active");
});
/*sub.js*/
//http://127.0.0.1:5500/sub.html#nike

const nikeTxt = "Just Do it";
const adidasTxt = "Impossible if Nothing - adidas";
const pumaTxt = "Foreverfaster - puma";

//index.html -> sub.html 진입했을 때
const $hash = location.hash;  //URL로부터 #을 포함한 우측의 문구를 가져오기
console.log($hash);  //#nike
let $hash_txt = $hash.replace("#", "");
console.log($hash_txt);  //nike

//선택자 구성하기
const $main = document.querySelector("main");  //배너이미지 교체
const $title = document.querySelector("#cont .wrap .title h3");  //페이지의 타이틀 교체
const $contCover = document.querySelector("#cont .wrap .cont");  //내부 이미지를 담을 공간
const $prTxt = document.querySelector(".presentiveTxt");
let $contGroup = "";  //.cont라는 공간에 넣을 가상의 빈 문자열 데이터

const hash_apply = () => {
    if($hash_txt){  //hash라는 정보가 존재한다면
        $main.style.backgroundImage = `url(./img/${$hash_txt}_banner.jpg)`;
        $title.textContent = $hash_txt;
        $contGroup = ""; //기존에 쌓인 모든 콘텐츠를 제거하여 다시 넣는다.

        for(i = 0; i < 4; i++){  //i = 0 -> 1 -> 2 -> 3
            $contGroup += `<div style="background-image:url(./img/${$hash_txt}_0${i+1}.jpg)" onclick="location.href='./detail.html#${$hash_txt}_${i}'"></div>`;
        }
        $contCover.innerHTML = $contGroup;

        if($hash_txt == "nike"){
        $prTxt.textContent = nikeTxt;
        }else if($hash_txt == "adidas"){
        $prTxt.textContent = adidasTxt;
        }else if($hash_txt == "puma"){
            $prTxt.textContent = pumaTxt;
            }

    }else{//hash라는 정보가 존재하지 않다면 => index.html로 보낸다.
        location.href="./";  //index.html로 강제 이동시키기
    }
}

hash_apply();


//sub.html 페이지에서 상단의 메뉴 클릭시 

const $list = document.querySelectorAll("header .wrap nav ul li");
console.log($list);

for(const v of $list){//const 예약어를 사용하면 요소의 위치를 고정화시키는 역할로 담당
    console.log(v);
    v.addEventListener("click", () => {
     $hash_txt = v.getAttribute("rel"); //기존 해시로부터 받아온 값에서 rel에 담겨진 속성을 가지고 속성값으로 변경
     hash_apply();

     $body.classList.remove("showMenu");
     $resBtn.classList.remove("active");
     $nav.classList.remove("active");
});
}




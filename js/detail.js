/*detail.js*/

//2차 배열의 패턴 : ["이미지", "타이틀", "내용"]
var $nike = [
    ["nike_01.jpg", "nike_title_ad_1", "nike_text_ad_1"],
    ["nike_02.jpg", "nike_title_ad_2", "nike_text_ad_2"],
    ["nike_03.jpg", "nike_title_ad_3", "nike_text_ad_3"],
    ["nike_04.jpg", "nike_title_ad_4", "nike_text_ad_4"],
];
var $adidas = [
    ["adidas_01.jpg", "adidas_title_ad_1", "adidas_text_ad_1"],
    ["adidas_02.jpg", "adidas_title_ad_2", "adidas_text_ad_2"],
    ["adidas_03.jpg", "adidas_title_ad_3", "adidas_text_ad_3"],
    ["adidas_04.jpg", "adidas_title_ad_4", "adidas_text_ad_4"],
];
var $puma = [
    ["puma_01.jpg", "puma_title_ad_1", "puma_text_ad_1"],
    ["puma_02.jpg", "puma_title_ad_2", "puma_text_ad_2"],
    ["puma_03.jpg", "puma_title_ad_3", "puma_text_ad_3"],
    ["puma_04.jpg", "puma_title_ad_4", "puma_text_ad_4"],
];

//http://127.0.0.1:5500/detail.html#nike_1

const $hash = location.hash;
console.log($hash); //nike_1 ==> nike:배열로 구분하여 접근하는 용도/ 1:각 1차 배열의 인덱스 번호로 접근

const $hash_txt = $hash.replace("#","");
console.log($hash_txt); //nike_1
//nike_1 ==(변수.split("특정문자"))==> ["nike", "1"]

if($hash_txt){

const $divide_arr = $hash_txt.split("_");
console.log($divide_arr); // ['nike', '1']
const $brand = $divide_arr[0]; //카테고리 정의(nike | adidas | puma)
const $index = $divide_arr[1]; //각 카테고리별로 데이터의 인덱스번호(0 | 1 | 2 | 3)


//선택자 구성 
const $detailBg = document.querySelector("#cont .ad_img");
const $detailTitle = document.querySelector("#cont h3");
const $detailText = document.querySelector("#cont p");

if($brand == "nike"){
    $detailBg.style.backgroundImage = `url(./img/${$nike[$index][0]})`;
    $detailTitle.textContent = $nike[$index][1];
    $detailText.textContent = $nike[$index][2];
}

if($brand == "adidas"){
    $detailBg.style.backgroundImage = `url(./img/${$adidas[$index][0]})`;
    $detailTitle.textContent = $adidas[$index][1];
    $detailText.textContent = $adidas[$index][2];
}
if($brand == "puma"){
    $detailBg.style.backgroundImage = `url(./img/${$puma[$index][0]})`;
    $detailTitle.textContent = $puma[$index][1];
    $detailText.textContent = $puma[$index][2];
}
}else{
    location.href="./"; //index.html로 강제 이동시키기

}
//하단의 목록보기 클릭시 

const backBtn = document.querySelector(".history button");

backBtn.addEventListener("click", () => {
 //history.forward(); //방문기록상 한단계 앞으로 진행한다.
 //history.back(); //방문기록상 한단계 뒤로 진행한다.
 //history.go(-2);  //방문기록상 두단계 뒤로 진행한다.   
 location.href=`./sub.html#${$brand}`;
});
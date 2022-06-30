/*index.js*/

//nike
//선택자 구성

const $nike_contCover = document.querySelector("#cont_01 .cont");
let $nike_contGroup = "";

//랜덤방식으로 0, 1, 2, 3 중에서 두개를 가져온다. (조건, 동일한 숫자가 존재하지 않음)
const nike_num_arr = [];
let nike_number;
while(nike_num_arr.length < 2){
    nike_number = Math.floor(Math.random() * 4); //0 ~ 3
    //최소값 0.0001 =(*4)=> 0.0004 =Math.floor() : 내림=> 0
    //최대값 0.9999 =(*4)=> 3.9996 =Math.floor() : 내림=> 3
    
    if(nike_num_arr.indexOf(nike_number) == -1){ //배열 데이터에 값이 일치하는 것이 없다면
        nike_num_arr.push(nike_number);
    }
    console.log(nike_num_arr);
}

//해당하는 배열데이터로부터 이미지를 화면상에 구현한다.
for(i=0; i<nike_num_arr.length; i++){
    $nike_contGroup += `<div style="background-image:url(./img/nike_0${nike_num_arr[i]+1}.jpg)" onclick="location.href='./detail.html#nike_${nike_num_arr[i]}'">
    </div>`;
}
$nike_contCover.innerHTML = $nike_contGroup;

//adidas
//선택자 구성

const $adidas_contCover = document.querySelector("#cont_02 .cont");
let $adidas_contGroup = "";

//랜덤방식으로 0, 1, 2, 3 중에서 두개를 가져온다. (조건, 동일한 숫자가 존재하지 않음)
const adidas_num_arr = [];
let adidas_number;
while(adidas_num_arr.length < 2){
    adidas_number = Math.floor(Math.random() * 4); //0 ~ 3
    //최소값 0.0001 =(*4)=> 0.0004 =Math.floor() : 내림=> 0
    //최대값 0.9999 =(*4)=> 3.9996 =Math.floor() : 내림=> 3
    
    if(adidas_num_arr.indexOf(adidas_number) == -1){ //배열 데이터에 값이 일치하는 것이 없다면
        adidas_num_arr.push(adidas_number);
    }
    console.log(adidas_num_arr);
}

//해당하는 배열데이터로부터 이미지를 화면상에 구현한다.
for(i=0; i<adidas_num_arr.length; i++){
    $adidas_contGroup += `<div style="background-image:url(./img/adidas_0${adidas_num_arr[i]+1}.jpg)" onclick="location.href='./detail.html#adidas_${adidas_num_arr[i]}'">
    </div>`;
}
$adidas_contCover.innerHTML = $adidas_contGroup;

//puma
//선택자 구성

const $puma_contCover = document.querySelector("#cont_03 .cont");
let $puma_contGroup = "";

//랜덤방식으로 0, 1, 2, 3 중에서 두개를 가져온다. (조건, 동일한 숫자가 존재하지 않음)
const puma_num_arr = [];
let puma_number;
while(puma_num_arr.length < 2){
    puma_number = Math.floor(Math.random() * 4); //0 ~ 3
    //최소값 0.0001 =(*4)=> 0.0004 =Math.floor() : 내림=> 0
    //최대값 0.9999 =(*4)=> 3.9996 =Math.floor() : 내림=> 3
    
    if(puma_num_arr.indexOf(puma_number) == -1){ //배열 데이터에 값이 일치하는 것이 없다면
        puma_num_arr.push(puma_number);
    }
    console.log(puma_num_arr);
}

//해당하는 배열데이터로부터 이미지를 화면상에 구현한다.
for(i=0; i<puma_num_arr.length; i++){
    $puma_contGroup += `<div style="background-image:url(./img/puma_0${puma_num_arr[i]+1}.jpg)" onclick="location.href='./detail.html#puma_${puma_num_arr[i]}'">
    </div>`;
}
$puma_contCover.innerHTML = $puma_contGroup;
let percentage = document.querySelector('.percentage');
let percent = document.querySelector('.percent');
let i=0;
/*
//!======讀取電腦電池電量，顯示百分比與電量條=====
navigator.getBattery().then(function(battery){
    percentage.style.width = battery.level * 100 + '%';
    percent.innerHTML = battery.level * 100 + '%';
})
*/


//!======手動輸入電量%(html)，顯示電量條======
percentage.style.width = percent.innerHTML;

/* 
//!======充電動畫，逐漸增加電量條(調整中)=====
function LevelIncreace(){
    i++;
    percentage.style.width = i + '%';
    percent.innerHTML = i + '%';
} 

if(i>100){
    i=0;
}else{
    setTimeout(LevelIncreace, 500);
}
*/


        
    
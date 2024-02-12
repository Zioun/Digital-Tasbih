let countBtn = document.getElementById("count-btn");
let countDBtn = document.getElementById("countD-btn");

let stepOne = document.getElementById("step-one");
let stepTwo = document.getElementById("step-two");
let stepThree = document.getElementById("step-three");

let count = document.getElementById("count");
let countTotal = document.getElementById("count-total");
let countValue = 0;
let countValue2 = 0;
let countValue3 = 0;
let countTotalValue = 0;

countBtn.addEventListener('click',function(){
    if(countValue < 33){
        countValue += 1;
        count.innerText = countValue;
    }else if(countValue2 < 33){
        countValue2 += 1;
        count.innerText = countValue2;

    }else{
        countValue3 += 1;
        count.innerText = countValue3;
    }
    countTotalValue += 1;
    countTotal.innerText = countTotalValue;

    if(countTotalValue >= 33){
        stepOne.className = "step step-secondary";
    }
    if(countTotalValue >= 66){
        stepTwo.className = "step step-secondary";
    }
    if(countTotalValue >= 99){
        stepThree.className = "step step-secondary";
    }
    
})

// Progress 

let progress = document.getElementById("progress"); 
let progressText = document.getElementById("progress-text");
let progressValue = 0;
let progressTextValue = 0;

let progressValue2 = 0;
let progressTextValue2 = 0;

let progressValue3 = 0;
let progressTextValue3 = 0;

countBtn.addEventListener('click',function(){
    if(progressValue < 99){
        progressTextValue += 3.03;
        progressText.innerText = Math.ceil(progressTextValue);
        progressValue += 3.03;
        progressValue.innerText = Math.ceil(progressTextValue);
        progress.setAttribute("style",`--value:${progressValue};--size:4rem; --thickness: 6px;`);
        console.log(progress);
    }else if(progressValue2 < 99){
        progressTextValue2 += 3.03;
        progressText.innerText = Math.ceil(progressTextValue2);
        progressValue2 += 3.03;
        progressValue2.innerText = Math.ceil(progressTextValue2);
        progress.setAttribute("style",`--value:${progressValue2};--size:4rem; --thickness: 6px;`);

    }else if(progressValue3 < 99){
        progressTextValue3 += 3.03;
        progressText.innerText = Math.ceil(progressTextValue3);
        progressValue3 += 3.03;
        progressValue3.innerText = Math.ceil(progressTextValue3);
        progress.setAttribute("style",`--value:${progressValue3};--size:4rem; --thickness: 6px;`);
    }
    
})


// Total Progress

let totalProgress = document.getElementById("total-progress"); 
let totalProgressText = document.getElementById("total-progress-text");
let totalProgressValue = 0;
let totalProgressTextValue = 0;

let totalProgressValue2 = 0;
let totalProgressTextValue2 = 0;

let totalProgressValue3 = 0;
let totalProgressTextValue3 = 0;

countBtn.addEventListener('click',function(){
    if(totalProgressValue < 99){
        totalProgressTextValue += 1.01;
        totalProgressText.innerText = Math.ceil(totalProgressTextValue);
        totalProgressValue += 1.01;
        totalProgressValue.innerText = Math.ceil(totalProgressTextValue);
        totalProgress.setAttribute("style",`--value:${totalProgressValue};--size:4rem; --thickness: 6px;`);
        console.log(progress);
    }  
})


countBtn.addEventListener('click',function(){
    if(countTotalValue >=99){
        countBtn.setAttribute('disabled', 'disabled');
        let masaallahImg = document.getElementById("masaallah-img");
        masaallahImg.setAttribute("class","w-96 left-0 top-40 rotate-[40deg] absolute -ml-40");
    }
})
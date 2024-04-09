let timer = 60;
let hitrn = 0;
let score = 0;

function scorewala(){
    score += 10;
    let a = document.querySelector('#scoreval').textContent = score;
    
}

function newhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function bubble(){
    let chl = " ";

    for(let i = 1; i<= 150;i++){
     rn = Math.floor(Math.random()*10)
     chl += `<div id="bubble">${rn}</div>`;
}

     document.querySelector("#pbtm").innerHTML=chl;
}

function runtimer(){
    setInterval(()=>{
        if(timer > 0){
            timer--;
         document.querySelector('#timerval').textContent= timer;
        }
        else{
            clearInterval();
            let a = document.querySelector('#pbtm');
            a.innerHTML =  `<h2>Your Score : ${score}</h2>`;
            a.style.color = "red" 
           
        }
        
    },1000);
}


function final(){
    document.querySelector('#pbtm').addEventListener("click",function(dats){
        let clicknum = Number(dats.target.textContent);
        if(clicknum === hitrn){
            scorewala();
            newhit();
            bubble();   
        }
    });
}


bubble();
runtimer();
newhit();
final();

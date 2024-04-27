
let idx=0;
let songname=document.querySelector(".songName");
let songsList=[
    { songName:"Uska hi Bnana",songPath:"arijit.mp3"},
    {songName:"Tu hai kahan",songPath:"tu hai.mp3"},
    {songName:"zihaal-e-miskin",songPath:"vishal mishra.mp3"}
]
let audio=new Audio(songsList[idx].songPath);
let playbtn=document.querySelector(".fa-circle-play");
playbtn.addEventListener("click",()=>{
   if(audio.paused||audio.currentTime<=0){
    audio.play();
    playbtn.classList.remove("fa-circle-play")
    playbtn.classList.add("fa-circle-pause");
   }
   else{
    audio.pause();
    playbtn.classList.remove("fa-circle-pause")
    playbtn.classList.add("fa-circle-play");
   }
})
let range=document.getElementById("range");
audio.addEventListener("timeupdate",()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    range.value=progress;
})
range.addEventListener("change",()=>{
    audio.currentTime=range.value*audio.duration/100;
})
let prev=document.getElementById("previous");
let next=document.getElementById("Next");
prev.addEventListener("click",()=>{
    audio.pause();
    range.value=0;
if(idx!==0){
    idx--;
}
songname.innerHTML=songsList[idx].songName;
audio=new Audio(songsList[idx].songPath);
audio.currentTime=0;
audio.play();
audio.addEventListener("timeupdate",()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    range.value=progress;
})
range.addEventListener("change",()=>{
    audio.currentTime=range.value*audio.duration/100;
})
playbtn.classList.remove("fa-circle-play")
playbtn.classList.add("fa-circle-pause");
})
next.addEventListener("click",()=>{
    audio.pause();
    range.value=0;
        idx++;
        audio=new Audio(songsList[idx].songPath);
        songname.innerHTML=songsList[idx].songName;
    audio.currentTime=0;
    audio.play();
    audio.addEventListener("timeupdate",()=>{
        progress=parseInt((audio.currentTime/audio.duration)*100);
        range.value=progress;
    })
    range.addEventListener("change",()=>{
        audio.currentTime=range.value*audio.duration/100;
    })
    playbtn.classList.remove("fa-circle-play")
    playbtn.classList.add("fa-circle-pause");
    })
    let volu=document.getElementById("vol");

    let volbtn=document.getElementById("volbtn")
    volbtn.addEventListener("click",()=>{
        volu.style.display="inline";
    })
    volu.addEventListener("change",()=>{
        console.log("changed");
        audio.volume=(volu.value)/100;
    })
    
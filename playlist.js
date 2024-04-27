let idx=0;
let songname=document.querySelector("#songName");
let songsList=[
    { songName:"Uska hi Bnana",songPath:"arijit.mp3",coverimg:"arijit.jpg"},
    {songName:"Tu hai kahan",songPath:"tu hai.mp3",coverimg:"malik.jpeg"},
    {songName:"zihaal-e-miskin",songPath:"vishal mishra.mp3",coverimg:"vishal.jpeg"}
]
let audio=new Audio(songsList[idx].songPath);
let play=document.querySelector(".fa-play");
play.addEventListener("click",()=>{

if(audio.paused||audio.currentTime<=0){
    audio.play();
    play.classList.remove("fa-play")
    play.classList.add("fa-pause");
}
else{
    audio.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
}
})
let coverimage=document.querySelector("img");
let range=document.getElementById("Bar");
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
coverimage.src=songsList[idx].coverimg;
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
play.classList.remove("fa-play")
play.classList.add("fa-pause");
})
next.addEventListener("click",()=>{
    audio.pause();

    range.value=0;
       if(idx<songsList.length){
        idx++;
       }
       else{
        audio.currentTime=0;
       }
        audio=new Audio(songsList[idx].songPath);
        songname.innerHTML=songsList[idx].songName;
        coverimage.src=songsList[idx].coverimg;
    audio.currentTime=0;
    audio.play();
    audio.addEventListener("timeupdate",()=>{
        progress=parseInt((audio.currentTime/audio.duration)*100);
        range.value=progress;
    })
    range.addEventListener("change",()=>{
        audio.currentTime=range.value*audio.duration/100;
    })
    play.classList.remove("fa-play")
    play.classList.add("fa-pause");
    })
    let volu=document.getElementById("vol");
    let volbtn=document.getElementById("volbtn")
    volbtn.addEventListener("click",()=>{
      volbtn.style.display="block";
    })
    volu.addEventListener("change",()=>{
        audio.volume=(volu.value)/100;
    })
    let index;
    const makeAllplay=()=>{
        for (let i=0;i<3;i++){
           let btn= document.getElementById(`${i}`);
           btn.classList.remove("fa-circle-pause");
           btn.classList.add("fa-circle-play");
        }
    }
    let song1=document.getElementById("0");
   const playmusic=()=>{
    audio.pause();
   
index=song1.id;
coverimage.src=songsList[index].coverimg;
audio=new Audio(songsList[index].songPath);
audio.currentTime=0;
   audio.play();
   audio.addEventListener("timeupdate",()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    range.value=progress;
})
range.addEventListener("change",()=>{
    audio.currentTime=range.value*audio.duration/100;
})
makeAllplay();
   play.classList.remove("fa-play")
play.classList.add("fa-pause");
song1.classList.remove("fa-circle-play")
song1.classList.add("fa-circle-pause");
   }
   let song2=document.getElementById("1");
   const playmusic1=()=>{
    audio.pause();
    index=song2.id;
    coverimage.src=songsList[index].coverimg;
audio=new Audio(songsList[index].songPath);
audio.currentTime=0;
   audio.play();
   audio.addEventListener("timeupdate",()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    range.value=progress;
})
range.addEventListener("change",()=>{
    audio.currentTime=range.value*audio.duration/100;
})
makeAllplay();
   play.classList.remove("fa-play")
play.classList.add("fa-pause");
song2.classList.remove("fa-circle-play")
song2.classList.add("fa-circle-pause");
   }
   let song3=document.getElementById("2");
   const playmusic2=()=>{
    audio.pause();
    index=song3.id;
    coverimage.src=songsList[index].coverimg;
audio=new Audio(songsList[index].songPath);
audio.currentTime=0;
   audio.play();
   audio.addEventListener("timeupdate",()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    range.value=progress;
})
range.addEventListener("change",()=>{
    audio.currentTime=range.value*audio.duration/100;
})
makeAllplay();
   play.classList.remove("fa-play")
play.classList.add("fa-pause");
song3.classList.remove("fa-circle-play")
song3.classList.add("fa-circle-pause");
   }
  

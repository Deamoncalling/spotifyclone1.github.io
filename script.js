console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
  { songName: "All Eyez On Me", filePath: "1.mp3", coverPath: "cover1.jpg" },
  { songName: "Still DRe", filePath: "2.mp3", coverPath: "cover2.jpg" },
  { songName: "Nig**s in Paris", filePath: "3.mp3", coverPath: "cover3.jpg" },
  { songName: "Stronger", filePath: "4.mp3", coverPath: "cover4.jpg" },
  { songName: "Juicy", filePath: "5.mp3", coverPath: "cover5.jpg" },
  { songName: "Good Day", filePath: "6.mp3", coverPath: "cover6.jpg" },
  { songName: "A milli", filePath: "7.mp3", coverPath: "cover7.jpg" },
  { songName: "In Da Club", filePath: "8.mp3", coverPath: "cover8.jpg" },
  { songName: "We Dem Boyz", filePath: "9.mp3", coverPath: "cover9.jpg" },
  { songName: "Loose Yourself", filePath: "10.mp3", coverPath: "cover10.jpg" },
];
songItems.forEach((element,i )=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;


})
//handleplay
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value=progress;
  
})
myProgressBar.addEventListener('change', () => {
  audioElement.currentTime =(myProgressBar.value * audioElement.duration) / 100;
})
const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })


})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
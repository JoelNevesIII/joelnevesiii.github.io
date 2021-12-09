let audio = document.getElementById("audio");
let iniciar = document.getElementById("play");

let musicaAtual = 0;

var music = [
            "Shingeki No Kyojin.mp3",
            "Rap da Mereoleona.mp3",
            "Black Clover.mp3"
            ];
function play(){  
    if(audio.paused){
        audio.play();
        iniciar.setAttribute("class", "fas fa-pause fa-2x icone");
    }else{
        audio.pause();
        iniciar.setAttribute("class", "fas fa-play fa-2x icone");
    }
}

function aumentarVel(){
    audio.playbackRate += 0.1;
}

function diminuirVel(){
    audio.playbackRate -= 0.1;
}

function avacar(){
        if(musicaAtual < music.length-1){
            musicaAtual ++;
            audio.setAttribute("src", "./music/" + music[musicaAtual]);
            play();  
        }else{ 
            musicaAtual = 0;
            audio.setAttribute("src", "./music/" + music[musicaAtual]);
            play();
        }
        
    }
    
function voltar(){
    
        if(musicaAtual > 0){
            musicaAtual --;
            audio.setAttribute("src", "./music/" + music[musicaAtual]);
            play();  
        }else{
            audio.setAttribute("src", "./music/" + music[musicaAtual]);
            play();
        }
        console.log(musicaAtual)
    }

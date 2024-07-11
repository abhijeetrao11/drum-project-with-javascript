var i;
var len = document.querySelectorAll(".drum").length;

for(i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        text = this.innerHTML;
        makesound(text);
        animat(text);
    });
}

document.addEventListener("keydown",function(Event){
    makesound(Event.key);
    animat(Event.key);
});

function makesound(key)
{
    switch(key){
        case "w":
            var audio = new Audio('tom-1.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('tom-3.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('tom-4.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('crash.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('kick-bass.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('snare.mp3');
            audio.play();
        break;
        default:
            console.log("input not found!");
    }
}

function animat(any){
    var concat = "."+any;
    var a = document.querySelector(concat);
    a.classList.add("pressed");
    setTimeout(function(){
        document.querySelector(concat).classList.remove("pressed");
    },100);
}

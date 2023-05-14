var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttoninnerhtml=this.innerHTML;
    switch (buttoninnerhtml) {
        case "R":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();   
            break;
    
        case "I":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
            break;

        case "M":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case "J":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "H":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
       
        case "I":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        
        case "M":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        
        default:
        console.log("buttoninnerhtml");  
    }
});}
document.addEventListener("keypress",function(event) {
    console.log(event);
});
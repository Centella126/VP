var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick(){
        //alert("I got clicked!");
        /*
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        */
       //this.style.color="white";

       var buttomInnerHTML = this.innerHTML;

       makeSound(buttomInnerHTML);

       buttonAnimation(buttomInnerHTML)
    }
}


document.addEventListener("keypress", function(event){
    //alert("Key was pressed");
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
         break;
       
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        default:
            console.log(buttomInnerHTML)
            break;
       }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(remove, 100);
    function remove(){
        activeButton.classList.remove("pressed");
    }
} 
        default:
            console.log(buttomInnerHTML)
            break;
       }
}

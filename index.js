
// Detecting button press

var numDrumButtons = document.querySelectorAll(".drum").length

for (i = 0; i < numDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var innerButtonHTML = this.innerHTML;
        
        letterCheck(innerButtonHTML);
        buttonAnimation(innerButtonHTML);
    });
}


// detecting keyboard press

document.addEventListener("keydown", function(event) {
    // method attached to event, you want basically the key to be passed through the switch statements of the fn below.
    letterCheck(event.key);
    buttonAnimation(event.key)

});

// implementation logic

function letterCheck (key) {
    
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play();
            break;
        case "j":
            var snare = new Audio('./sounds/crash.mp3')
            snare.play();
            break;
        case "k":
            var crash = new Audio('./sounds/kick-bass.mp3')
            crash.play();
            break;
        case "l":
            var kick = new Audio('./sounds/snare.mp3')
            kick.play();
            break;

        default: console.log(innerButtonHTML)
    }
}

function buttonAnimation(key) {
    // using the qS to query by class, you need the dot. 
    var clickedButton = document.querySelector("." + key);

    // no dot.
    clickedButton.classList.add("pressed");

    // setTimeout(function, milliseconds, param1, param2, ...) ** note we use an anonymous function before the ms amount.
    setTimeout (function() {
        clickedButton.classList.remove("pressed");
    }, 100);

}
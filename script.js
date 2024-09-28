var numberOfButtons = document.querySelectorAll('.drum').length;

for(var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        var buttonInnerHTML = this.InnerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener('keypress', function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
})

function makeSound(key){
    switch (key) {
        case 'w':
            var rightCrash = new Audio('Sounds/right-crash.mp3');
            rightCrash.play();
            break;
        case 'a':
            var floorTom = new Audio('Sounds/floor-tom.mp3');
            floorTom.play();
            break;
        case 's':
            var highTom = new Audio('Sounds/high-tom.mp3');
            highTom.play();
            break;
        case 'd':
            var lowTom = new Audio('Sounds/low-tom.mp3');
            lowTom.play();
            break;
        case 'j':
            var snareDrum = new Audio('Sounds/snare-drum.mp3');
            snareDrum.play();
            break;
        case 'k':
            var kickBass = new Audio('Sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case 'l':
            var leftCrash = new Audio('Sounds/left-crash.mp3');
            leftCrash.play();
            break;

        default:console.log(buttonInnerHTML);
        
            break;
    }
}


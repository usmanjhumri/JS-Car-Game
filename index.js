const heading = document.getElementById('heading');
heading.style.textAlign = 'center';
heading.style.textTransform = 'capitalize';
heading.style.color = '#4c6897'
heading.style.marginTop = '2rem'



    const score = document.querySelector('.scroe');
    const startScreen = document.querySelector('.startScreen');
    const gameArea = document.querySelector('.gameArea')
    console.log(gameArea);


    startScreen.addEventListener('click', start)

    function keyDown(e){
        e.preventDefault()
        keys[e.key] = true;

    }
    function keyUp(event){
        event.preventDefault()
        console.log(event.key);
        console.log(keys);
        keys[event.key] = false;
    }


    let player = {}

    let keys = {
        ArrowUp:false,
        ArrowDown:false,
        ArrowLeft:false,
        ArrowRight:false,
    }

document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)

function playthegame(){
    console.log('i am clicked')
    if(player.start){

        window.requestAnimationFrame(playthegame);
    }

}

function start(){
    gameArea.classList.remove('hide')
    startScreen.classList.add('hide')
    player.start = true
    window.requestAnimationFrame(playthegame);
    let car = document.createElement('div')
    car.id= 'car'
    // car.innerText = 'this is car'
    gameArea.appendChild(car)
}


const heading = document.getElementById('heading');
heading.style.textAlign = 'center';
heading.style.textTransform = 'capitalize';
heading.style.color = '#4c6897'
// heading.style.marginTop = '2rem'
heading.style.marginBottom = '1rem'



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


    let player = { speed:5 }

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
    let  car = document.getElementById('car')
    let road = gameArea.getBoundingClientRect()
    console.log(road);
    if(player.start){   


        if(keys.ArrowUp && player.y > (road.top + 70)){player.y -= player.speed}
        if(keys.ArrowDown && player.y < (road.bottom - 155)){player.y += player.speed}
        if(keys.ArrowLeft && player.x > 0){player.x -= player.speed}
        if(keys.ArrowRight && player.x < (road.width - 52)){player.x += player.speed}


            car.style.top = player.y + "px"
            car.style.left = player.x + "px"




        window.requestAnimationFrame(playthegame);
    }

}

function start(){
    gameArea.classList.remove('hide')
    startScreen.classList.add('hide')
    player.start = true
    window.requestAnimationFrame(playthegame);

   for(i=0; i<5; i++){
    let roadline = document.createElement('div')
    roadline.id = 'roadline';
    roadline.style.top = (i*100) + "px"
    gameArea.appendChild(roadline)
   }


    let car = document.createElement('div')
    car.id= 'car'
    // car.innerText = 'this is car'
    gameArea.appendChild(car)

    player.y = car.offsetTop;
    player.x = car.offsetLeft;
    console.log("top pa itna hai " + car.offsetTop);
    console.log( "left sa itna hai " + car.offsetLeft);
}



const duplicateHTML = (element, quantity) => {
    //duplicate crosses 10 times
    const newContent = new Array(quantity).fill(element.innerHTML).join('');
    element.innerHTML = newContent;
}

const crosses = document.querySelector('#crosses');
duplicateHTML(crosses, 10)

const crossesAnimation = anime({
    targets: '#crosses path',
    rotate: '1turn',
    delay: (el, index, l) => {
        return index * 100;
    },
    loop: true,
    duration: 1200,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

//Animate small square
const squareToDuplicate = document.querySelector('#dots');
duplicateHTML(squareToDuplicate, 40)

const dots = document.querySelectorAll('#dots .dot');
dots.forEach(dot => {
    anime({
        targets: dot,
        rotate: (el, index) => anime.random(90, 360),
        delay: (el, index) => anime.random(0, 500),
        duration: (el, index) => anime.random(250, 750),
        loop: true,
        easing: 'easeInOutSine',
        direction: 'alternate',
        autoplay: true
    });
});


// Animate small circles
const dotToDuplicate = document.querySelector('#small-circles');
duplicateHTML(dotToDuplicate, 20)

const smallCirclesAnimation = anime({
    targets: '#small-circles .circles',
    scale: [0,1.2],
    delay : (el, index) => index * 100,
    duration: 250,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
});

const circleAnimation = anime({
    targets: '#tunnel circle',
    scale: 1.1,
    direction: 'alternate',
    loop: true,
    duration: 250,
    easing: 'easeInOutSine',
    //apply a delay as a function to loop through every single circle
    // give us element, index, length
    delay: (el, index, l) => {
        return index * 50;
    }
});

const conveyorAnimation = anime({
    targets: '.conveyor',
    translateX: '-50%',
    loop: true,
    duration: 1500,
    easing: 'linear',
    autoplay: true
});

const backgroundAnimation = anime({
    targets: '#flashes .flash',
    backgroundColor: (el, index) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][index],
    delay: (el, index) => anime.random(50, 100),
    duration: 5000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
});

const rotatingSquareAnimation = anime({
    targets: '#rotating-square rect',
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotate: [45, 0, -45],
    delay: (el, index) => 110 * index,
    duration: (el, index) => 750,
    loop: true,
    easing: 'easeOutCirc',
    direction: 'alternate'
});

const zigzagAnimation = () => {
  const zigzagPath = document.querySelector('#zigzag path');
  const zigzagOffset = anime.setDashoffset(zigzagPath);
  zigzagPath.setAttribute('stroke-dashoffset', zigzagOffset);
  anime({
    targets: zigzagPath,
    strokeDashoffset: [zigzagOffset, 0],
    duration: 3000,
    //delay: anime.random(0, 2000), if we want to add randomness
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
};

const waveAnimation = () => {
    const wavePath = document.querySelector('#wave path');
    const waveOffset = anime.setDashoffset(wavePath);
    wavePath.setAttribute('stroke-dashoffset', waveOffset);
    anime({
    targets: wavePath,
    strokeDashoffset: [0, waveOffset],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
    });
};

zigzagAnimation();
waveAnimation();

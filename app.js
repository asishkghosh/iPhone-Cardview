// movement animation

const card = document.querySelector('.card');
const container= document.querySelector('.container');

const title = document.querySelector('.title');
const iphone = document.querySelector('.iphone');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');
const desc = document.querySelector('.info h3');


//movinng animation event

container.addEventListener('mousemove', (e) => {
    
    let xAxis=(window.innerWidth/2 - e.pageX)/25;
    let yAxis=(window.innerHeight/2 - e.pageY)/25;
    console.log(`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    iphone.style.transform = "translateZ(200px) rotateZ(-25deg)";
    desc.style.transform = "translateZ(150px)";
    sizes.style.transform = "translateZ(120px)";
    purchase.style.transform = "translateZ(100px)";
   
});

container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = "all 0.5s ease";
    title.style.transform = "translateZ(0px)";
    iphone.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    desc.style.transform = "translateZ(0px)";
});


const colors = ["rgb(255, 21, 71)", "rgb(255, 238, 71)", "rgba(133,122,200)", "rgb(255, 162, 177)", "rgb(115, 71, 233)"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}  )
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}
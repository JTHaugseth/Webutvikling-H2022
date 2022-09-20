let square = document.querySelector('.div');
let sword = document.querySelector('.sword');
let enemy = document.querySelector('.enemy');
let enemyHealthbar = document.getElementsByClassName("healthbar");
let damageNumber = document.getElementsByClassName("damageNumber");
let moveBy = 30;
let enemyHealth = 90;

window.addEventListener('load', () => {
    square.style.position = 'absolute';
    square.style.left = 50 + 'px';
    square.style.top = 400 + 'px';
});

window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            square.style.left = parseInt(square.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            square.style.left = parseInt(square.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            square.style.top = parseInt(square.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            square.style.top = parseInt(square.style.top) + moveBy + 'px';
            break;
    }
});
window.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'Space':
        attack();
    }
});
function swordUp() {
    sword.style = 'transform: rotate(40deg)';
}
function damageNumberRemove() {
    damageNumber[0].removeChild(damageNumber[0].firstElementChild);
}
function attack() {
    sword.style = 'transform: rotate(120deg)';
            setTimeout(swordUp, 300);
            if (overlaps(sword, enemy) == true) {
                enemyHealth -= damage();
                enemyHealthbar[0].style.width = enemyHealth + 'px';
                damageNumber[0].innerHTML += `<p>${damage()}</p>`;
                setTimeout(damageNumberRemove, 500);
            }
            if (enemyHealth <= 0) {
                enemy.style.display = 'none';
            }
}

function overlaps(a, b) {
    const rect1 = a.getBoundingClientRect();
    const rect2 = b.getBoundingClientRect();
    
    const isInHoriztonalBounds =
      rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
    
      const isInVerticalBounds =
      rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
    
      const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
    
    return isOverlapping;
}
function damage() {
    return Math.floor(Math.random() * 7) + 5;
}


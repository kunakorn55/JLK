var images = ['mark.jpeg', 'lisa.jpeg', 'tom.jpeg', 'amy.jpeg', 'jake.jpeg', 'nina.jpeg', 'max.jpeg', 'sophie.jpeg', 'chloe.jpeg', 'george.jpeg', 'emma.jpeg', 'paul.jpeg', 'chris.jpeg', 'eva.jpeg', 'david.jpeg', 'hannah.jpeg', 'oliver.jpeg', 'sophia.jpeg', 'charlie.jpeg', 'leo.jpeg', 'bella.jpeg'];
    

var cards = document.querySelector('.cards');
var yourCard = document.querySelector('.yourCard');

images.forEach((img) => {
    var person = document.createElement('div')
    person.innerHTML = `<img src="./assets/imgs/people/${img}"></img><br><h2>${img.split('.')[0]}</h2>`;
    person.classList.add('card');
    cards.appendChild(person);
});

var randomNumber = Math.floor(Math.random() * 21);
var personToGuess = document.createElement('div');
personToGuess.innerHTML = `<img src="./assets/imgs/people/${images[randomNumber]}"></img><br><h1>${images[randomNumber].split('.')[0]}</h1>`;
yourCard.appendChild(personToGuess)
var people = document.querySelectorAll('.card');

document.querySelectorAll('.card').forEach((element) => {
    element.onmouseenter = function () {
        element.classList.add('hover');
    }
    element.onmouseleave = function () {
        element.classList.remove('hover')
    }
    element.onclick = function () {
        element.style.transition = 'all 0s'
        element.style.visibility = 'hidden'
    }
})  
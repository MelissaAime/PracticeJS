const projects = [
    {
        "name": "Gallery",
        "id": 1,
        "src": "./Gallery/index.html",
        "img": "./assets/images/01.png",
        "content": ""
    },
    {
        "name": "Weather",
        "id": 2,
        "src": "./Weather/index.html",
        "img": "./assets/images/02.png",
        "content": ""
    },
    {
        "name": "AnalogClock",
        "id": 3,
        "src": "./AnalogClock/index.html",
        "img": "./assets/images/03.png",
        "content": ""
    },
    {
        "name": "Calculator",
        "id": 4,
        "src": "./Calculator/index.html",
        "img": "./assets/images/04.png",
        "content": ""
    },
    {
        "name": "DarkMode",
        "id": 5,
        "src": "./DarkMode/",
        "img": "./assets/images/05.png",
        "content": ""
    },
    {
        "name": "TaskList",
        "id": 6,
        "src": "./Task/index.html",
        "img": "./assets/images/06.png",
        "content": ""
    },
    {
        "name": "LoginForm",
        "id": 7,
        "src": "./LoginForm/index.html",
        "img": "./assets/images/07.png",
        "content": ""
    },
    {
        "name": "Timer",
        "id": 8,
        "src": "./Timer/index.html",
        "img": "./assets/images/08.png",
        "content": ""
    },
    {
        "name": "CountDown",
        "id": 9,
        "src": "./CountDown/index.html",
        "img": "./assets/images/09.png",
        "content": ""
    },
    {
        "name": "Calendar",
        "id": 10,
        "src": "./Calendar/index.html",
        "img": "./assets/images/10.png",
        "content": ""
    },
    {
        "name": "ImageHover",
        "id": 11,
        "src": "./ImageHover/index.html",
        "img": "./assets/images/11.png",
        "content": ""
    },
    {
        "name": "MenuDesign",
        "id": 12,
        "src": "./MenuDesign/index.html",
        "img": "./assets/images/12.png",
        "content": ""
    },
    {
        "name": "GoogleMapClone",
        "id": 13,
        "src": "./GoogleMapClone/index.html",
        "img": "./assets/images/13.png",
        "content": ""
    }
]

let card = document.getElementById('card-template');

projects.map((x)=>{
    card.innerHTML += `
    <div class="card py-2">
        <img src="${x.img}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
        <h5 class="card-title">${x.id}. ${x.name}</h5>
        <p class="card-text py-0">${x.content}</p>
        <a href="${x.src}" class="btn btn-secondary px-3">Visit</a>
        </div>
    </div>
    `
});
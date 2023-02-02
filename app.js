const projects = [
    {
        "name": "Gallery",
        "id": 1,
        "src": "./01. Gallery/index.html",
        "img": "./assets/images/01.png",
        "content": ""
    },
    {
        "name": "Weather",
        "id": 2,
        "src": "./02. Weather/index.html",
        "img": "./assets/images/02.png",
        "content": ""
    },
    {
        "name": "AnalogClock",
        "id": 3,
        "src": "./03. AnalogClock/index.html",
        "img": "./assets/images/03.png",
        "content": ""
    },
    {
        "name": "Calculator",
        "id": 4,
        "src": "./04. Calculator/index.html",
        "img": "./assets/images/04.png",
        "content": ""
    },
    {
        "name": "DarkMode",
        "id": 5,
        "src": "./05. DarkMode/",
        "img": "./assets/images/05.png",
        "content": ""
    },
    {
        "name": "TaskList",
        "id": 6,
        "src": "./06. Task/index.html",
        "img": "./assets/images/06.png",
        "content": ""
    },
    {
        "name": "LoginForm",
        "id": 7,
        "src": "./07. LoginForm/index.html",
        "img": "./assets/images/07.png",
        "content": ""
    },
    {
        "name": "Timer",
        "id": 8,
        "src": "./08. Timer/index.html",
        "img": "./assets/images/08.png",
        "content": ""
    },
    {
        "name": "CountDown",
        "id": 9,
        "src": "./09. CountDown/index.html",
        "img": "./assets/images/09.png",
        "content": ""
    },
    {
        "name": "Calendar",
        "id": 10,
        "src": "./10. Calendar/index.html",
        "img": "./assets/images/10.png",
        "content": ""
    },
    {
        "name": "ImageHover",
        "id": 11,
        "src": "./11. ImageHover/index.html",
        "img": "./assets/images/11.png",
        "content": ""
    },
    {
        "name": "MenuDesign",
        "id": 12,
        "src": "./12. MenuDesign/index.html",
        "img": "./assets/images/12.png",
        "content": ""
    },
    {
        "name": "GoogleMapClone",
        "id": 13,
        "src": "./13. GoogleMapClone/index.html",
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
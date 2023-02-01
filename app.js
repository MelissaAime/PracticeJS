const projects = [
    {
        "name": "Gallery",
        "id": 1,
        "src": "./Gallery/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "Weather",
        "id": 2,
        "src": "./Weather/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "AnalogClock",
        "id": 3,
        "src": "./AnalogClock/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "Calculator",
        "id": 4,
        "src": "./Calculator/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "DarkMode",
        "id": 5,
        "src": "./DarkMode/",
        "img": "",
        "content": ""
    },
    {
        "name": "TaskList",
        "id": 6,
        "src": "./Task/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "LoginForm",
        "id": 7,
        "src": "./LoginForm/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "Time",
        "id": 8,
        "src": "./Time/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "CountDown",
        "id": 9,
        "src": "./CountDown/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "Calendar",
        "id": 10,
        "src": "./Calendar/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "ImageHover",
        "id": 11,
        "src": "./ImageHover/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "MenuDesign",
        "id": 12,
        "src": "./MenuDesign/index.html",
        "img": "",
        "content": ""
    },
    {
        "name": "GoogleMapClone",
        "id": 13,
        "src": "./GoogleMapClone/index.html",
        "img": "",
        "content": ""
    }
]

let card = document.getElementById('card-template');

projects.map((x)=>{
    card.innerHTML += `
    <div class="card"
        <div>
            <img src="" class="card-img-top" alt="${x.name}">
            <div class="card-body">
            <h5 class="card-title">${x.id}. ${x.name}</h5>
            <p class="card-text py-0">${x.content}</p>
            <a href="${x.src}" class="btn btn-secondary px-3">Visit</a>
            </div>
        </div>
    </div>
    `
});
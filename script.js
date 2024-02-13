const cardArray = [
    {
        name: "cheeseburger",
        img: "img/cheeseburger.png"
    },
    {
        name: "fries",
        img: "img/fries.png"
    },
    {
        name: "hotdog",
        img: "img/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "img/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "img/milkshake.png"
    },
    {
        name: "pizza",
        img: "img/pizza.png"
    },
    {
        name: "cheeseburger",
        img: "img/cheeseburger.png"
    },
    {
        name: "fries",
        img: "img/fries.png"
    },
    {
        name: "hotdog",
        img: "img/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "img/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "img/milkshake.png"
    },
    {
        name: "pizza",
        img: "img/pizza.png"
    }
]
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");

function createBoard() {
    for(let i = 0; i < 10; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "img/blank.png");
        card.setAttribute("data-id", i);
        gridDisplay.appendChild(card);
    }
}
createBoard();
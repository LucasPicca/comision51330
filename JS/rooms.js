const rooms = [
    {
        id: 1,
        type: "Suite",
        name: "Suite Double",
        price: 37000,
        person: 2,
        quantity: 1,
        img: "../images/suiteDouble.jpg"
    },
    {
        id: 2,
        type: "Suite",
        name: "Suite Single",
        price: 34000,
        person: 1,
        quantity: 1,
        img: "../images/suiteSingle.jpg"
    },
    {
        id: 3,
        type: "Superior",
        name: "Superior Double",
        price: 30000,
        person: 2,
        quantity: 1,
        img: "../images/superiorDouble.jpg"
    },
    {
        id: 4,
        type: "Superior",
        name: "Superior Single",
        price: 27000,
        person: 1,
        quantity: 1,
        img: "../images/superiorSingle.jpg"
    },
    {
        id: 5,
        type: "Standard",
        name: "Standard Double",
        price: 24000,
        person: 2,
        quantity: 1,
        img: "../images/standardDouble.jpg"
    },
    {
        id: 6,
        type: "Standard",
        name: "Standard Single",
        price: 21500,
        person: 1,
        quantity: 1,
        img: "../images/standardSingle.jpg"
    },
    {
        id: 7,
        type: "Triple",
        name: "Triple",
        price: 27000,
        person: 3,
        quantity: 1,
        img: "../images/triple.jpg"
    }
];

let yourCart = JSON.parse(localStorage.getItem("lsCart")) || [];

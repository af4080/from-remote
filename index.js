const start = document.querySelector(".start")
const game = document.querySelector(".thisGame")
const card = document.querySelector(".card")

const colorsArr = ["black", "black", "black", "black", "white", "yellow", "yellow", "yellow", "yellow",]
const arr = ["black", "black", "black", "black", "white", "yellow", "yellow", "yellow", "yellow",]
console.log(arr);
let x
let temp
let white
let count = 0

start.addEventListener("click", () => {

    for (let i = 0; i < 9; i++) {
        x = Math.floor(Math.random() * 9)
        temp = colorsArr[x]
        colorsArr[x] = colorsArr[i]
        colorsArr[i] = temp

    }
    // console.log(arr)

    for (let j = 0; j < 9; j++) {
        const gameItem = document.createElement("div")
        gameItem.style.height = "25%"
        gameItem.style.width = "25%"
        gameItem.style.borderRadius = "50%"
        console.log(arr[j]);
        gameItem.style.backgroundColor = arr[j]

        game.append(gameItem)

        if (j === 4) {
            white = j
        }

        gameItem.addEventListener("click", () => {
            let tmpo = gameItem.style.backgroundColor
            let mix=arr[j]
            gameItem.style.backgroundColor = "white"
            arr[j]="white"
            arrDiv[white].style.backgroundColor = tmpo
            arr[white]=mix
            console.log(j + " " + white);
            white = j
            console.log(j + " " + white);
            console.log(arr)
            let m
            for ( m = 0; m < arr.length; m++) {
                if(arr[m]!==colorsArr[m])
                    break;
                
            }
            if(m===arr.length){
                setTimeout(() => {
                    alert("wow")
                }, 500);
                
            }
                
            
        })

    }

    const arrDiv = document.querySelectorAll(".thisGame div")

    for (let index = 0; index < 9; index++) {
        const cardItem = document.createElement("div")
        cardItem.style.height = "25%"
        cardItem.style.width = "25%"
        cardItem.style.borderRadius = "50%"
        cardItem.style.backgroundColor = colorsArr[index]
        card.append(cardItem)
    }
})

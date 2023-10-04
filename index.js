let cards = document.getElementsByClassName("card");
let back = [1,2,3,4,5,6,7,8]
let moves = document.getElementById("moves")
let time = document.getElementById("time")

let date = new Date()
let intervalID = setInterval(() => {
    let sec = Math.floor((( date - new Date() )* -1)/1000)   
    let min = Math.floor(sec/60)
    sec = sec%60

    time.innerText = (min < 10 ? "0"+min : min) +
                    ":" + (sec < 10 ? "0"+sec : sec)
}, 1000);

back = [...back, ...back]
back.sort(() => Math.random() - 0.5)

let makeSpan = (i)=> {
    return  `<span>${back[i]}</span>`
}

let testWin = () =>{
    if (cards.length ===document.getElementsByClassName("good").length) {
        alert("You WIN!")
        clearInterval(intervalID)
    }
}

let testPair = () =>{
    let selected = document.getElementsByClassName("selected")
    if (selected.length < 2) {
        return
    }
    setTimeout(()=>{
    if (selected[0].innerText === selected[1].innerText) {
        selected[0].classList.add("good")
        selected[1].classList.add("good")
    }

    else{
        selected[0].innerHTML = "";
        selected[1].innerHTML = "";
    }
    selected[0].classList.remove("selected")
    selected[0].classList.remove("selected")  
},500)



  
}

for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", ()=>{
        if (cards[i].classList.length != 1) 
            return

        moves.innerText = moves.innerText * 1+1
        cards[i].innerHTML = makeSpan(i)
        cards[i].classList.add("selected")
        testPair()
        testWin()
        
        
    })
}

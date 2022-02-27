const holesDiv = document.querySelector(".holes");
const score = document.querySelector(".score");
const time = document.querySelector(".time");

const startButton = document.querySelector(".modal button");
const modal = document.querySelector(".modal");

const highscore = document.querySelector(".highscore")

const gameover = document.querySelector(".display h2");

const flySwatterPointer = document.querySelector(".flySwatterPointer");

let timeLeft;
let playerScore=0;
let maxScore=0;




for (let i = 1; i <= 16; i++)
{
    // creates squares in which onion shows //
    let hole = document.createElement("div");
     hole.classList.add("hole");
     holesDiv.appendChild(hole);

    // onion picture to the squares inside the grid //
    let onion = document.createElement("img")
     onion.classList.add("onion");
     onion.src = "./images/yellow-onion-100px.jpg";
     hole.appendChild(onion);

    // creates fly image on top of each square //
    let houseFly = document.createElement("img");
      houseFly.classList.add("houseFly");
      houseFly.src = "./images/house-fly.png";
      houseFly.setAttribute("name", "house-fly");
      hole.appendChild(houseFly);


}

window.addEventListener("click", (e) => {
  if (e.target.name === "housefly")
  console.log("housefly");
})


// start button function // 
startButton.addEventListener("click", () => {
  modal.classList.add("modal-close");
  timeLeft = 10;
  playerScore = 0;
  score.textContent = playerScore;
  time.textContent = timeLeft;

  let timer = setInterval(() => {
    time.textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timer);
      }
      else
      {
    timeLeft--;
    time.textContent = timeLeft < 10 ? "0" +
    timeLeft : timeLeft;
    const face = document.querySelectorAll(".house-fly")
    

     let chooseHouseFly = Math.floor(Math.random()*housefly.length);
       houseFly[chooseHouseFly].style.pointerEvents = "all"
       houseFly[chooseHouseFly].style.animation="faceup 2s ease"

       houseFly[chooseHouseFly].addEventListener("animationEnd", ()=>{
        houseFly[chooseHouseFly].style.pointerEvents="all"
        houseFly[chooseHouseFly].style.animation="facedown 0.5s ease"
       })

       houseFly(chooseHouseFly).addEventListener("animationEnd", ()=>{
        houseFly[chooseHouseFly].style.pointerEvents="none";
       }
      }
  }, 1000)
});
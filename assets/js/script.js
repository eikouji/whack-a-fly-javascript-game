const holesDiv = document.querySelector(".holes");

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


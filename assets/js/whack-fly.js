const holesDiv = document.querySelector(".holes");

for (let i=1; i<=16; i++)
{
    let hole = document.createElement("div")
    hole.classList.add("hole")
    holesDiv.appendChild(hole);

    let dirtPile = document.createElement("img")
    dirtPile.classList.add("dirtPile");
    dirtPile.src="./images/yellow-onion.jpg"
    hole.appendChild(dirtPile);


}


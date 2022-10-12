import retrieveAllPlayers from "./players.js"

const deleteBtn = document.getElementById("delete-btn");
const updateBtn = document.getElementById("update-btn");
const output = document.getElementById("output");
const currentPlayerOutput = document.getElementById("currentPlayerOutput");
const players = retrieveAllPlayers.getAllPlayers();


const printAllPlayers = (players)=>{
    
    let htmlTxt = "";

    players.forEach(player => {

        htmlTxt += `        
                            
                            <div class="col-md-4 col-sm-6">
                            <article class="playerCard">
                            <h2>${player.name}</h2>
                            <img class="img-fluid" src="${player.imgSrc}" alt= "Picture of: ${player.name}">
                            <p>Rating: ${player.rating}</p>
                            <p>${player.origin}</p>
                            <p>${player.league}</p>
                            <p>${player.club}</p>
                        </div></div>
                    </article>`;
    });
    output.innerHTML = htmlTxt;

}

(
    ()=>{
        printAllPlayers(players);
    }
)();

let currentPlayer;

window.onclick = e => {
    players.forEach(player => {
        if(e.target.innerText == player.name) {
            currentPlayerOutput.innerHTML = `Current chosen player is: ${player.name}`;
            currentPlayer = player.name;
        }
    });
}

deleteBtn.onclick = () => {
    if(currentPlayer == undefined) {
        alert("You need to choose a player first");
    } else {
        if(confirm(`Are you sure you want to delete ${currentPlayer} from your list?`)) {
            const index = players.map(player => player.name).indexOf(currentPlayer);
            let newArr = JSON.parse(localStorage.getItem("Players"));
            newArr.splice(index, 1);
            localStorage.setItem("Players", JSON.stringify(newArr));
            location.reload();
            console.log("Player deleted");
        } else {
            console.log("Player was not deleted");
        }
    }
}





import retrieveAllPlayers from "./players.js"

const deleteBtn = document.getElementById("delete-btn");
const updateBtn = document.getElementById("update-btn");
const output = document.getElementById("output");
const currentPlayerOutput = document.getElementById("currentPlayerOutput");
const players = retrieveAllPlayers.getAllPlayers();

const updateContainer = document.getElementById("updateContainer");
const updateName = document.getElementById("update-name");
const updateRating = document.getElementById("update-rating");
const updateImage = document.getElementById("update-image");
const updateCountry = document.getElementById("update-origin");
const updateLeague = document.getElementById("update-league");
const updateClub = document.getElementById("update-club");
const exitUpdateBtn = document.getElementById("exit-update-button")

updateContainer.style.visibility = "hidden";

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
        alert("You have to choose a player first!");
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

updateBtn.onclick = () => {
    if(currentPlayer == undefined) {
        alert("You have to choose a player first!");
    } else {
        const updatePlayer = players.filter(player => player.name == currentPlayer);
        const index = players.map(player => player.name).indexOf(currentPlayer);
        updateContainer.style.visibility = "visible";

        exitUpdateBtn.onclick = () => {
            let newName = updateName.value;
            let newRating = updateRating.value;
            let newImage = updateImage.value;
            let newCountry = updateCountry.value;
            let newLeague = updateLeague.value;
            let newClub = updateClub.value;

            if(newName != "") {updatePlayer[0].name = newName;}
            if(newRating != NaN && (newRating <= 100 && newRating >= 0)) {updatePlayer[0].rating = newRating;}
            if(newImage != "") {updatePlayer[0].imgSrc = newImage;}
            if(newCountry != "") {updatePlayer[0].origin = newCountry;}
            if(newLeague != "") {updatePlayer[0].league = newLeague;}
            if(newClub != "") {updatePlayer[0].club = newClub;}

            let newArr = JSON.parse(localStorage.getItem("Players"));
            newArr.splice(index, 1);
            newArr.push(...updatePlayer);
            localStorage.setItem("Players", JSON.stringify(newArr));
            location.reload();
        }
    }
}


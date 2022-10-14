//imports module from players.js.
import retrieveAllPlayers from "./players.js"


//HTML-element.
const outputMain = document.getElementById('output-main');
//Function from players.js.
const players = retrieveAllPlayers.getAllPlayers();

//Function under prints all players from localStorage.
const printAllPlayers = (players)=>{
    let htmlTxt = "";

    players.forEach(player => {
        htmlTxt += `<article class="playerCard">
                        <div>
                            <h2>${player.name}</h2>
                            <img class="imageSize" src="${player.imgSrc}" alt= "Picture of: ${player.name}">
                            <p>Rating: ${player.rating}</p>
                            <p>${player.origin}</p>
                            <p>${player.league}</p>
                            <p>${player.club}</p>
                        </div>
                    </article>`;
    });
    outputMain.innerHTML = htmlTxt;
 }
 
 (
    ()=>{
        printAllPlayers(players)
    }
 )();


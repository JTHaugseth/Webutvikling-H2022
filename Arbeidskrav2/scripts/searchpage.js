//importing module from players.js.
import retrieveAllPlayers from "./players.js"

//Html-elements.
const keyword = document.getElementById("input-keyword");
const searchButton = document.getElementById("search-button");
const output = document.getElementById("output-main");
const players = retrieveAllPlayers.getAllPlayers();

//Function below takes user input to print players.
searchButton.onclick = () => {

    let newArr = [];
    
    let getKeyword = keyword.value.toLowerCase();

    players.forEach(player => {
        
        if (player.name.toLowerCase() == getKeyword || 
            player.rating >= getKeyword || 
            player.origin.toLowerCase() == getKeyword || 
            player.league.toLowerCase() == getKeyword || 
            player.club.toLowerCase() == getKeyword) 
                
            newArr.push(player);
    });

    const printAllPlayers = (newArr)=>{
    
        let htmlTxt = "";
    
        newArr.forEach(player => {

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
            printAllPlayers(newArr)
        }
     )();
}



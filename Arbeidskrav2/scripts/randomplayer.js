import retrieveAllPlayers from "./players.js"

const randomButton = document.getElementById("search-button");
const output = document.getElementById("output-main");
const players = retrieveAllPlayers.getAllPlayers();

searchButton.onclick = () => {

    let randomPlayer = Math.floor(mMath.random()*newArr.size);
    let newArr = [];
        
        if (player.id == randomPlayer) {
            newArr.push(player);
        }
             
                


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

import retrieveAllPlayers from "./players.js"

const randomButton = document.getElementById("randomBtn");
const output = document.getElementById("output");


randomButton.onclick = () => {
    let array = JSON.parse(localStorage.getItem("Players"));
    let randomPlayer = Math.floor(Math.random()*array.length +1);
        
       console.log(randomPlayer)

        

        /*if (player.id == randomPlayer) {
            newArr.push(player);
        }*/
             
                

        /*
    const printAllPlayers = (array)=>{
    
        let htmlTxt = "";
    
        array.forEach(player => {

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
            printAllPlayers(array)
        }
     )();*/


    
    
}

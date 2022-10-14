//HTML-elements.
const randomButton = document.getElementById("randomBtn");
const output = document.getElementById("output");

//Function below prints random player.
randomButton.onclick = () => {
    let player = JSON.parse(localStorage.getItem("Players"));
    let random = Math.floor(Math.random()*player.length);
     
        const printRandomPlayers = (player=>{
            let htmlTxt = "";
            htmlTxt = ` 
                        <div class="col-md-4 col-sm-6">
                                <article class="playerCard">
                                <h2>${player[random].name}</h2>
                                <img class="img-fluid" src="${player[random].imgSrc}" alt= "Picture of: ${player[random].name}">
                                <p>Rating: ${player[random].rating}</p>
                                <p>${player[random].origin}</p>
                                <p>${player[random].league}</p>
                                <p>${player[random].club}</p>
                            </div></div>
                        </article>`;

             output.innerHTML = htmlTxt;
        });
    (
        ()=>{
            printRandomPlayers(player)
        }
    )();    
};
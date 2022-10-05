import retrieveAllPlayers from "./players.js"


    // Get elements
    const outputMain = document.getElementById('Output-main');
    const players = retrieveAllPlayers.getAllPlayers();

//  // Delete players
// //  const deletePlayer =() => {
// //     let id = parseInt(deleteIdTxt.value);
// //     let index = movies.findIndex(player=>player.id===id);
// //     players.splice(index, 1);
// //     showPlayers(players);
//  }
 
 
 
   

 const printAllPlayers = (players)=>{
    
    let htmlTxt = "";

    players.forEach(player => {
        htmlTxt += `<article>
                <div>
                    <h2>${player.name}</h2>
                    <img class="images" src="${player.imgSrc}" alt= "Picture of: ${player.name}"></img>
                    <h4 id="playerRating">${player.rating}<h4>
                    <p id="playerOrigin">${player.origin}<p>
                    <p id="playerLeauge">${player.league}<p>
                    <p id="playerClub">${player.club}<p>
                </div>
             </article>`;
    });
    console.log(htmlTxt);
    outputMain.innerHTML = htmlTxt;

 }

 (
    ()=>{
        printAllPlayers(players)
    }
 )();


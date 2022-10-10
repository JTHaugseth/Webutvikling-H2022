import retrieveAllPlayers from "./players.js"


    // Get elements
    const outputMain = document.getElementById('output-main');
    const players = retrieveAllPlayers.getAllPlayers();

//  // Delete players
// //  const deletePlayer =() => {
// //     let id = parseInt(deleteIdTxt.value);
// //     let index = movies.findIndex(player=>player.id===id);
// //     players.splice(index, 1);
// //     showPlayers(players);
//  }
 
//  Search for players

// const playerSearch = (player) => {
//     let htmlTxt "";
//     players.forEach(player => {
//         let originSearch = "";
//         switch (player.origin) {
//             case "Norway":
//                 player.origin = "Norway";
//                 break;
//             case "Brazil":
//                 player.origin = "Brazil";
//                 break;
//             case "Senegal":
//                 player.origin = "Senegal";
//                 break;
//             case "Belgium":
//                 player.origin = "Belgium";
//                 break;
//             case "Portugal":
//                 player.origin = "Portugal";
//                 break;
//             case "Argentina":
//                 player.origin = "Argentina";
//                 break;
//             case "England":
//                 player.origin = "England";
//                 break;
//             case "Sweden":
//                 player.origin = "Sweden";

//         }
//         players.forEach(player => {
//             htmlTxt += `<article>
//                     <div>
//                         <h2 class="playerName">${player.name}</h2>
//                         <img class="images" src="${player.imgSrc}" alt= "Picture of: ${player.name}"></img>
//                         <p id="playerRating">${player.rating}<p>
//                         <p id="playerOrigin">${player.origin}<p>
//                         <p id="playerLeague">${player.league}<p>
//                         <p id="playerClub">${player.club}<p>
//                     </div>
//                  </article>`;
//         });
//         console.log(htmlTxt);
//         outputMain.innerHTML = htmlTxt;
//     })

// }
 
   

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
    console.log(htmlTxt);
    outputMain.innerHTML = htmlTxt;

 }

 (
    ()=>{
        printAllPlayers(players)
    }
 )();


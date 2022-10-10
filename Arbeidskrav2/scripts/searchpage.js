import retrieveAllPlayers from "./players.js"

const name = document.getElementById("input-name");
const rating = document.getElementById("input-rating");
const country = document.getElementById("input-country");
const league = document.getElementById("input-league");
const club = document.getElementById("input-club");
const searchButton = document.getElementById("search-button");
const output = document.getElementById("output-main");
const players = retrieveAllPlayers.getAllPlayers();

searchButton.onclick = () => {
    getName = name.value;
    getRating = rating.value;
    getCountry = country.value;
    getLeague = league.value;
    getClub = club.value;

    players.forEach(player => {
        players.filter(player => player.name == getName);
        
    }
    
    
}



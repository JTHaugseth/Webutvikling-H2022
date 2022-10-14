// Starting players.
const playersArray = [
    {
        name: 'Haaland',
        rating: 99,
        imgSrc: './images/haaland.png',
        origin: 'Norway',
        league: 'Premier League',
        club: 'Manchester City',
    },
    {
        name: 'Richarlison',
        rating: 97,
        imgSrc: './images/richarlison.png',
        origin: 'Brazil',
        league: 'Premier League',
        club: 'Spurs',
    },
    {
        name: 'Koulibaly',
        rating: 98,
        imgSrc: './images/koulibaly.png',
        origin: 'Senegal',
        league: 'Premier League',
        club: 'Chelsea',
    },
    {
        name: 'Ketelaere',
        rating: 96,
        imgSrc: './images/ketelaere.png',
        origin: 'Belgium',
        league: 'Serie A TIM',
        club: 'Milan',
    },
    {
        name: 'Ronaldo',
        rating: 96,
        imgSrc: './images/ronaldo.png',
        origin: 'Portugal',
        league: 'Premier League',
        club: 'Manchester United',
    },
    {
        name: 'Messi',
        rating: 99,
        imgSrc: './images/messi.png',
        origin: 'Argentina',
        league: 'Champions League',
        club: 'PSG',
    },
    {
        name: 'Sterling',
        rating: 84,
        imgSrc: './images/sterling.png',
        origin: 'England',
        league: 'Premier League',
        club: 'Chelsea',
    },
    {
        name: 'Zlatan',
        rating: 82,
        imgSrc: './images/zlatan.png',
        origin: 'Sweden',
        league: 'Serie A TIM',
        club: 'Milan',
    },
];

// If localStorage is empty, we add our own players from the array above.
if (localStorage.getItem("Players")) {
    console.log("Localstorage exists");
} else {
    localStorage.setItem("Players", JSON.stringify(playersArray));
}

// The function under exports our localStorage to other scripts in our file.  
let retrieveAllPlayers = ( function() {
    const storedArray = JSON.parse(localStorage.getItem("Players"));

const getAllPlayers = () => {
    return storedArray;
}

return{getAllPlayers}
}());

//exports players module to other js scripts.
export default retrieveAllPlayers;
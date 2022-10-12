const playersArray = [
    {
        id: 1,
        name: 'Haaland',
        rating: 99,
        imgSrc: './images/haaland.png',
        origin: 'Norway',
        league: 'Premier League',
        club: 'Manchester City',
    },
    {
        id: 2,
        name: 'Richarlison',
        rating: 97,
        imgSrc: './images/richarlison.png',
        origin: 'Brazil',
        league: 'Premier League',
        club: 'Spurs',
    },
    {
        id: 3,
        name: 'Koulibaly',
        rating: 98,
        imgSrc: './images/koulibaly.png',
        origin: 'Senegal',
        league: 'Premier League',
        club: 'Chelsea',
    },
    {
        id: 4,
        name: 'Ketelaere',
        rating: 96,
        imgSrc: './images/ketelaere.png',
        origin: 'Belgium',
        league: 'Serie A TIM',
        club: 'Milan',
    },
    {
        id: 5,
        name: 'Ronaldo',
        rating: 96,
        imgSrc: './images/ronaldo.png',
        origin: 'Portugal',
        league: 'Premier League',
        club: 'Manchester United',
    },
    {
        id: 6,
        name: 'Messi',
        rating: 99,
        imgSrc: './images/messi.png',
        origin: 'Argentina',
        league: 'Champions League',
        club: 'PSG',
    },
    {
        id: 7,
        name: 'Sterling',
        rating: 84,
        imgSrc: './images/sterling.png',
        origin: 'England',
        league: 'Premier League',
        club: 'Chelsea',
    },
    {
        id: 8,
        name: 'Zlatan',
        rating: 82,
        imgSrc: './images/zlatan.png',
        origin: 'Sweden',
        league: 'Serie A TIM',
        club: 'Milan',
    },
];

if (localStorage.getItem("Players")) {
    console.log("Localstorage exists");
} else {
    localStorage.setItem("Players", JSON.stringify(playersArray));
}

let retrieveAllPlayers = ( function() {

    const storedArray = JSON.parse(localStorage.getItem("Players"));

const getAllPlayers = () => {
    return storedArray;
}

return{getAllPlayers}

}());

export default retrieveAllPlayers;
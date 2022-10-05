
let retrieveAllPlayers = ( function() {

    const playersArray = [
    {
        id: 1,
        name: 'Haaland',
        rating: 99,
        imgSrc: './images/haaland.webp',
        origin: 'Norway',
        leauge: 'Premier Leauge',
        club: 'Manchester City',
    },
    {
        id: 2,
        name: 'Richarlison',
        rating: 97,
        imgSrc: './images/richarlison.webp',
        origin: 'Brazil',
        leauge: 'Premier Leauge',
        club: 'Spurs',
    },
    {
        id: 3,
        name: 'Koulibaly',
        rating: 98,
        imgSrc: './images/koulibaly.webp',
        origin: 'Senegal',
        leauge: 'Premier Leauge',
        club: 'Chelsea',
    },
    {
        id: 4,
        name: 'Ketelaere',
        rating: 96,
        imgSrc: './images/ketelaere.webp',
        origin: 'Belgium',
        leauge: 'Serie A TIM',
        club: 'Milan',
    },
    {
        id: 5,
        name: 'Ronaldo',
        rating: 96,
        imgSrc: './images/ronaldo.webp',
        origin: 'Portugal',
        leauge: 'Premier Leauge',
        club: 'Manchester United',
    },
    {
        id: 6,
        name: 'Messi',
        rating: 99,
        imgSrc: './images/messi.webp',
        origin: 'Argentina',
        leauge: 'Champions Leuage',
        club: 'PSG',
    },
    {
        id: 7,
        name: 'Sterling',
        rating: 84,
        imgSrc: './images/sterling.webp',
        origin: 'England',
        leauge: 'Premier Leauge',
        club: 'Chelsea',
    },
    {
        id: 8,
        name: 'Zlatan',
        rating: 82,
        imgSrc: './images/zlatan.webp',
        origin: 'Sweden',
        leauge: 'Serie A TIM',
        club: 'Milan',
    },
];

const getAllPlayers = () => {
    return playersArray;
}

return{getAllPlayers}

}());

export default retrieveAllPlayers;
const name = document.getElementById("input-name");
const picture = document.getElementById("input-picture");
const rating = document.getElementById("input-rating");
const country = document.getElementById("input-country");
const league = document.getElementById("input-league");
const club = document.getElementById("input-club");
const button = document.getElementById("btn-save");
const output = document.getElementById("output");

button.onclick = () => {
    
    let getName = name.value;
    let getRating = rating.value;
    let getPicture = picture.value;
    let getCountry = country.value;
    let getLeague = league.value;
    let getClub = club.value;
    
    let storedArray = JSON.parse(localStorage.getItem("Players"));

    if(getName == "" || getPicture == "" || getRating == "" || getCountry == "" || getLeague == ""|| getClub == ""){
        output.innerHTML = "Remember to fill out all fields"
    } else {
        let newPlayer = {
            id: (storedArray.length + 1),
            name: getName,
            rating: getRating,
            imgSrc: getPicture,
            origin: getCountry,
            league: getLeague,
            club: getClub 
        };

        storedArray.push(newPlayer);
        output.innerHTML = "Player was successfully saved";   
    }
    

    localStorage.setItem("Players", JSON.stringify(storedArray));
}





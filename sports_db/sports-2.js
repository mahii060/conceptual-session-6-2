const loadPlayers = (name) => {
    const searchValue = document.getElementById('search-field').value;
    const searchName = name || searchValue;
    const URL = `https://thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchName}`
    try {
        fetch(URL).then(res => res.json()).then(data => showPlayers(data.player))
    }
    catch (error) {
        console.log(error)
    }
    document.getElementById('search-field').value = "";
    document.getElementById('player-details').innerHTML = ''
    document.getElementById('male').classList.add('d-none')
    document.getElementById('female').classList.add('d-none')
}
const showPlayers = (players) => {
    console.log(players)
    const playersContainer = document.getElementById('players-container');
    playersContainer.innerHTML = "";
    players.forEach((player) => {
        console.log(player)
        const { strThumb, strGender, strDescriptionEN, strPlayer, strNationality, idPlayer, strSport } = player;
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('col')
        playerDiv.innerHTML = `
        <div class="card h-100">
            <img src="${strThumb ? strThumb : "https://shorturl.at/avEV9"}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${strPlayer}</h5>
                <p class="card-text">${strDescriptionEN ? strDescriptionEN.slice(0, 100) + "..." : "No description"}</p>
                <button onclick ="singlePlayerDetails(${idPlayer})" type="button" class="btn btn-info">Details</button>
                <button onclick ="clearContainer(${idPlayer})" type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
    `;
        playersContainer.appendChild(playerDiv)
    });
};
const singlePlayerDetails = (idPlayer) => {
    const URL = `https://thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${idPlayer}`
    try {
        fetch(URL)
            .then(res => res.json())
            .then(data => showPlayerDetails(data.players[0]));
    }
    catch (error) {
        console.error("Error:", error);
    }
    document.getElementById('male').classList.add('d-none')
    document.getElementById('female').classList.add('d-none')
}
const showPlayerDetails = (player) => {
    const { strThumb, strGender, strDescriptionEN, strPlayer, strNationality, idPlayer, strSport } = player;
    if (strGender === 'Male') {
        document.getElementById('male').classList.remove('d-none')

    }
    else {
        document.getElementById('female').classList.remove('d-none')
    }
    const playerDetails = document.getElementById('player-details');
    playerDetails.innerHTML = `
    <div id ="player-card-123" class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${strThumb ? strThumb : "https://shorturl.at/avEV9"}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${strPlayer}</h5>
                    <h5 class="">Sport Type: ${strSport === 'Soccer' ? 'Football' : strSport}</h5>
                    <h5 class="">Nationality: ${strNationality}</h5>
                    <p class="card-text">${strDescriptionEN ? strDescriptionEN.slice(0, 100) + "..." : "No description"}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `
};
const clearContainer = (idPlayer) => {
    const URL = `https://thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${idPlayer}`
    try {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                hidePlayerDetails(data.players[0]);
            });
    }
    catch (error) {
        console.log(error)
    }
}
const hidePlayerDetails = (player) => {
    const { strThumb, strGender, strDescriptionEN, strPlayer, strNationality, idPlayer, strSport } = player;
    document.getElementById('player-details').innerHTML = '';
}

loadPlayers('Cristiano Ronaldo');

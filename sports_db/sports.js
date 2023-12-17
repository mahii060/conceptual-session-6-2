const loadPlayers = (name) => {
    document.getElementById('single-player-details').innerHTML = '';
    document.getElementById('male').classList.add('d-none')
    document.getElementById('female').classList.add('d-none')
    const searchValue = document.getElementById('search-value').value;
    const searchName = name || searchValue
    const URL = `https://thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchName}`
    fetch(URL)
        .then(res => res.json())
        .then(data => showPlayers(data.player))
}
const showPlayers = (players) => {
    // Clearing the input value
    document.getElementById('search-value').value = "";
    // console.log(players);

    // Players container
    const playersInfo = document.getElementById('players-info');
    // Clearing the players container before displaying new players
    playersInfo.innerHTML = '';

    // Iterating over players
    players.forEach((player) => {
        console.log(player)
        const { strPlayer, strThumb, strSport, strNationality, idPlayer, strDescriptionEN } = player;

        //Displaying every single player
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('col');
        playerDiv.innerHTML = `
        <div class="card">
            <img src="${strThumb ? strThumb : "https://shorturl.at/coqH5"}"class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${strPlayer}</h5>
                <h5 class="card-title">${strSport}</h5>
                <h5 class="card-title">${strNationality}</h5>
                <p class="card-text">${strDescriptionEN ? strDescriptionEN.slice(0, 100) + "..." : "Not found any content"}</p>
            </div>
            <div class ="my-3 mx-3">
                <button onclick ="singlePlayer('${idPlayer}')" type="button" class="btn btn-warning">Details</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
        `
        playersInfo.appendChild(playerDiv)
    });
};

const singlePlayer = (idPlayer) => {
    document.getElementById('')
    const URL = `https://thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${idPlayer}`;
    fetch(URL).then(res => res.json()).then(data => showSinglePlayer(data.players[0]))
}
const showSinglePlayer = (player) => {
    console.log(player)
    document.getElementById('single-player-details').innerHTML = '';
    document.getElementById('male').classList.add('d-none')
    document.getElementById('female').classList.add('d-none')
    const singlePlayerDetails = document.getElementById('single-player-details');
    const { strPlayer, strThumb, strSport, strNationality, idPlayer, strBanner, strDescriptionEN, strGender } = player;
    if (strGender === 'Male') {
        document.getElementById('male').classList.remove('d-none')
    }
    else {
        document.getElementById('female').classList.remove('d-none')
    }
    singlePlayerDetails.innerHTML = `
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${strThumb ? strThumb : "https://shorturl.at/coqH5"}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${strPlayer}</h5>
                    <p class="card-text">${strDescriptionEN.slice(0, 250) + "..."}</p>
                </div>
            </div>
        </div>
    </div>
    `
}
loadPlayers('neymar')
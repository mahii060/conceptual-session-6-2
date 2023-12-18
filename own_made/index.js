const loadData = () => {
    const URL = `https://raw.githubusercontent.com/rokib97/json-api/main/public/data.json`;
    fetch(URL).then(res => res.json()).then(data => showData(data))
}
const showData = (shoes) => {
    function handleImageError(img) {
        // Set an alternative image source
        img.src = "https://shorturl.at/avEV9";
    }
    console.log(shoes)
    const shoesContainer = document.getElementById('shoes-container');
    // Function to handle image error
    shoes.forEach((shoe) => {
        console.log(shoe)
        const { id, color, pairImage, price, name } = shoe;
        const shoeDiv = document.createElement('div');
        shoeDiv.classList.add('col');
        shoeDiv.innerHTML = `
        <div class="card">
            <img src="${pairImage}"
            onerror ="handleImageError(this)" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h5 class="card-title">Color: ${color}</h5>
                <h5 class="card-title">Price: ${price}</h5>
                <button type="button" class="btn btn-primary">Buy Now</button>
                <button type="button" class="btn btn-info">Details</button>
            </div>
        </div>
    `;
        shoesContainer.appendChild(shoeDiv)

    })

}
loadData()
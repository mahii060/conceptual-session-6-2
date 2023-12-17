const loadMeme = () => {
    const URL = 'https://meme-api.com/gimme/7';
    fetch(URL)
        .then(res => res.json())
        .then(data => showMeme(data.memes))
}
const showMeme = (memes) => {
    console.log(memes)
    memes.forEach((meme) => {
        console.log(meme)
        const memesContainer = document.getElementById('memes-container');
        const memeDiv = document.createElement('div');
        memeDiv.innerHTML = `
        <img src="${meme.url}" alt="">
        `
        memesContainer.appendChild(memeDiv)
    })
}
loadMeme()
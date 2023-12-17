const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => showData(data))
}
const showData = (data) => {
    // console.log(data)
    for (postData of data) {
        const container = document.getElementById('container');
        const postContainer = document.createElement('div');
        // console.log(postData)
        postContainer.innerHTML = `
        <li class ="text-3xl text-justify font-semibold mb-3">${postData.title}</li>
        `
        container.appendChild(postContainer)
    };
};
loadData()
const apiKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("results");

searchBtn.addEventListener("click", async () => {
    const query = searchInput.value; //it will check  the whetever search ...
    if (!query) return; //if querey is empty it will return from the

    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    resultsContainer.innerHTML = "";  
    data.results.forEach(photo => {
        const imgElement = document.createElement("img");
        imgElement.src = photo.urls.small;
        imgElement.alt = photo.alt_description;
        resultsContainer.appendChild(imgElement);
    });
});


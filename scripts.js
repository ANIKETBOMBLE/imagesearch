const apiKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("results");
const loadMoreBtn = document.getElementById("loadmoreBtn");

let query = "";
let currentPage = 1;

searchBtn.addEventListener("click", async () => {
    query = searchInput.value.trim();
    if (!query)return;

    currentPage = 1;
    resultsContainer.innerHTML = "";
    await fetchPhotos();
});

loadMoreBtn.addEventListener("click", async () => {
    currentPage++;
    await fetchPhotos();
});

async function fetchPhotos() {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}&page=${currentPage}&per_page=10`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        data.results.forEach(photo => {
            const imgElement = document.createElement("img");
            imgElement.src = photo.urls.small;
            imgElement.alt = photo.alt_description || "No description available";
            resultsContainer.appendChild(imgElement);
        });

            if (data.total_pages > currentPage ?"block":"none");
    } catch (error) {
        console.log(error);
		
    }
}

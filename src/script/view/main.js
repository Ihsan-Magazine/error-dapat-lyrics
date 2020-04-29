const main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const songsListElement = document.querySelector("#songList");

    const onButtonSearchClicked = () => {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchSongs(searchElement.value);
    };

    const renderResult = results => {
        songsListElement.innerHTML = "";
        results.forEach(songs => {
            const {name, album, description} = songs

            const songsElement = document.createElement("div");
            songsElement.setAttribute("class", "songs");

            songsElement.innerHTML = `<img class="songs-album" src="' + ${album} + '" alt="Songs Album">
            <div class="songs-info">
            <h2>${name}</h2>
            <p>${description}</p>
            </div>`;
            
            songsListElement.appendChild(songsElement);
        }) 
    };

    const fallbackResult = message => {
        songsListElement.innerHTML = "";
        songsListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

    
    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};
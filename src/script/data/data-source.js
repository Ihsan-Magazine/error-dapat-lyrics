function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchSongs = function (keyword) {

    const filteredSongs = songs.filter(songs => songs.name.toUpperCase().includes(keyword.toUpperCase()));

    if (filteredSongs.length) {
        this.onSuccess(filteredSongs);
    } else {
        this.onFailed(`${keyword} is not found`);
    }
};
function formatNowPlaying([title, artist, duration]) {
    return `Now Playing: ${artist} - ${title} [${duration}]`;
}

console.log(formatNowPlaying(['Number One', 'Nelly', '4:09'])); // Now Playing: Nelly – Number One [4:09]
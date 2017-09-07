//ajax request Promises to async/await evolution

function fetchAlbums() {
 fetch('http://rallycoding.herokuapp.com/api/music_albums')
 .then (res => res.json())
 .then (json => console.log(json));
}

fetchAlbums();

async function fetchAlbums() {
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();
    console.log(json);
   }
   
   fetchAlbums();

const fetchAlbums = async () => {
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();
    console.log(json);
   }
   
   fetchAlbums();
/*
## Instructions

1. Open `objects.js`

2. Assign an object to the variable `playlist` and initialize the object with a key-value pair — the keys will be artist names and the values will be song titles. (What limitation does this impose on our `playlist`?)

3. Create a function `updatePlaylist` that accepts three parameters: the playlist (an object), an artist name (a string), and a song title. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.

4. Create a function `removeFromPlaylist` that accepts two arguments (the playlist object and the artist name). The body of the function should delete the key-value pair from the playlist and return the updated playlist.
*/

var playlist = {VampireWeekend: 'A-punk', DaftPunk: 'Get lucky', BandaDoMar: 'Dia clarear', Queen: 'Do not stop me now'}

function updatePlaylist(p, artist, song){
  return Object.assign({}, p, {[artist] : song})
}

console.log(updatePlaylist(playlist, 'Seu Jorge', 'Carolina'))

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}
  // it's important that we merge everything into
  // a new object such as the empty {}. 
    // Otherwise, the object obj will be modified. 
    // Test what happens if this line was written as:
    // return Object.assign(obj, { [key]: value })
 
const recipe = { eggs: 3 }
 
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
// returns `{ eggs: 3, chocolate: '1 cup' }`
 
recipe // { eggs: 3 }
// Task 2: Fetching Characters Using Fetch API

// Replace with your Marvel API public key
const publicKey = 'c642fb55c89c4eb1fcf4617dffa6770e'
const privateKey = '2563941b3d2312743f9ccabeb368fef834420aff';

// Marvel API base URL
const baseURL = 'https://gateway.marvel.com:443/v1/public/characters';

// Function to fetch Marvel Comics characters
async function fetchCharacters() {
    // Generate a timestamp
    const timestamp = Date.now();

    // Generate the hash for authentication
    const hash = md5(timestamp + privateKey + publicKey);

    // Fetch data from the Marvel API
    try {
        const response = await fetch(`${baseURL}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`);
        const data = await response.json();
        console.log('Fetched Characters:', data.data.results); // Log the characters to the console
        return data.data.results;
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

// MD5 hash function (You can use a library or include an implementation for hashing)
function md5(str) {
    // You might want to include an MD5 library or implementation
    // Example library: https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js
    return CryptoJS.MD5(str).toString(CryptoJS.enc.Hex);
}

// Task 3: Updating User Interface Dynamically
// Fetch characters and update the UI
    fetchCharacters().then(characters => {
        if (characters) {
            displayCharacters(characters);
        }
    });
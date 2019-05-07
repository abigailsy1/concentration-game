import axios from 'axios';

export function fetchCardDeck() {
    return axios
    .get("https://deckofcardsapi.com/")
    .then(response => response.data)
    console.log(response)
    .catch(error => {
        console.log("Error", error);
    })
}
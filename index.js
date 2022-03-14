
document.addEventListener('DOMContentLoaded', ()=> {
   handleGetCatFactButton()
   clearFactButton()
   handleLikeButton()
 })
let clicked = false
function fetchCatPictures(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(pictures => {
        const catFactContainer = document.getElementById('fact-photo-container')
        const photoList = document.getElementById('single-photos')
        const images = document.getElementById("catPics").setAttribute('src', pictures[0].url)
        photoList.append(images)
        catFactContainer.append(photoList)
    } )
}


 function handleCatFactFetch() {
    const fetchURL = 'https://catfact.ninja/fact'
    fetch(fetchURL)
        .then(resp => resp.json())
        .then(catFacts => {
            const catFactContainer = document.getElementById('fact-photo-container')
            const catFunFactList = document.getElementById('specific-facts')
            catFactContainer.innerHTML += 
            `${catFacts.fact}
            <style>
            background-color: white;
            </style>
            <br>
            <button class="like_btn">
            <span id="count">0</span> Like
            </button>
            `
            catFactContainer.append(catFunFactList)
               })
 }

function handleGetCatFactButton(){
    const button = document.getElementById("cat-button")
    button.addEventListener('click', (e) => {
    handleCatFactFetch(e)
    fetchCatPictures(e)
    })
}

function clearFactButton(){
    const hissButton = document.getElementById('clear-results')
    hissButton.addEventListener('click', reload())
    }

function handleLikeButton(){
        const likeBtn = document.getElementById('likeBtn');
    likeBtn.addEventListener('click', ()=> {
        console.log("hello")
    if(likeBtn.innerHTML === "Love") {
        return likeBtn.innerHTML === "Loved"
    } if(likeBtn.innerHTML !== "Love") {
        return likeBtn.innerHTML === "Love"
    }
    })
    }

document.addEventListener('DOMContentLoaded', ()=> {
   handleGetCatFactButton()
   clearFactButton()
   handleLikeButton()
 })

function fetchCatPictures(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(pictures => {
        console.log("pictures", pictures)
        const catFactContainer = document.getElementById('fact-photo-container')
        const photoList = document.getElementById('single-photos')
        photoList.innerHTML += `
        <img src= ${pictures[0].url}
        width="200"
        height="200"/>
        <button id="likeBtn">Love</button>`
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
            <br>
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
    hissButton.addEventListener('click', reload, false)
    }

    function handleLikeButton (){
        const likeBtn = document.getElementById('likeBtn')
likeBtn.addEventListener('click', (e)=> {
    if(likeBtn.innerHTML === "Love") {
        return likeBtn.innerHTML === "Loved"
    } if(likeBtn.innerHTML !== "Love") {
        return likeBtn.innerHTML === "Love"
    }
})
    }
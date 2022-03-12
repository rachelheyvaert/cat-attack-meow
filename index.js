
document.addEventListener('DOMContentLoaded', ()=> {
   handleGetCatFactButton()
   clearFactButton()
 })

function fetchCatPictures(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(pictures => {
        const catFactContainer = document.getElementById('fact-photo-container')
        const photoList = document.getElementById('single-photos')
        photoList.innerHTML += `
        <img src= "${pictures}">`
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
    hissButton.addEventListener('click', (e)=>{
        const catFactContainer = document.getElementById('fact-photo-container')
       return catFactContainer.innerHTML= ''
    }) 
}

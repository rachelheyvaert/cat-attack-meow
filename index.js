
document.addEventListener('DOMContentLoaded', ()=> {
   handleGetCatFactButton()
   clearAllButton()

 })
function fetchCatPictures(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(pictures => {
        const catImgContainer = document.getElementById('img-container')
        const photoList = document.getElementById('single-photos')
        const images = document.getElementById("catPics")
        images.setAttribute('src', pictures[0].url)
        photoList.append(images)
        catImgContainer.append(photoList)
        
    } )
}


 function handleCatFactFetch() {
    const fetchURL = 'https://catfact.ninja/fact'
    fetch(fetchURL)
        .then(resp => resp.json())
        .then(catFacts => createCatFacts(catFacts))      
        
}
             

 function createCatFacts(catFacts){
    const catFactContainer = document.getElementById('fact-container')
    const catFunFactList = document.getElementById('specific-facts')
    catFunFactList.innerHTML = catFacts.fact
    catFactContainer.append(catFunFactList)
    }


    //Handeling buttons
function handleGetCatFactButton(){
    const button = document.getElementById("cat-button")
    button.addEventListener('click', (e) => {
    handleCatFactFetch(e)
    fetchCatPictures(e)
    })
}

function clearAllButton(){
    const hissButton = document.getElementById('clear-results')
    hissButton.addEventListener('click', (e)=>{
        reload(e)
    })
}

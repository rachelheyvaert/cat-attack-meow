document.addEventListener('DOMContentLoaded', ()=> {
   handleGetCatFactButton()
   clearFactButton()
 })


 function handleFetch() {
    const fetchURL = 'https://catfact.ninja/fact'
    fetch(fetchURL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            const catFactContainer = document.getElementById('fact-container')
            const pFunFact = document.createElement('p')
            pFunFact.id = 'single-fact'
            pFunFact.textContent = data.fact
           catFactContainer.append(pFunFact)
        }
 )}

function handleGetCatFactButton(){
    const button = document.getElementById("cat-button")
    button.addEventListener('click', (e) => {
        handleFetch(e)
    })
}

function clearFactButton(){
    const hissButton = document.getElementById('clear-results')
    hissButton.addEventListener('click', (e)=>{
        const catFactContainer = document.getElementById('fact-container')
        catFactContainer.textContent = ''
    })
}
document.addEventListener('DOMContentLoaded', () => {
    handleGetCatFactButton();
  })



const catImgContainer = document.getElementById('img_container');
const images = document.querySelector("#cat_pics");
function fetchCatPictures(){
     fetch('https://api.thecatapi.com/v1/images/search')
     .then(response => response.json())
     .then(pictures => {
         console.log(pictures) //Array
         images.setAttribute('src', pictures[0].url);
         catImgContainer.append(images);    
     })
 }
 

function handleCatFactFetch() {
     fetch('https://catfact.ninja/fact')
         .then(resp => resp.json())
         .then(catFacts => {
             console.log(catFacts) //object
              createCatFacts(catFacts)})           
 }
     
const catFactContainer = document.getElementById('fact_container');
const catFunFactList = document.getElementById('specific_facts');
function createCatFacts(catFacts){
     catFunFactList.innerHTML = catFacts.fact;
     catFactContainer.append(catFunFactList);
     }

function resetLikes(){
        let likes = document.querySelector('#count');
         return likes.innerText = 0
    }
 
const meowBtn = document.getElementById("cat_button");
function handleGetCatFactButton(){
     meowBtn.addEventListener('click', (e) => {
        handleCatFactFetch(e);
        fetchCatPictures(e);
        resetLikes(e);
     }
     )}


 const likeBtn = document.getElementById('like_btn');
 likeBtn.addEventListener('click', handleLikeBtn);

 function handleLikeBtn(){
        let likes = document.querySelector('#count');
        let num = parseInt(likes.innerText)
        num += 1
        return likes.innerText = num
     }


const adoptBtn = document.getElementById('save_btn');

adoptBtn.addEventListener('click', handleAdoptBtn)

function handleAdoptBtn(){
    const savedContainer= document.getElementById("saved_cards");
    const savedFact= catFactContainer.textContent;
    const likeCountCurrent = likeBtn.innerText;
    savedContainer.innerHTML += `
        <img src="${images.src}" />
        <p>${savedFact}</p>
        <p>${likeCountCurrent}</p>
    `
}


const hissBtn = document.getElementById('clear_results');

hissBtn.addEventListener('click', clearAllButton);

function clearAllButton(e){
       location.reload(e);
}
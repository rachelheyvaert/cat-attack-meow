//global variables
const catImgContainer = document.getElementById('img_container');
const photoList = document.getElementById('single_photos');
const images = document.getElementById("cat_pics");
const getFactBtn = document.getElementById("cat_button");

document.addEventListener('DOMContentLoaded', ()=> {
    handleGetCatFactButton();
    handleLikeBtn();
  })
 
  
function fetchCatPictures(){
     fetch('https://api.thecatapi.com/v1/images/search')
     .then(response => response.json())
     .then(pictures => {
        images.setAttribute('src', pictures[0].url);
         photoList.append(images);
         catImgContainer.append(photoList);
         
     })
 }
 

function handleCatFactFetch() {
     const fetchURL = 'https://catfact.ninja/fact'
     fetch(fetchURL)
         .then(resp => resp.json())
         .then(catFacts => createCatFacts(catFacts))           
 }
     
const catFactContainer = document.getElementById('fact_container');
const catFunFactList = document.getElementById('specific_facts');
function createCatFacts(catFacts){
     catFunFactList.innerHTML = catFacts.fact;
     catFactContainer.append(catFunFactList);
     }
 

 //Handeling buttons
 function handleGetCatFactButton(){
     getFactBtn.addEventListener('click', (e) => {
     handleCatFactFetch(e);
     fetchCatPictures(e);
     resetLikes(e);
     })
 }

//Clearing and reseting page
const hissBtn = document.getElementById('clear_results')
hissBtn.addEventListener('click', clearAllButton)

 
function clearAllButton(e){
       location.reload(e);
 }


 //Like button
 const likeBtn = document.getElementById('like_btn');
 function handleLikeBtn(){
     likeBtn.addEventListener('click', ()=>{
        let likes = document.querySelector('#count');
        num = parseInt(likes.innerText)
        num += 1
        return likes.innerText = num
 
     })
 }
 function resetLikes(){
    let likes = document.querySelector('#count');
     return likes.innerText = 0
}

//Adopt & saving info to DOM
const adoptBtn = document.getElementById('save_btn');
adoptBtn.addEventListener('click', ()=> {
    const savedContainer= document.getElementById("saved_cards");
    const savedFact= catFactContainer.textContent;
    const savedImg= catImgContainer.images;//not grabbing getting undefined
    const likeCountCurrent = likeBtn.innerText
    savedContainer.append(savedFact, savedImg, likeCountCurrent)

})

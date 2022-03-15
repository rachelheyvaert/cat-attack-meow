
document.addEventListener('DOMContentLoaded', ()=> {
    handleGetCatFactButton()
    handleLikeBtn()
  })
 
  
 function fetchCatPictures(){
     fetch('https://api.thecatapi.com/v1/images/search')
     .then(response => response.json())
     .then(pictures => {
         const catImgContainer = document.getElementById('img_container');
         const photoList = document.getElementById('single_photos');
         const images = document.getElementById("cat_pics");
         images.setAttribute('src', pictures[0].url);
         photoList.append(images);
         catImgContainer.append(photoList);
         
     } )
 }
 
 
  function handleCatFactFetch() {
     const fetchURL = 'https://catfact.ninja/fact'
     fetch(fetchURL)
         .then(resp => resp.json())
         .then(catFacts => createCatFacts(catFacts))      
         
 }
              
 
  function createCatFacts(catFacts){
     const catFactContainer = document.getElementById('fact_container');
     const catFunFactList = document.getElementById('specific_facts');
     catFunFactList.innerHTML = catFacts.fact;
     catFactContainer.append(catFunFactList);
     }
 
 
 //Handeling buttons
 function handleGetCatFactButton(){
     const getFactBtn = document.getElementById("cat_button");
     getFactBtn.addEventListener('click', (e) => {
     handleCatFactFetch(e);
     fetchCatPictures(e);
     })
 }
 

const hissBtn = document.getElementById('clear_results')
hissBtn.addEventListener('click', clearAllButton)

 
function clearAllButton(e){
       location.reload(e);
       
 }
 
 function handleLikeBtn(){
    const likeBtn = document.getElementById('like_btn');
     likeBtn.addEventListener('click', ()=>{
        let likes = document.querySelector('#count');
        num = parseInt(likes.innerText)
        num += 1
        return likes.innerText = num
 
     })
 }
 
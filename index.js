document.addEventListener('DOMContentLoaded', ()=> {
   
 })


 function handleFetch() {
    const fetchURL = 'https://catfact.ninja/fact'
    fetch(fetchURL)
.then(resp => resp.json())
.then(data => console.log(data))
 }

 
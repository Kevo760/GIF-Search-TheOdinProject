import noImg from './images/no-img.jpg';

function siteBtnFunctions() {
    const gif = document.querySelector('#gif');
    const searchGif = document.querySelector('#search-gif');
    
    let search = 'shaq';
    
    
    const gifForm = document.querySelector('#gif-form');
    gifForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
       
        search = searchGif.value;
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LvORzdnADWvyluc0ptHK08Zu3ijRFDaR&s=${search}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            gif.src = response.data.images.original.url;
          })
          .catch(function() {
            gif.src= noImg;
          });
    });
    
    
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', function() {
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LvORzdnADWvyluc0ptHK08Zu3ijRFDaR&s=${search}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            gif.src = response.data.images.original.url;
          })
    });

};

export {siteBtnFunctions}
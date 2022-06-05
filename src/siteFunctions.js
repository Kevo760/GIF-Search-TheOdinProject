import noImg from './images/no-img.jpg';

function siteBtnFunctions() {
    const gif = document.querySelector('#gif');
    const searchGif = document.querySelector('#search-gif');
    
    let search = 'shaq';
    
    
    const gifForm = document.querySelector('#gif-form');
    gifForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
        search = searchGif.value;

        try {
          getGIF();
        } catch (error) {
          gif.src= noImg;
        }
    });
    
    
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', function() {
      try {
        getGIF();
      } catch (error) {
        gif.src= noImg;
      }
})
};




async function getGIF() {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LvORzdnADWvyluc0ptHK08Zu3ijRFDaR&s=${search}`, {mode: 'cors'});
  const getGIF = await response.json();
  gif.src = getGIF.data.images.original.url;
}


export {siteBtnFunctions}
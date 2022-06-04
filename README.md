# TheOdinProject - Working with API assignment

This is a solution to the [Working with API assignment](https://www.theodinproject.com/lessons/node-path-javascript-working-with-apis).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- Know what API is and what it stands for
- How to access to an API restricted
-  How to fetch and extract data from an API


### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here]
- Live Site URL: [Add live site URL here]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript



### What I learned

I learned how to use fetch data to access data from an API. I learned you need a special API key to allow the website to know who is using it and how many request that person can make. I also learned that with Fetch you need a .then() function to catch the data then convert the data then have a .catch() function to catch any error.


```js
const proudOfThisFunc = () => {
    const gifForm = document.querySelector('#gif-form');
    gifForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
       
        search = searchGif.value;
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=HIDDEN&s=${search}`, {mode: 'cors'})
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
```



### Continued development

I would like to do more fetch, then, and catch functions to get more pratice in to allow me to gain more knowledge and allow me to use these function without looking documents constantly.



## Author

- Twitter - [@CodeKevo](https://www.twitter.com/CodeKevo)



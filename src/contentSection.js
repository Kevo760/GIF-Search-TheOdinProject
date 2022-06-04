import noImg from './images/no-img.jpg';

function createContentSection() {
    const content = document.createElement('div');
    content.classList.add('content');
    content.append(createGifForm());
    content.append(createGifBox());




    return document.body.append(content);
};


function createGifForm() {
    const form = document.createElement('form');
    form.id = 'gif-form';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search for a GIF';
    input.id = 'search-gif';

    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'Search'; 

    form.append(input);
    form.append(submitBtn);


    return form;
};


function createGifBox() {
    const gifBox = document.createElement('div');
    gifBox.classList.add('gif-box');

    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');

    const img = document.createElement('img');
    img.id = 'gif';
    img.src = noImg;
    imgBox.append(img);

    const nextBtn = document.createElement('button');
    nextBtn.id = 'next-btn';
    nextBtn.innerText = 'Next GIF';
    


    gifBox.append(imgBox);
    gifBox.append(nextBtn);

    return gifBox;
};




export {createContentSection}
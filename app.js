const CAT_API = 'https://api.thecatapi.com/v1/images/search';
const catImage = document.querySelector('.cat-image');
const catButton = document.querySelector('.show-image');

async function getCat(){
    catImage.innerHTML = '';
    
    const response = await fetch(CAT_API,{
        method:'GET',
        withCredentials: true,
        headers:{
            'X-Auth-Token':'4c610bb3-ed48-4b41-968f-83ddf812bc0e'
        }
    });

    const res  = await response.json();
    imageUrl = res[0].url;

    console.log(imageUrl);

    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '600px';
    img.style.maxHeight = '600px';


    

    catImage.appendChild(img);

}

catButton.addEventListener('click',getCat);


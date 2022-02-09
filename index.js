const cardImage = document.querySelector('.card-image')
const cardTitle = document.querySelector('.title')
const cardDescription = document.querySelector('.description')
const cardAuthor = document.querySelector('.author')
const cardLocation = document.querySelector('.location')
const changeBtn = document.querySelector('.btn')

changeBtn.addEventListener('click', changeImage)

function changeImage(){

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=natural")
    .then(response => response.json())
    .then(data => {
     console.log(data)
     imageUrl = data.urls.regular;
     title = data.description;
     altDescription = data.alt_description;
     authorName = data.user.name;
     imgLocation = data.location.title;
     
     cardImage.innerHTML = `
     
     <img src="${imageUrl}"/>
     
     `
     cardTitle.textContent = title;
     cardDescription.textContent = altDescription;

     cardAuthor.textContent = authorName;

     cardLocation.innerHTML = imgLocation;


    })

    .catch(err => console.log(err))

}
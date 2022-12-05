// Dog API - https://dog.ceo/dog-api/ 

// 1. Hämta 10 random bilder av en hundras som användaren får ange. Visa alla bilder på webbsidan.
// Låt även användaren bestämma hur många bilder som ska hämtas. Tex 5 husky, 2 dalmatians osv.

const btn = document.querySelector("#input-btn");
btn.addEventListener('click', getBreed)

function getBreed(event) {
    event.preventDefault();
    
    const breedInput = document.querySelector('#breed-input');
    const breed = breedInput.value.toLowerCase();
    console.log(breed);

    const numberInput = document.querySelector('#number-input');
    const number = numberInput.value;
    console.log(number);


    fetchDogImage(breed, number);
    breedInput.value = '';
    numberInput.value = '';
}


function fetchDogImage(breedPar, numberPar) {
    const url = `https://dog.ceo/api/breed/${breedPar}/images/random/${numberPar}`;
    fetch(url).then(response => response.json()
    
    ).then(data => {
        console.log(data);
        console.log(typeof data);

        data.message.forEach(element => {
            const img = document.createElement('img');
            document.body.append(img);
            img.src = element;
            
    })
})

    .catch(error => {
        console.log(error);
    });
    
};
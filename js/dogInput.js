const btn = document.querySelector("#breed-btn");


btn.addEventListener('click', getBreed)

function getBreed(event){
    event.preventDefault();
    const input = document.querySelector('#breed-input');
    // console.log(input.value);

    const breed = input.value.toLowerCase();
    console.log(breed);
    fetchDogImage(breed);

}

function fetchDogImage(breedPar){
const url  = `https://dog.ceo/api/breed/${breedPar}/images/random/`;
console.log(url);
}
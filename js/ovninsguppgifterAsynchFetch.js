// 1. Hämta en random hundbildsurl av en dalmatiner och visa bilden på Webbsidan.

const randomDogUrl = 'https://dog.ceo/api/breeds/image/random'
const dogPromise = fetch(randomDogUrl);
console.log(dogPromise);

//promiseobjektet som vi aldrig ser som fetch returnerar
// {
//     state: 'fulfilled',
//     result: Response{
//         status: 200,
//         data: JSONsvaret från api:t
//     }
// }

const jsonPromise = dogPromise.then(
    function(response){
        return response.json();
    }
);

// {
//     state: 'fulfilled',
//     result: {
//         message: bildurl, 
//         status: "success"
//     }
// }

console.log(jsonPromise);

jsonPromise.then(
    function(data){
        console.log(data);
    }
)
// const randomDogObj = JSON.parse(randomDog);

// console.log(randomDogObj);

// const imgEl = document.createElement('img');
// document.body.appendChild(imgEl);
// imgEl.src = randomDogObj.message;

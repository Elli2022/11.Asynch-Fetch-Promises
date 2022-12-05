// Punk API - https://punkapi.com/documentation/v2 
// 1. Låt en användare söka på öl genom att ange ett namn. Visa namn, bild och beskrivning för ett enda öl. 



// const btn = document.querySelector('#input-btn');
// btn.addEventListener('click', getBeer)

// function getBeer(event) {
//     event.preventDefault();

//     const beerInput = document.querySelector('#beer-input');
//     const beer = beerInput.value.toLowerCase();
//     console.log(beer);

//     fetchBeer(beer);
//     beerInput.value = '';
// }


// function fetchBeer(beerPar) {
//     const url = `https://api.punkapi.com/v2/beers?beer_name=${beerPar}`;
//     fetch(url).then(response => response.json()

//     ).then(data => {

//         console.log(typeof data);

//         data.forEach(
//             function (data) {

//                 //name
//                 const p = document.createElement('p');
//                 p.innerText = data.name;
//                 document.body.appendChild(p);
//                 console.log(data);


//                 //tagline
//                 const taglineEl = document.createElement('p');
//                 document.body.appendChild(taglineEl);
//                 taglineEl.innerText = data.description;
//                 console.log(taglineEl);

//                 //image
//                 const imgEl = document.createElement('img');
//                 document.body.appendChild(imgEl);
//                 imgEl.src = data.image_url;

//             })

//     })
//     .catch(error => {
//         console.log(error);
//     });

// }


// 2. Låt en användare ange vilken mat som ska passa till ölen och sök fram öl som passar. Visa namnet för alla öl i svaret.


// const btn = document.querySelector('#input-btn');
// btn.addEventListener('click', getBeer)


// function getBeer(event) {
//     event.preventDefault();

//     const foodInput = document.querySelector('#food-pairing');
//     const food = foodInput.value.toLowerCase();
//     console.log(food);

//     fetchBeer(food);
//     foodInput.value = '';

// }


// function fetchBeer(beerPar) {
//     const url = `https://api.punkapi.com/v2/beers?food=${beerPar}`;
//     console.log(url);

//     fetch(url).then(response => response.json()


//     ).then(data => {


//         console.log(typeof data);

//         data.forEach(
//             function (data) {

//                         const p = document.createElement('p');
//                         p.innerText = data.name;
//                         document.body.appendChild(p);
//                         console.log(data);


//                         //food_pairing
//                         const taglineEl = document.createElement('p');
//                         document.body.appendChild(taglineEl);
//                         taglineEl.innerText = data.food_pairing;
//                         console.log(taglineEl);
                       

//                         //image
//                         const imgEl = document.createElement('img');
//                         document.body.appendChild(imgEl);
//                         imgEl.src = data.image_url;
//                     }
//             )

//     }
//     )

//     .catch (error => {
//     console.log(error);
// });

// }


// 3. Låt användaren välja ett datum och visa namnet på alla öl som har bryggts innan det datumet. 

const btn = document.querySelector('#input-btn');
btn.addEventListener('click', getBeer);


function getBeer(event) {
    event.preventDefault();

    const dateInput = document.querySelector('#date');
    const date = dateInput.value.toLowerCase();
    console.log(date);

    fetchBeer(date);
    // dateInput.value = '';
   



}


function fetchBeer(datePar) {
    const url = `https://api.punkapi.com/v2/beers?brewed_before=${datePar}`;
    console.log(url);

    fetch(url).then(response => response.json()


    ).then(data => {


        console.log(typeof data);

        data.forEach(
            function (data) {

                        const p = document.createElement('p');
                        p.innerText = data.name;
                        document.body.appendChild(p);
                        console.log(data);

                        //first_brewed
                        const firstBrewedEl = document.createElement('p');
                        document.body.appendChild(firstBrewedEl);
                        firstBrewedEl.innerText = data.first_brewed;
                        console.log(firstBrewedEl);
                       

                        //image
                        const imgEl = document.createElement('img');
                        document.body.appendChild(imgEl);
                        imgEl.src = data.image_url;
                    }
            )
            

    }
    )

    .catch (error => {
    console.log(error);
});

}
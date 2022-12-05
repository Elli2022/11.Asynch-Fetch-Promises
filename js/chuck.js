// Chuck Norris jokes - https://api.chucknorris.io/ 
// Låt användaren söka på en kategori och hämta ett random skämt i den kategorin. Visa skämtet.

//event när man klickar på knappen
const btn = document.querySelector("#input-btn");
btn.addEventListener('click', getJoke)

//tar inputen från användaren och loggar i konsolen.
function getJoke(event){
    event.preventDefault();

    const categoryInput = document.querySelector('#category-input');
    //genom detta kvittar det om användaren använder sig av stora bokstäver
    const category = categoryInput.value.toLowerCase();
    console.log(category);

    //anropar metoden som hämtar skämtet
    fetchJoke(category);
    categoryInput.value = '';
}

//hämtar skämtet utifrån kategorin som användaren har angivit
function fetchJoke(categoryPar){
    const url = `https://api.chucknorris.io/jokes/random?category=${categoryPar}`;
    fetch(url).then(response => response.json()

    ).then(data=>{

        console.log(data.value);
        // console.log(typeof data);

            const p = document.createElement('p');
            document.body.appendChild(p);
            p.innerText= data.value;

    
    })
    .catch(error => {
        console.log(error);
    });
}

const url = `https://api.punkapi.com/v2/beers`; 
const beerPromise = fetch(url); //1 & 2
console.log(beerPromise);

//7
const jsonPromise = beerPromise.then(
    function(response){ //4
        console.log(response);
        return response.json(); //6
    }
);

console.log(jsonPromise);
 
jsonPromise.then(
    function(data){ //8
        console.log(data); //9
    }
)

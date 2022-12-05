// Chuck Norris-skämten

const url = 'https://api.chucknorris.io/jokes/random?category=food';

fetch(url).then(response =>response.json()).then(showJoke).catch(showError);

function showJoke(jokeData){
    console.log(jokeData.value);
}

function showError(showError){
    console.log(error);
}


// detta loggas INNAN själva skämtet visas. Det tar mao en liten stund för det att bearbetas.
console.log('Gör det här också');

//-----------------------------------------

// Status 404

const url2 = 'https://api.chucknorris.io/jokes/random?category=food';

fetch(url2)
.then(response =>{
    console.log(response);
    if(response.status >= 200 && response.status <300){
        return response.json()
    }
    else{
        throw 'Datan gick inte att hämta';
    }
})

.then(showJoke)
.catch(showError);

function showJoke(jokeData){
    console.log(jokeData.value);
}

function showError(showError){
    console.log(error);
}
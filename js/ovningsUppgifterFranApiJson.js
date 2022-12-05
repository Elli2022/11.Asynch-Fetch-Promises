const url = 'https://dog.ceo/api/breed/husky/images/random';

fetch(url).then(
    function(response){
        console.log(response);
        return response.json();
    }
).then(
    function(data){
        console.log(data.message);
        const img = document.createElement('img');
        img.src = data.message;
        document.body.append(img);
    }
)

//-----------------------------


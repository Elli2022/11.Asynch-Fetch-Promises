// Bored API - https://www.boredapi.com/documentation 
// 1. Låt en användare söka på en typ av aktivitet. Hämta en random aktivitet och visa i DOM:en.

const btn = document.querySelector('#search-btn');
const p = document.createElement('p');
btn.addEventListener('click', getRandomActivity);

function getRandomActivity(event) {
    event.preventDefault();

    const participantsInput = document.querySelector('#participant-input');
    const participants = participantsInput.value;
    console.log(participants);

    const activityInput = document.querySelector('#activity-input');
    const activity = activityInput.value.toLowerCase();
    console.log(activity);

    fetchActivity(activity, participants);
    activityInput.value = '';
    participantsInput.value = '';


}

function fetchActivity(activityPar, participantPar) {
    const url = `http://www.boredapi.com/api/activity?type=${activityPar}&participants=${participantPar}`;


    fetch(url).then(response => response.json()

    ).then(data=>{

        console.log(typeof data);

                //aktivitet
                p.innerText = data.activity;
                document.body.appendChild(p);
                console.log(data);
            })

    // ).then(handleAcitivty)      
    // .catch(handleError)      
    }

    
    // function handleAcitivity(activityInfo){
    //     console.log(activityInfo.activity);

    //     if(activityInfo.activity === undefined){
    //         throw 'det gick inte';
    //     }else{
    //         const activityH2=document.querySelector('#activity');
    //         activityH2.innerText = activityInfo.activity;
    //     }
        
    // }
// .catch(
//     function(error){
//         console.log(error);
//         const errorP =document.querySelector('#error-message');
//         errorP.innerText = error.
// })


// Lägg till antal deltagare i sökningen. Visa aktiviteten.


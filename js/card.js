//CARD


let personajes = []

async function fetchApi() {
    try{
        let urlApi = 'https://hp-api.onrender.com/api/characters'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        console.log(response)
        personajes = [...response]
        console.log(personajes);
        printCards('perscomp',response)
        return response
    } catch(error){
        console.log(error);
    }
}

fetchApi();


let cardPersonajes = []

function printCards(){
    for (let card of personajes){
        let listcard = 
        `
        <div class="card" style="width: 18rem;" ${card._id}>
            <img src=${card.image} class="card-img-top img-fit" alt=${card.name}>
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${card.house}</h6>
                <a class="btn btn-primary" href="" role="button">Detalles</a>
            </div>
        </div>
        ` 
        cardPersonajes.push(listcard);
    }
    let basecard = document.getElementById('perscomp');
    basecard.innerHTML = cardPersonajes.join('')
}

printCards ();

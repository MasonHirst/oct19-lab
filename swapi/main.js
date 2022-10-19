let button = document.querySelector('button')
let charCardsDiv = document.querySelector('#character-cards')


function clickedButton(event) {
    event.preventDefault()
    console.log('button was clicked!')

    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res) => {
        // console.log(res.data.results[0].residents)

        let residentsArr = res.data.results[0].residents

        for (let i = 0; i < residentsArr.length; i++) {
            axios.get(residentsArr[i]).then((res) => {
                // console.log(res.data.name)
                let newH2 = document.createElement('h2')
                newH2.textContent = `${res.data.name}`
                charCardsDiv.appendChild(newH2)
            })
        }

    }).catch((err) => {
        console.log(err)
    })
}

button.addEventListener('click', clickedButton)



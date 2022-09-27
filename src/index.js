const dogBar = document.querySelector('#dog-bar')
const dogInfo = document.querySelector('#dog-info')

document.addEventListener('DOMContentLoaded', e => {

    function fetchDogs(url, configOb) {
        return fetch(url, configOb)
        .then(res => res.json())
    }
    
    
    function renderDogs() {
        fetchDogs('http://localhost:3000/pups')
        .then(dogs => {
            console.log('dogs: ', dogs)
            console.log(dogBar)
            dogs.forEach(dog => {
                console.log('dog: ', dog)
                const span = document.createElement('span')
                span.textContent = dog.name;
                span.id = dog.name;
                span.className = 'dog';
                dogBar.append(span)
                console.log('span: ', span)
                pupButtonListener(span, dog)
            })
        })
    }
    renderDogs()
    function pupButtonListener(dogButton, dogObj) {
        dogButton.addEventListener('click', e => {
            const h2 = document.createElement('h2');
            const img = document.createElement('img')
            const btn = document.createElement('button')
            btn.id = dogObj.id.toString()

            if (dogInfo.hasChildNodes()) dogInfo.innerHTML = '';

            h2.textContent = dogObj.name;
            img.src = dogObj.image;
            if (dogObj.isGoodDog) 
                btn.textContent = 'Good Dog!';
            else btn.textContent = 'Bad Dog!'

            dogInfo.append(h2, img, btn)
            console.log('btnID: ', Number(btn.id))
            btn.addEventListener('click', buttonToggle
            // e => {
            //     if (dogObj.isGoodDog) {
            //         btn.textContent = 'Bad Dog!'
            //         // fetch(`http://localhost:3000/pups${Number(btn.id)}`, {
            //         //     method: 'PATCH',
            //         //     headers: {
            //         //         'content-type': 'application/json',
            //         //         'accept': 'application/json'
            //         //     },
            //         //     body: JSON.stringify(
            //         //         isGoodDog: 'false'
            //         //     )
            //         // } )
            //     }
            //     if (!dogObj.isGoodDog) {
            //         btn.textContent = 'Good Dog!'
            //         // fetch(`http://localhost:3000/pups${Number(btn.id)}`, {
            //         //     method: 'PATCH',
            //         //     headers: {
            //         //         'content-type': 'application/json',
            //         //         'accept': 'application/json'
            //         //     },
            //         //     body: JSON.stringify(
            //         //         isGoodDog: 'false'
            //         //     )
            //         // } )
            //     }
            //}
            )
        })
    }
    
})
// function goodBadToggle(e) {
//     const btn = document.querySelector('#')
//     fetch(`http://localhost:3000/pups${}`)
// }

document.addEventListener("DOMContentLoaded", loadDogs)

function buttonToggle(e) {
    const btn = dogInfo.querySelector('button')
    console.log(btn.textContent)
    if (btn.textContent === 'Good Dog!') {
        btn.textContent = 'Bad Dog!'
        fetch(`http://localhost:3000/pups/${Number(btn.id)}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                isGoodDog: false
            })
        })
    } else {
        btn.textContent = 'Good Dog!'
        fetch(`http://localhost:3000/pups/${Number(btn.id)}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                isGoodDog: true
            })
        })
    }
}
//==================   OG db.json   ==================================
// {
//   "pups": [
//     {
//       "id": 1,
//       "name": "Mr. Bonkers",
//       "isGoodDog": true,
//       "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//     },
//     {
//       "id": 2,
//       "name": "Nugget",
//       "isGoodDog": false,
//       "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_2.jpg"
//     },
//     {
//       "id": 3,
//       "name": "Skittles",
//       "isGoodDog": true,
//       "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_3.jpg"
//     },
//     {
//       "id": 4,
//       "name": "Buttercup",
//       "isGoodDog": false,
//       "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_4.jpg"
//     },
//     {
//       "id": 5,
//       "name": "Lucipher",
//       "isGoodDog": false,
//       "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_5.jpg"
//     },
//     {
//       "id": 6,
//       "name": "Snooper Pooper",
//       "isGoodDog": false,
//       "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_6.jpg"
//     },
//     {
//       "id": 7,
//       "name": "Puddles",
//       "isGoodDog": true,
//       "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_7.jpg"
//     },
//     {
//       "id": 8,
//       "name": "Mittens",
//       "isGoodDog": true,
//       "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//     },
//     {
//       "id": 9,
//       "name": "Middens",
//       "isGoodDog": true,
//       "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_2.jpg"
//     },
//     {
//       "id": 10,
//       "name": "Fido",
//       "isGoodDog": true,
//       "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_5.jpg"
//     }
//   ]
// }
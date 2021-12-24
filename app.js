class Card {
    constructor(name, family, points) {
        this.name = name
        this.family = family
        this.points = points
    }
}
const heartsCard = []
const spadesCard = []
const clubsCard = []
const diamondsCard = []
const cardName = ['deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'valet', 'dame', 'roi', 'as']
const family = ['coeur', 'carreau', 'pique', 'trêfle']

for (let j = 0; j < cardName.length; j++) {
    heartsCard.push(new Card(`${cardName[j]}`, `${family[0]}`, j + 2))
    spadesCard.push(new Card(`${cardName[j]}`, `${family[1]}`, j + 2))
    clubsCard.push(new Card(`${cardName[j]}`, `${family[2]}`, j + 2))
    diamondsCard.push(new Card(`${cardName[j]}`, `${family[3]}`, j + 2))
}

function shuffleDeck(arr) {
    arr.sort((cardA, cardB) => {
        let randomNumber = Math.random()
        if (randomNumber < 0.5) {
            return 1
        } else {
            return -1
        }
    })
}
const cardDeckEmpty = []
const cardDeck = cardDeckEmpty.concat(heartsCard, spadesCard, diamondsCard, clubsCard)

shuffleDeck(cardDeck)

let myPoggersDeck = []
let IABoomerDeck = []

function addCardForMe() {
    myPoggersDeck.push(cardDeck[0])
}

function addCardForIA() {
    IABoomerDeck.push(cardDeck[0])
}

for (let i = 0; i < cardDeck.length; i++) {
    let mod = i % 2
    if (mod === 0) {
        myPoggersDeck.push(cardDeck[i])
    } else {
        IABoomerDeck.push(cardDeck[i])
    }
}

console.log('taille mon deck: ', myPoggersDeck.length, myPoggersDeck)
console.log("taille du deck de l'ia: ", IABoomerDeck.length, IABoomerDeck)
console.log("taille du deck initial: ", cardDeck.length, cardDeck)

do {
    let posOneMyDeck = myPoggersDeck[0]
    let posOneIADeck = IABoomerDeck[0]

    myPoggersDeck.shift()
    console.log('Je pose ma carte: ', posOneMyDeck)
    IABoomerDeck.shift()
    console.log("L'IA pose sa carte: ", posOneIADeck)

    if (posOneMyDeck.points > posOneIADeck.points) {
        console.log("J'ai remporté ce tour !")
        myPoggersDeck.push(posOneIADeck)
        myPoggersDeck.push(posOneMyDeck)

    } else if (posOneMyDeck.points < posOneIADeck.points) {
        console.log("L'IA a remporté ce tour !")
        IABoomerDeck.push(posOneIADeck)
        IABoomerDeck.push(posOneMyDeck)
    } else {
       
    }
    console.log('Il me reste: ', myPoggersDeck.length, ' cartes')
    console.log('Il reste à l\'IA: ', IABoomerDeck.length, ' cartes')
} while (myPoggersDeck.length > 0 && IABoomerDeck.length > 0)


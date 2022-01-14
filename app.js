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
const family = ['Coeur', 'Carreau', 'Pique', 'Trêfle']

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

let playerDeck = []
let IADeck = []

function addCardForMe() {
    playerDeck.push(cardDeck[0])
}

function addCardForIA() {
    IADeck.push(cardDeck[0])
}

for (let i = 0; i < cardDeck.length; i++) {
    let mod = i % 2
    if (mod === 0) {
        playerDeck.push(cardDeck[i])
    } else {
        IADeck.push(cardDeck[i])
    }
}
console.log('taille mon deck: ', playerDeck.length, playerDeck)
console.log("taille du deck de l'ia: ", IADeck.length, IADeck)
console.log("taille du deck initial: ", cardDeck.length, cardDeck)

let rewards = []

function startRound(firstCardPlayer, firstCardIA) {
    console.log('DEBUT DU TOUR: ', 'MA FIRST CARD: ', firstCardPlayer, 'FIRST CARD IA: ', firstCardIA)
    console.log('Je pose ma carte: ', firstCardPlayer, 'taille deck: ', `${playerDeck.length}`)
    console.log("L'IA pose sa carte: ", firstCardIA, 'taille deck: ', `${IADeck.length}`)
}

function playerWin(playerDeck) {
    console.log("J'ai remporté ce tour !")
    playerDeck.push(...rewards)
    console.log(`Je ramasse ${rewards.length} cartes !`)
    rewards.splice(0, rewards.length)
}

function IAWin(IADeck) {
    console.log("L'IA a remporté ce tour !")
    IADeck.push(...rewards)
    console.log(`L\'IA ramasse ${rewards.length} cartes !`)
    rewards.splice(0, rewards.length)
}

function hiddenCard(playerDeck, IADeck) {
    console.log('=======================================================================================')
    console.log("Je pose une carte face cachée")
    rewards.push(playerDeck.shift())
    console.log(rewards)
    console.log("L'IA pose une carte face cachée")
    rewards.push(IADeck.shift())
    console.log(rewards)
    return round()
}

function round() {

    rewards.unshift(playerDeck[0], IADeck[0])
    playerDeck.shift()
    IADeck.shift()
    console.log('rewards:', rewards)
    startRound(rewards[0], rewards[1])

    if (rewards[0].points > rewards[1].points) {
        playerWin(playerDeck)

    } else if (rewards[0].points < rewards[1].points) {
        IAWin(IADeck)
    } else {
        hiddenCard(playerDeck, IADeck)
    }
    console.log('Il me reste: ', playerDeck.length, ' cartes')
    console.log('Il reste à l\'IA: ', IADeck.length, ' cartes')

}


while (playerDeck.length > 0 && IADeck.length > 0) {
    round()
}

if (playerDeck.length === 0) {
    return console.log("Félicitation à l'IA ! Elle vient de remporter la partie")
} else if (IADeck.length === 0) {
    return console.log("Super ! Je viens de remporter cette partie !")
}

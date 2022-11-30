function getCeoDogImage() {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // console.log("smokey", data)
            return data.message
        })
}

function getWoofDogImage() {
    return fetch("https://random.dog/woof.json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // console.log("thumbelina", data)
            return data.url
        })
}

function getPairOfPuppiesAndUpdateDOM() {
    document.getElementById("fetch-puppies-btn").disabled = true

    return Promise.all([getCeoDogImage(), getWoofDogImage()]).then((data) => {
        const [ceoDogUrl, woofDogUrl] = data

        document.getElementById("image-ceo").src = ceoDogUrl
        document.getElementById("image-woof").src = woofDogUrl
    })
}

const state = {
    scoreLeft: 0,
    scoreRight: 0,
    resolve: null,
}

// wait for dom content to load

document.addEventListener("DOMContentLoaded", () => {
    // This is the start of our program (the entry point)

    const scoreLeft = document.getElementById("score-left")
    const scoreRight = document.getElementById("score-right")

    setInterval(() => {
        scoreLeft.innerText = state.scoreLeft
        scoreRight.innerText = state.scoreRight
    }, 200)

    roundOfCompetition()
})

function roundOfCompetition() {
    const modal = document.getElementById("modal-container")

    getPairOfPuppiesAndUpdateDOM()
        .then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 2000)
            })
        })
        .then(() => {
            modal.style.display = "block"

            // We need to WAIT until the user makes a choice (i.e.: this needs to be async)

            return new Promise((resolve) => {
                state.resolve = resolve
            })
        })
        .then((choice) => {
            modal.style.display = "none"

            switch (choice) {
                case "left":
                    state.scoreLeft = state.scoreLeft + 1
                    break
                case "right":
                    state.scoreRight = state.scoreRight + 1
                    break
                case "retry":
                    break
            }

            roundOfCompetition()
        })
}

function leftBtnClicked() {
    state.resolve("left")
}

function retryBtnClicked() {
    state.resolve("retry")
}

function rightBtnClicked() {
    state.resolve("right")
}

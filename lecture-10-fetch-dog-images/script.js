function getDogImage() {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data.message
        })
}

function getWoofImage() {
    return fetch("https://random.dog/woof.json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data.url
        })
}

function getPairOfPuppyImageUrlsAndUpdateDOM() {
    document.getElementById("fetch-puppies-btn").disabled = true

    Promise.all([getDogImage(), getWoofImage()]).then((data) => {
        const [image1Url, image2Url] = data

        document.getElementById("image-1").src = image1Url
        document.getElementById("image-2").src = image2Url
    })
}

// getPairOfPuppyImageUrlsAndUpdateDOM()

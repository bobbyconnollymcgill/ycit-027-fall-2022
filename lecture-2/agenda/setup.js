// const data = require("./data.js") // This doesn't work because this isn't a NodeJS environment

// console.log("smokey", data)

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] // prettier-ignore
const rootDiv = document.body.firstElementChild
const header = document.querySelector("header")
const main = document.querySelector("main")

// This forEach has to do with the header
daysOfWeek.forEach((day, ind) => {
    const theDiv = document.createElement("div")

    theDiv.id = day
    theDiv.innerText = day.substring(0, 3)

    if (ind === 3) {
        theDiv.classList.add("selected")
    }

    header.appendChild(theDiv)
})

const sections = []

// This forEach has to do with the main area (the seconds)
daysOfWeek.forEach((day, ind) => {
    const tasks = data.get(day)

    // ind === 6 && console.log("taco-before", tasks)

    const result = tasks.map((elem) => {
        return `<li>${elem}</li>`
    })

    // ind === 6 && console.log("taco-after", result)

    const theSection = document.createElement("section")

    theSection.innerHTML = `<h3>${day}</h3><ul>${result.join("")}</ul>`

    main.appendChild(theSection)

    /**
     *
     * Do this before we leave the scope because we need to retain
     * those references to the sections
     *
     */
    sections.push(theSection)
})

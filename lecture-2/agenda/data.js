const data = new Map()
data.set("Monday", ["Rake leaves", "Go to the park", "Buy groceries"])
data.set("Tuesday", ["Clean the house", "Do the dishes", "Wash the car"])
data.set("Wednesday", ["Do the laundry", "Walk the dog", "Go to the gym"])
data.set("Thursday", ["Go to the movies", "Go to the mall", "Go to the beach"])
data.set("Friday", ["Go to the park", "Go to the zoo", "Go to the museum"])
data.set("Saturday", ["Go to the library", "Go to the bookstore", "Go to the park"]) // prettier-ignore
data.set("Sunday", ["Go to the park", "Go to the zoo", "Go to the museum"])

// module.export = data // This doesn't work because this isn't a NodeJS environment
window.agendaData = data

// const agendaData__option1 = [
//     ["Rake leaves", "Go to the park", "Buy groceries"],
//     ["Clean the house", "Do the dishes", "Wash the car"],
//     ["Do the laundry", "Walk the dog", "Go to the gym"],
//     ["Go to the movies", "Go to the mall", "Go to the beach"],
//     ["Go to the park", "Go to the zoo", "Go to the museum"],
//     ["Go to the library", "Go to the bookstore", "Go to the park"],
//     ["Go to the park", "Go to the zoo", "Go to the museum"],
// ]

// const agendaData__option2 = {
//     Monday: ["Rake leaves", "Go to the park", "Buy groceries"],
//     Tuesday: ["Clean the house", "Do the dishes", "Wash the car"],
//     Wednesday: ["Do the laundry", "Walk the dog", "Go to the gym"],
//     Thursday: ["Go to the movies", "Go to the mall", "Go to the beach"],
//     Friday: ["Go to the park", "Go to the zoo", "Go to the museum"],
//     Saturday: ["Go to the library", "Go to the bookstore", "Go to the park"],
//     Sunday: ["Go to the park", "Go to the zoo", "Go to the museum"],
// }

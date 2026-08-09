let firstName = "Vansh"
let lastName = " garg"

let fullName = firstName + lastName

console.log(fullName)

let greeting = "Hi there"

function print() {
    console.log(greeting + "," + firstName + "!")
}

print()

let myPoints = 3

function add3Points() {
    myPoints += 3
    // console.log(myPoints)
}

function removalPoint() {
    myPoints -= 1
    // console.log(myPoints)
}

add3Points()
add3Points()
add3Points()
removalPoint()
removalPoint()

console.log(myPoints)
// https://yummy-seeder-cf8.notion.site/Hooks-and-Functional-Programming-5b060950f5104a2f8d2803cce082325e 
//pure functions
//will return the same thing no matter whats going on around it 
let x = 5
let y = 2
// every time we pass 5, it will return 7
const addTwo = (x) => { return x + 2 }
addTwo()
//but when we add y, it might start to get complicated as our app keeps growing

// everytime you call addTwo, it should be clear to you exactly what it is 

//might make more sense to create a new function that will be straightforward

const addTwoToY = () => { y + 2}



// Higher order functions 
// functions that can call other funcs
const addTwoo = (x) => { 
    return x + 2 }

const addThree = (y) => { 
    return y + 3 }

const giveMeFive = addTwoo()
addThree(giveMeFive(3))
// dont change variable data
// 
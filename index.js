// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    return cats.push('Ralph')
}

function destructivelyPrependCat(){
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    let appendedCatName=[...cats, name]
    return appendedCatName
}
function prependCat(name){
    let prependedCatName=[name,...cats]
    return prependedCatName
}

function removeLastCat(){
    let lastCatName=[...cats.slice(0,2)]
    return lastCatName
}

function removeFirstCat(){
    let firstCatName=[...cats.slice(1)]
    return firstCatName
}

// Code your solution here
function findMatching(anArray, toll) {
    return anArray.filter((i) => i.toUpperCase() === toll.toUpperCase())}

function fuzzyMatch(anArray, toll) {
    return anArray.filter((i) => i.startsWith(toll))}

function matchName(anArray, toll) {
    return anArray.filter((i) => i.name === toll)}
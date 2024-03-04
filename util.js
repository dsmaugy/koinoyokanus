
let executedFunctions = new Set();

function callOnce(func, ...args) {
    if (!executedFunctions.has(func)) {
        func(...args);
        executedFunctions.add(func);
    }
}